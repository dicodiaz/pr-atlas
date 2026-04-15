import { beforeEach, describe, expect, it, vi } from 'vitest'

import {
  blobToBase64,
  canvasToBlob,
  downloadBlob,
  isValidImageSize,
  isValidImageType,
  renderToCanvas,
  type FilterOptions,
} from '@/lib/avatar'

const makeFile = (name: string, type: string, sizeBytes = 100): File => {
  const buffer = new ArrayBuffer(sizeBytes)
  return new File([buffer], name, { type })
}

const defaultFilters: FilterOptions = {
  grayscale: false,
  sepia: false,
  blur: false,
  invert: false,
  brightness: 100,
  contrast: 100,
}

const mockCtx = {
  filter: '',
  drawImage: vi.fn(),
  clearRect: vi.fn(),
}

describe('avatar utilities', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      mockCtx as unknown as CanvasRenderingContext2D,
    )
    mockCtx.filter = ''
    mockCtx.drawImage.mockClear()
  })
  describe('isValidImageType', () => {
    it('accepts PNG', () => {
      expect(isValidImageType(makeFile('a.png', 'image/png'))).toBe(true)
    })

    it('accepts JPEG', () => {
      expect(isValidImageType(makeFile('a.jpg', 'image/jpeg'))).toBe(true)
    })

    it('accepts WebP', () => {
      expect(isValidImageType(makeFile('a.webp', 'image/webp'))).toBe(true)
    })

    it('accepts GIF', () => {
      expect(isValidImageType(makeFile('a.gif', 'image/gif'))).toBe(true)
    })

    it('rejects SVG', () => {
      expect(isValidImageType(makeFile('a.svg', 'image/svg+xml'))).toBe(false)
    })

    it('rejects text files', () => {
      expect(isValidImageType(makeFile('a.txt', 'text/plain'))).toBe(false)
    })
  })

  describe('isValidImageSize', () => {
    it('accepts files under 5 MB', () => {
      expect(isValidImageSize(makeFile('a.png', 'image/png', 1024))).toBe(true)
    })

    it('accepts files at exactly 5 MB', () => {
      expect(
        isValidImageSize(makeFile('a.png', 'image/png', 5 * 1024 * 1024)),
      ).toBe(true)
    })

    it('rejects files over 5 MB', () => {
      expect(
        isValidImageSize(makeFile('a.png', 'image/png', 5 * 1024 * 1024 + 1)),
      ).toBe(false)
    })
  })

  describe('renderToCanvas', () => {
    it('returns a canvas with the specified dimensions', () => {
      const img = new Image()
      img.width = 100
      img.height = 100
      const canvas = renderToCanvas(img, 200, 200, null, defaultFilters)
      expect(canvas.width).toBe(200)
      expect(canvas.height).toBe(200)
    })

    it('applies crop when provided', () => {
      const img = new Image()
      img.width = 100
      img.height = 100
      const crop = { x: 10, y: 10, width: 50, height: 50 }
      const canvas = renderToCanvas(img, 50, 50, crop, defaultFilters)
      expect(canvas.width).toBe(50)
      expect(canvas.height).toBe(50)
    })

    it('applies filter string when filters are active', () => {
      const img = new Image()
      img.width = 100
      img.height = 100
      const filters: FilterOptions = {
        ...defaultFilters,
        grayscale: true,
        brightness: 120,
      }
      const canvas = renderToCanvas(img, 100, 100, null, filters)
      expect(canvas).toBeDefined()
    })

    it('applies all filters simultaneously', () => {
      const img = new Image()
      const filters: FilterOptions = {
        grayscale: true,
        sepia: true,
        blur: true,
        invert: true,
        brightness: 80,
        contrast: 130,
      }
      const canvas = renderToCanvas(img, 100, 100, null, filters)
      expect(canvas).toBeDefined()
    })
  })

  describe('canvasToBlob', () => {
    it('resolves with a blob', async () => {
      const canvas = document.createElement('canvas')
      const fakeBlob = new Blob(['pixel-data'], { type: 'image/png' })
      canvas.toBlob = (cb) => cb(fakeBlob)

      const blob = await canvasToBlob(canvas)
      expect(blob).toBe(fakeBlob)
    })

    it('rejects when toBlob returns null', async () => {
      const canvas = document.createElement('canvas')
      canvas.toBlob = (cb) => cb(null)
      await expect(canvasToBlob(canvas)).rejects.toThrow('Canvas toBlob failed')
    })
  })

  describe('blobToBase64', () => {
    it('resolves with a data URL string', async () => {
      const blob = new Blob(['hello'], { type: 'text/plain' })
      const result = await blobToBase64(blob)
      expect(result).toMatch(/^data:/)
    })

    it('rejects when FileReader fails', async () => {
      const blob = new Blob(['hello'], { type: 'text/plain' })
      vi.spyOn(FileReader.prototype, 'readAsDataURL').mockImplementation(
        function (this: FileReader) {
          setTimeout(
            () =>
              this.onerror?.(
                new ProgressEvent('error') as ProgressEvent<FileReader>,
              ),
            0,
          )
        },
      )
      await expect(blobToBase64(blob)).rejects.toThrow('FileReader failed')
    })
  })

  describe('loadImageFromFile', () => {
    it('rejects for invalid image type', async () => {
      const { loadImageFromFile } = await import('@/lib/avatar')
      const file = makeFile('doc.txt', 'text/plain')
      await expect(loadImageFromFile(file)).rejects.toThrow(
        'Invalid image type',
      )
    })

    it('rejects for files exceeding size limit', async () => {
      const { loadImageFromFile } = await import('@/lib/avatar')
      const file = makeFile('big.png', 'image/png', 6 * 1024 * 1024)
      await expect(loadImageFromFile(file)).rejects.toThrow('File too large')
    })

    it('resolves with an image element for a valid file', async () => {
      const { loadImageFromFile } = await import('@/lib/avatar')

      vi.stubGlobal('URL', {
        createObjectURL: vi.fn(() => 'blob:mock-url'),
        revokeObjectURL: vi.fn(),
      })

      const originalImage = globalThis.Image
      globalThis.Image = class MockImage {
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        set src(_: string) {
          setTimeout(() => this.onload?.(), 0)
        }
      } as unknown as typeof Image

      const file = makeFile('photo.png', 'image/png', 100)
      const img = await loadImageFromFile(file)
      expect(img).toBeDefined()

      globalThis.Image = originalImage
      vi.unstubAllGlobals()
    })

    it('rejects when image fails to load', async () => {
      const { loadImageFromFile } = await import('@/lib/avatar')

      vi.stubGlobal('URL', {
        createObjectURL: vi.fn(() => 'blob:mock-url'),
        revokeObjectURL: vi.fn(),
      })

      const originalImage = globalThis.Image
      globalThis.Image = class MockImage {
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        set src(_: string) {
          setTimeout(() => this.onerror?.(), 0)
        }
      } as unknown as typeof Image

      const file = makeFile('bad.png', 'image/png', 100)
      await expect(loadImageFromFile(file)).rejects.toThrow(
        'Failed to load image',
      )

      globalThis.Image = originalImage
      vi.unstubAllGlobals()
    })
  })

  describe('downloadBlob', () => {
    it('creates an anchor, clicks it, and revokes the URL', () => {
      const revokeObjectURL = vi.fn()
      const createObjectURL = vi.fn(() => 'blob:mock-url')
      vi.stubGlobal('URL', { createObjectURL, revokeObjectURL })

      const clickSpy = vi.fn()
      const createElementSpy = vi
        .spyOn(document, 'createElement')
        .mockReturnValue({
          set href(_: string) {},
          set download(_: string) {},
          click: clickSpy,
        } as unknown as HTMLAnchorElement)

      const blob = new Blob(['data'])
      downloadBlob(blob, 'test.png')

      expect(createObjectURL).toHaveBeenCalledWith(blob)
      expect(clickSpy).toHaveBeenCalledOnce()
      expect(revokeObjectURL).toHaveBeenCalledWith('blob:mock-url')

      createElementSpy.mockRestore()
      vi.unstubAllGlobals()
    })
  })
})
