import { fireEvent, render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { describe, expect, it, vi } from 'vitest'

import { ImageDropZone } from '@/components/ImageDropZone'
import i18n from '@/test/i18n-setup'

const renderZone = (onFileSelected = vi.fn()) =>
  render(
    <I18nextProvider i18n={i18n}>
      <ImageDropZone onFileSelected={onFileSelected} />
    </I18nextProvider>,
  )

const makePngFile = (sizeBytes = 100) =>
  new File([new ArrayBuffer(sizeBytes)], 'photo.png', { type: 'image/png' })

describe('ImageDropZone', () => {
  it('renders the upload button with hint text', () => {
    renderZone()
    expect(screen.getByLabelText('Upload image')).toBeInTheDocument()
    expect(screen.getByText('Click or drag an image here')).toBeInTheDocument()
  })

  it('calls onFileSelected when a valid file is dropped', () => {
    const onFileSelected = vi.fn()
    renderZone(onFileSelected)

    const dropTarget = screen.getByLabelText('Upload image')
    const file = makePngFile()

    fireEvent.dragOver(dropTarget)
    fireEvent.drop(dropTarget, {
      dataTransfer: { files: [file] },
    })

    expect(onFileSelected).toHaveBeenCalledWith(file)
  })

  it('shows error for invalid file type', () => {
    const onFileSelected = vi.fn()
    renderZone(onFileSelected)

    const dropTarget = screen.getByLabelText('Upload image')
    const badFile = new File(['x'], 'doc.pdf', { type: 'application/pdf' })

    fireEvent.drop(dropTarget, {
      dataTransfer: { files: [badFile] },
    })

    expect(onFileSelected).not.toHaveBeenCalled()
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Only PNG, JPEG, WebP, and GIF are accepted.',
    )
  })

  it('shows error for file exceeding size limit', () => {
    const onFileSelected = vi.fn()
    renderZone(onFileSelected)

    const dropTarget = screen.getByLabelText('Upload image')
    const bigFile = makePngFile(6 * 1024 * 1024)

    fireEvent.drop(dropTarget, {
      dataTransfer: { files: [bigFile] },
    })

    expect(onFileSelected).not.toHaveBeenCalled()
    expect(screen.getByRole('alert')).toHaveTextContent(
      'File exceeds 5 MB limit.',
    )
  })

  it('opens the file picker on click', () => {
    renderZone()
    const input = screen.getByTestId('avatar-file-input') as HTMLInputElement
    const clickSpy = vi.spyOn(input, 'click')

    fireEvent.click(screen.getByLabelText('Upload image'))
    expect(clickSpy).toHaveBeenCalledOnce()
  })

  it('calls onFileSelected when a file is chosen via input', () => {
    const onFileSelected = vi.fn()
    renderZone(onFileSelected)

    const input = screen.getByTestId('avatar-file-input') as HTMLInputElement
    const file = makePngFile()

    Object.defineProperty(input, 'files', { value: [file], writable: false })
    fireEvent.change(input)

    expect(onFileSelected).toHaveBeenCalledWith(file)
  })

  it('removes dragging class on drag leave', () => {
    renderZone()
    const dropTarget = screen.getByLabelText('Upload image')

    fireEvent.dragOver(dropTarget)
    fireEvent.dragLeave(dropTarget)

    expect(dropTarget.className).toContain('border-white/20')
  })

  it('does nothing when drop has no files', () => {
    const onFileSelected = vi.fn()
    renderZone(onFileSelected)

    const dropTarget = screen.getByLabelText('Upload image')
    fireEvent.drop(dropTarget, { dataTransfer: { files: [] } })

    expect(onFileSelected).not.toHaveBeenCalled()
  })

  it('does nothing when the file input fires a change with no file selected', () => {
    const onFileSelected = vi.fn()
    renderZone(onFileSelected)

    const input = screen.getByTestId('avatar-file-input') as HTMLInputElement
    fireEvent.change(input)

    expect(onFileSelected).not.toHaveBeenCalled()
  })

  it('clears error on subsequent valid file', () => {
    const onFileSelected = vi.fn()
    renderZone(onFileSelected)

    const dropTarget = screen.getByLabelText('Upload image')

    fireEvent.drop(dropTarget, {
      dataTransfer: {
        files: [new File(['x'], 'doc.pdf', { type: 'application/pdf' })],
      },
    })
    expect(screen.getByRole('alert')).toBeInTheDocument()

    fireEvent.drop(dropTarget, {
      dataTransfer: { files: [makePngFile()] },
    })
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
