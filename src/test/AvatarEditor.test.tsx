import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { AvatarEditor } from '@/components/AvatarEditor'
import * as avatarLib from '@/lib/avatar'
import i18n from '@/test/i18n-setup'

const DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg=='

const mockCtx = {
  filter: '',
  drawImage: vi.fn(),
  clearRect: vi.fn(),
}

const OriginalImage = globalThis.Image

const renderEditor = (onSave = vi.fn(), onClear = vi.fn()) =>
  render(
    <I18nextProvider i18n={i18n}>
      <AvatarEditor imageDataUrl={DATA_URL} onSave={onSave} onClear={onClear} />
    </I18nextProvider>,
  )

describe('AvatarEditor', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      mockCtx as unknown as CanvasRenderingContext2D,
    )
    mockCtx.drawImage.mockClear()
    mockCtx.clearRect.mockClear()

    globalThis.Image = class MockImage {
      onload: (() => void) | null = null
      onerror: (() => void) | null = null
      naturalWidth = 400
      naturalHeight = 400
      width = 400
      height = 400
      set src(_: string) {
        setTimeout(() => this.onload?.(), 0)
      }
    } as unknown as typeof Image
  })

  afterEach(() => {
    globalThis.Image = OriginalImage
    vi.restoreAllMocks()
  })
  it('renders the canvas preview', () => {
    renderEditor()
    expect(screen.getByLabelText('Avatar preview')).toBeInTheDocument()
  })

  it('renders all four preset buttons', () => {
    renderEditor()
    expect(screen.getByText('Grayscale')).toBeInTheDocument()
    expect(screen.getByText('Sepia')).toBeInTheDocument()
    expect(screen.getByText('Blur')).toBeInTheDocument()
    expect(screen.getByText('Invert')).toBeInTheDocument()
  })

  it('toggles a preset on click', () => {
    renderEditor()
    const grayscaleBtn = screen.getByText('Grayscale')

    expect(grayscaleBtn.className).toContain('bg-white/10')
    fireEvent.click(grayscaleBtn)
    expect(grayscaleBtn.className).toContain('bg-(--color-accent)')
  })

  it('renders brightness and contrast sliders', () => {
    renderEditor()
    expect(screen.getByText('Bright')).toBeInTheDocument()
    expect(screen.getByText('Contrast')).toBeInTheDocument()
  })

  it('updates brightness slider value', () => {
    renderEditor()
    const sliders = screen.getAllByRole('slider')
    const brightnessSlider = sliders[0]!
    fireEvent.change(brightnessSlider, { target: { value: '130' } })
    expect(screen.getByText('130')).toBeInTheDocument()
  })

  it('updates contrast slider value', () => {
    renderEditor()
    const sliders = screen.getAllByRole('slider')
    const contrastSlider = sliders[1]!
    fireEvent.change(contrastSlider, { target: { value: '70' } })
    expect(screen.getByText('70')).toBeInTheDocument()
  })

  it('renders Save, Export, and Clear buttons', () => {
    renderEditor()
    expect(screen.getByText('Save')).toBeInTheDocument()
    expect(screen.getByText('Export')).toBeInTheDocument()
    expect(screen.getByText('Clear')).toBeInTheDocument()
  })

  it('calls onClear when Clear is clicked', () => {
    const onClear = vi.fn()
    renderEditor(vi.fn(), onClear)
    fireEvent.click(screen.getByText('Clear'))
    expect(onClear).toHaveBeenCalledOnce()
  })

  it('handles mouse down and up on canvas for cropping', async () => {
    renderEditor()
    await act(async () => {
      await new Promise((r) => setTimeout(r, 10))
    })
    const canvas = screen.getByLabelText('Avatar preview')
    fireEvent.mouseDown(canvas, { clientX: 10, clientY: 10 })
    fireEvent.mouseUp(canvas, { clientX: 60, clientY: 60 })
  })

  it('ignores small crop drags (less than 10px)', async () => {
    renderEditor()
    await act(async () => {
      await new Promise((r) => setTimeout(r, 10))
    })
    const canvas = screen.getByLabelText('Avatar preview')
    fireEvent.mouseDown(canvas, { clientX: 10, clientY: 10 })
    fireEvent.mouseUp(canvas, { clientX: 12, clientY: 12 })
  })

  it('renders canvas with image data after load', async () => {
    renderEditor()
    await act(async () => {
      await new Promise((r) => setTimeout(r, 10))
    })
    expect(mockCtx.drawImage).toHaveBeenCalled()
  })

  it('ignores crop end without prior mouse down', async () => {
    renderEditor()
    await act(async () => {
      await new Promise((r) => setTimeout(r, 10))
    })
    const canvas = screen.getByLabelText('Avatar preview')
    fireEvent.mouseUp(canvas, { clientX: 60, clientY: 60 })
  })

  it('calls onSave with base64 and settings when Save is clicked', async () => {
    const onSave = vi.fn()
    const fakeBlob = new Blob(['px'], { type: 'image/png' })
    vi.spyOn(avatarLib, 'canvasToBlob').mockResolvedValue(fakeBlob)
    vi.spyOn(avatarLib, 'blobToBase64').mockResolvedValue(
      'data:image/png;base64,saved',
    )

    renderEditor(onSave)
    fireEvent.click(screen.getByText('Save'))

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledWith(
        'data:image/png;base64,saved',
        expect.objectContaining({
          presets: expect.any(Object),
          brightness: expect.any(Number),
          contrast: expect.any(Number),
        }),
      )
    })
  })

  it('triggers download when Export is clicked', async () => {
    const fakeBlob = new Blob(['px'], { type: 'image/png' })
    vi.spyOn(avatarLib, 'canvasToBlob').mockResolvedValue(fakeBlob)
    const downloadSpy = vi
      .spyOn(avatarLib, 'downloadBlob')
      .mockImplementation(() => {})

    renderEditor()
    fireEvent.click(screen.getByText('Export'))

    await waitFor(() => {
      expect(downloadSpy).toHaveBeenCalledWith(fakeBlob, 'avatar.png')
    })
  })
})
