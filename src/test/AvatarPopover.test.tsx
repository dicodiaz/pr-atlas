import { act, fireEvent, render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { AvatarPopover } from '@/components/AvatarPopover'
import * as avatarLib from '@/lib/avatar'
import i18n from '@/test/i18n-setup'

const STORAGE_KEY = 'pr-atlas:avatar'
const ORIGINAL_KEY = 'pr-atlas:avatar-original'
const SETTINGS_KEY = 'pr-atlas:avatar-settings'

const renderPopover = () =>
  render(
    <I18nextProvider i18n={i18n}>
      <AvatarPopover />
    </I18nextProvider>,
  )

const OriginalImage = globalThis.Image

const mockCtx = {
  filter: '',
  drawImage: vi.fn(),
  clearRect: vi.fn(),
}

describe('AvatarPopover', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      mockCtx as unknown as CanvasRenderingContext2D,
    )
    globalThis.Image = class MockImage {
      onload: (() => void) | null = null
      onerror: (() => void) | null = null
      naturalWidth = 100
      naturalHeight = 100
      width = 100
      height = 100
      set src(_: string) {
        setTimeout(() => this.onload?.(), 0)
      }
    } as unknown as typeof Image
  })

  afterEach(() => {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(ORIGINAL_KEY)
    localStorage.removeItem(SETTINGS_KEY)
    globalThis.Image = OriginalImage
    vi.restoreAllMocks()
  })

  it('renders the avatar toggle button', () => {
    renderPopover()
    expect(screen.getByLabelText('Avatar')).toBeInTheDocument()
  })

  it('shows a placeholder icon when no avatar is saved', () => {
    renderPopover()
    const btn = screen.getByLabelText('Avatar')
    expect(btn.querySelector('svg')).toBeTruthy()
    expect(btn.querySelector('img')).toBeFalsy()
  })

  it('shows the saved avatar image when one exists', () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify('data:image/png;base64,abc'),
    )
    renderPopover()
    const btn = screen.getByLabelText('Avatar')
    expect(btn.querySelector('img')).toBeTruthy()
  })

  it('opens the popover on click', () => {
    renderPopover()
    fireEvent.click(screen.getByLabelText('Avatar'))
    expect(screen.getByText('Click or drag an image here')).toBeInTheDocument()
  })

  it('closes on second click (toggle)', () => {
    renderPopover()
    const btn = screen.getByLabelText('Avatar')
    fireEvent.click(btn)
    expect(screen.getByText('Click or drag an image here')).toBeInTheDocument()

    fireEvent.click(btn)
    expect(
      screen.queryByText('Click or drag an image here'),
    ).not.toBeInTheDocument()
  })

  it('closes on Escape key', () => {
    renderPopover()
    fireEvent.click(screen.getByLabelText('Avatar'))
    expect(screen.getByText('Click or drag an image here')).toBeInTheDocument()

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    })

    expect(
      screen.queryByText('Click or drag an image here'),
    ).not.toBeInTheDocument()
  })

  it('closes on outside click', () => {
    renderPopover()
    fireEvent.click(screen.getByLabelText('Avatar'))
    expect(screen.getByText('Click or drag an image here')).toBeInTheDocument()

    act(() => {
      document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    })

    expect(
      screen.queryByText('Click or drag an image here'),
    ).not.toBeInTheDocument()
  })

  it('does not close when clicking inside the popover', () => {
    renderPopover()
    fireEvent.click(screen.getByLabelText('Avatar'))
    expect(screen.getByText('Click or drag an image here')).toBeInTheDocument()

    act(() => {
      screen
        .getByLabelText('Upload image')
        .dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    })

    expect(screen.getByText('Click or drag an image here')).toBeInTheDocument()
  })

  it('does not close when a non-Escape key is pressed', () => {
    renderPopover()
    fireEvent.click(screen.getByLabelText('Avatar'))
    expect(screen.getByText('Click or drag an image here')).toBeInTheDocument()

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    })

    expect(screen.getByText('Click or drag an image here')).toBeInTheDocument()
  })

  it('has aria-expanded attribute', () => {
    renderPopover()
    const btn = screen.getByLabelText('Avatar')
    expect(btn).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })

  it('shows the editor after a file is selected via the drop zone', async () => {
    renderPopover()
    fireEvent.click(screen.getByLabelText('Avatar'))

    const input = screen.getByTestId('avatar-file-input') as HTMLInputElement
    const file = new File([new ArrayBuffer(100)], 'photo.png', {
      type: 'image/png',
    })
    Object.defineProperty(input, 'files', { value: [file], writable: false })

    fireEvent.change(input)

    await act(async () => {
      await new Promise((r) => setTimeout(r, 50))
    })

    expect(screen.getByText('Save')).toBeInTheDocument()
    expect(screen.getByText('Export')).toBeInTheDocument()
    expect(screen.getByText('Clear')).toBeInTheDocument()
  })

  it('saves the rendered output and original to localStorage and closes the popover', async () => {
    const fakeBlob = new Blob(['px'], { type: 'image/png' })
    vi.spyOn(avatarLib, 'canvasToBlob').mockResolvedValue(fakeBlob)
    vi.spyOn(avatarLib, 'blobToBase64').mockResolvedValue(
      'data:image/png;base64,saved',
    )

    renderPopover()
    fireEvent.click(screen.getByLabelText('Avatar'))

    const input = screen.getByTestId('avatar-file-input') as HTMLInputElement
    const file = new File([new ArrayBuffer(100)], 'photo.png', {
      type: 'image/png',
    })
    Object.defineProperty(input, 'files', { value: [file], writable: false })
    fireEvent.change(input)

    await act(async () => {
      await new Promise((r) => setTimeout(r, 50))
    })

    fireEvent.click(screen.getByText('Save'))

    await act(async () => {
      await new Promise((r) => setTimeout(r, 50))
    })

    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toBe(
      'data:image/png;base64,saved',
    )
    expect(localStorage.getItem(ORIGINAL_KEY)).not.toBeNull()
    expect(screen.queryByText('Save')).not.toBeInTheDocument()
  })

  it('shows the editor (not upload zone) when reopening after a save (post-refresh)', async () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify('data:image/png;base64,existing'),
    )
    localStorage.setItem(
      ORIGINAL_KEY,
      JSON.stringify('data:image/png;base64,original'),
    )
    renderPopover()

    fireEvent.click(screen.getByLabelText('Avatar'))

    expect(screen.getByText('Save')).toBeInTheDocument()
    expect(screen.getByText('Export')).toBeInTheDocument()
    expect(
      screen.queryByText('Click or drag an image here'),
    ).not.toBeInTheDocument()
  })

  it('restores filter settings when reopening a saved avatar (post-refresh)', async () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify('data:image/png;base64,existing'),
    )
    localStorage.setItem(
      ORIGINAL_KEY,
      JSON.stringify('data:image/png;base64,original'),
    )
    localStorage.setItem(
      SETTINGS_KEY,
      JSON.stringify({
        cropRect: null,
        presets: { grayscale: false, sepia: false, blur: false, invert: true },
        brightness: 120,
        contrast: 80,
      }),
    )
    renderPopover()

    fireEvent.click(screen.getByLabelText('Avatar'))

    await act(async () => {
      await new Promise((r) => setTimeout(r, 10))
    })

    const invertBtn = screen.getByText('Invert')
    expect(invertBtn.className).toContain('bg-(--color-accent)')
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('80')).toBeInTheDocument()
  })

  it('shows the editor with settings when reopening after save without page refresh (Bug 1 regression)', async () => {
    const fakeBlob = new Blob(['px'], { type: 'image/png' })
    vi.spyOn(avatarLib, 'canvasToBlob').mockResolvedValue(fakeBlob)
    vi.spyOn(avatarLib, 'blobToBase64').mockResolvedValue(
      'data:image/png;base64,saved',
    )

    renderPopover()

    // Upload a file and save
    fireEvent.click(screen.getByLabelText('Avatar'))
    const input = screen.getByTestId('avatar-file-input') as HTMLInputElement
    const file = new File([new ArrayBuffer(100)], 'photo.png', {
      type: 'image/png',
    })
    Object.defineProperty(input, 'files', { value: [file], writable: false })
    fireEvent.change(input)

    await act(async () => {
      await new Promise((r) => setTimeout(r, 50))
    })

    fireEvent.click(screen.getByText('Save'))

    await act(async () => {
      await new Promise((r) => setTimeout(r, 50))
    })

    // Reopen without page refresh
    fireEvent.click(screen.getByLabelText('Avatar'))

    await act(async () => {
      await new Promise((r) => setTimeout(r, 10))
    })

    // Should show editor, not the upload zone
    expect(screen.getByText('Save')).toBeInTheDocument()
    expect(
      screen.queryByText('Click or drag an image here'),
    ).not.toBeInTheDocument()
  })

  it('clears the editor and avatar when Clear is clicked', async () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify('data:image/png;base64,existing'),
    )
    localStorage.setItem(
      ORIGINAL_KEY,
      JSON.stringify('data:image/png;base64,original'),
    )
    renderPopover()
    fireEvent.click(screen.getByLabelText('Avatar'))

    expect(screen.getByText('Clear')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Clear'))

    expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
    expect(localStorage.getItem(ORIGINAL_KEY)).toBeNull()
    expect(screen.getByText('Click or drag an image here')).toBeInTheDocument()
  })
})
