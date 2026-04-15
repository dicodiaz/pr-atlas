const ACCEPTED_TYPES = new Set([
  'image/png',
  'image/jpeg',
  'image/webp',
  'image/gif',
])

const MAX_SIZE_BYTES = 5 * 1024 * 1024 // 5 MB

export const isValidImageType = (file: File): boolean =>
  ACCEPTED_TYPES.has(file.type)

export const isValidImageSize = (file: File): boolean =>
  file.size <= MAX_SIZE_BYTES

export const loadImageFromFile = (file: File): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    if (!isValidImageType(file)) {
      reject(new Error('Invalid image type'))
      return
    }
    if (!isValidImageSize(file)) {
      reject(new Error('File too large'))
      return
    }

    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Failed to load image'))
    }
    img.src = url
  })

export interface CropRect {
  x: number
  y: number
  width: number
  height: number
}

export interface FilterOptions {
  grayscale: boolean
  sepia: boolean
  blur: boolean
  invert: boolean
  brightness: number
  contrast: number
}

const buildFilterString = (filters: FilterOptions): string => {
  const parts: string[] = []
  if (filters.grayscale) parts.push('grayscale(100%)')
  if (filters.sepia) parts.push('sepia(100%)')
  if (filters.blur) parts.push('blur(2px)')
  if (filters.invert) parts.push('invert(100%)')
  if (filters.brightness !== 100)
    parts.push(`brightness(${filters.brightness}%)`)
  if (filters.contrast !== 100) parts.push(`contrast(${filters.contrast}%)`)
  return parts.join(' ')
}

export const renderToCanvas = (
  source: CanvasImageSource,
  width: number,
  height: number,
  crop: CropRect | null,
  filters: FilterOptions,
): HTMLCanvasElement => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) return canvas

  const filterStr = buildFilterString(filters)
  if (filterStr) ctx.filter = filterStr

  if (crop) {
    ctx.drawImage(
      source,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      width,
      height,
    )
  } else {
    ctx.drawImage(source, 0, 0, width, height)
  }

  return canvas
}

export const canvasToBlob = (canvas: HTMLCanvasElement): Promise<Blob> =>
  new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob)
      else reject(new Error('Canvas toBlob failed'))
    }, 'image/png')
  })

export const blobToBase64 = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = () => reject(new Error('FileReader failed'))
    reader.readAsDataURL(blob)
  })

export const downloadBlob = (blob: Blob, filename: string): void => {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
