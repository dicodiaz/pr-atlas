# Feature: Personal Avatar Builder

**Promotion topics covered**:

- [Data Structures · Middle] Manages files with language filesystem capabilities
- [Data Structures · Middle] Handles files upload through libraries
- [Data Structures · Middle] Handles images upload through tools and libraries
- [Data Structures · Middle] Uses tools and libraries for immutability

## What it does

A circular avatar button appears in the nav bar. Clicking it opens a popover
where the user can upload an image (click-to-browse or drag-and-drop), crop it
by dragging on a live canvas preview, apply visual filters, and either save
the result to localStorage (so it persists across sessions) or export it as a
PNG download.

## How it works

### 1. File validation (`src/lib/avatar.ts`, lines 1-38)

Two guard functions run before any processing:

- `isValidImageType(file)` (line 10) checks the MIME type against an
  allowlist: `image/png`, `image/jpeg`, `image/webp`, `image/gif`.
- `isValidImageSize(file)` (line 13) rejects files over 5 MB.

`loadImageFromFile(file)` (line 16) combines both checks, creates a temporary
object URL via `URL.createObjectURL`, loads it into an `HTMLImageElement`,
and revokes the URL when done. The returned `Promise<HTMLImageElement>` is
the starting point for all canvas work.

### 2. Canvas rendering pipeline (`src/lib/avatar.ts`, lines 56-101)

`renderToCanvas(source, width, height, crop, filters)` is a pure function
that produces an offscreen `<canvas>`:

1. Creates a canvas element and gets a 2D context.
2. Builds a CSS filter string from the `FilterOptions` via
   `buildFilterString` (line 56). Each active preset appends its CSS
   filter function (e.g. `grayscale(100%)`, `blur(2px)`), and
   brightness/contrast are added when they differ from the default (100).
3. Sets `ctx.filter` to the composed string.
4. Calls `ctx.drawImage` — either with source-rect arguments when a
   `CropRect` is provided (line 84-95), or a simple full-draw otherwise
   (line 97).

The canvas is returned to the caller for further conversion (blob or base64).

### 3. Blob and base64 conversion (`src/lib/avatar.ts`, lines 103-126)

- `canvasToBlob(canvas)` (line 103) wraps `canvas.toBlob` in a Promise,
  producing a PNG `Blob`.
- `blobToBase64(blob)` (line 111) wraps `FileReader.readAsDataURL` in a
  Promise, producing a `data:image/png;base64,...` string suitable for
  localStorage storage.
- `downloadBlob(blob, filename)` (line 119) creates a temporary object URL,
  sets it as the `href` of a hidden anchor element, triggers `.click()`, and
  immediately revokes the URL. This initiates a browser download without any
  server round-trip.

### 4. Immer-based editor state (`src/lib/avatar-state.ts`)

The editor's state is managed by an Immer-powered reducer that guarantees
immutability. The state shape (`AvatarEditorState`, line 5):

```
originalDataUrl  — the raw data URL of the uploaded image
cropRect         — the user's selected crop region (or null)
presets          — { grayscale, sepia, blur, invert } toggle flags
brightness       — 50-150 range, default 100
contrast         — 50-150 range, default 100
previewDataUrl   — the rendered preview after saving
```

The reducer (`avatarReducer`, line 36) is created with `produce()` from
Immer. Each action mutates the `draft` object directly — Immer handles
structural sharing under the hood:

| Action          | Effect                                                                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SET_ORIGINAL`  | Sets the image and resets all editing state to defaults                                                                                                    |
| `RESTORE`       | Rehydrates the editor from a saved original + `AvatarSettings` (used when reopening a previously saved avatar so filters are re-applied to the raw source) |
| `SET_CROP`      | Updates the crop rect                                                                                                                                      |
| `TOGGLE_PRESET` | Flips a single filter preset                                                                                                                               |
| `SET_SLIDER`    | Updates brightness or contrast                                                                                                                             |
| `SET_PREVIEW`   | Stores the final preview data URL                                                                                                                          |
| `RESET`         | Returns `initialState` (clears everything)                                                                                                                 |

The unit tests in `avatar-state.test.ts` assert that every action produces a
new state reference (`state !== newState`), confirming immutability is never
violated.

### 5. LocalStorage persistence (`src/lib/use-avatar.ts`)

The `useAvatar` hook wraps the existing `storage` utility and manages three
keys:

| Key                        | Content                                                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `pr-atlas:avatar`          | The rendered output (base64 PNG) — used as the nav thumbnail                                                          |
| `pr-atlas:avatar-original` | The original source image (base64) — used to re-open the editor so filters can be re-applied to the unprocessed image |
| `pr-atlas:avatar-settings` | `AvatarSettings` (crop rect, filter presets, brightness, contrast) — used to restore the editor to its previous state |

Persisting the original source separately from the rendered output is the
key design decision: applying filters to an already-filtered image produces
incorrect results (e.g. inverting an already-inverted image cancels out).
Re-editing always starts from the raw original with settings re-applied.

- `avatarUrl` is initialised from `pr-atlas:avatar` via `useState` (reactive).
- `avatarOriginal` and `savedSettings` are read from storage on each render
  (non-reactive, always reflect the latest stored value).
- `saveAvatar(rendered, original, settings)` writes all three keys and
  updates `avatarUrl` state.
- `clearAvatar()` removes all three keys and resets state to null.

### 6. Drag-and-drop upload zone (`src/components/ImageDropZone.tsx`)

The component supports two upload paths:

- **Click-to-browse**: Clicking the dashed-border zone triggers a hidden
  `<input type="file">` via `inputRef.current.click()`.
- **Drag-and-drop**: `onDrop` reads the first file from
  `e.dataTransfer.files`, `onDragOver` shows a visual accent border,
  `onDragLeave` resets it.

Both paths converge into `handleFile`, which runs `validate` — checking
type then size — and either calls `onFileSelected` or displays a red error
message via `role="alert"`.

### 7. Editor UI (`src/components/AvatarEditor.tsx`)

The editor renders four sections stacked vertically:

1. **Canvas preview**: A 200x200 `<canvas>` with `cursor-crosshair`. A
   render effect watches the five individually tracked state slices
   (`originalDataUrl`, `cropRect`, `presets`, `brightness`, `contrast`),
   loads the original into an `Image`, then calls `renderToCanvas` with
   the current crop and filter options.

2. **Filter presets**: Four toggle buttons (Grayscale, Sepia, Blur,
   Invert). Active presets use the accent color; inactive ones use a muted
   background. Each dispatches `TOGGLE_PRESET`.

3. **Sliders**: Range inputs for Brightness and Contrast (50-150), each
   dispatching `SET_SLIDER`. The current numeric value displays to the
   right of the slider.

4. **Action buttons**:
   - **Save**: Converts the canvas to a blob, then to base64, dispatches
     `SET_PREVIEW`, and calls `onSave` with the base64 and
     `extractSettings(state)`.
   - **Export**: Converts the canvas to a blob and triggers `downloadBlob`
     for a PNG download.
   - **Clear**: Dispatches `RESET` and calls `onClear`.

**Crop interaction**: `mouseDown` records the starting coordinates relative
to the canvas. `mouseUp` computes the drag distance; if both axes exceed
10px, it scales the pixel coordinates back to the original image dimensions
and dispatches `SET_CROP`.

### 8. Popover container (`src/components/AvatarPopover.tsx`)

The popover orchestrates the overall flow:

- **Toggle button**: Shows a circular 32px avatar thumbnail if one is saved,
  or a generic user silhouette SVG if not. `aria-expanded` reflects the open
  state.
- **Dropdown panel**: When open, renders either the `ImageDropZone`
  (`editorDataUrl` is null) or the `AvatarEditor` (`editorDataUrl` is set).
  Positioned absolutely to the right of the button.
- **Dismiss**: Closes on outside click (`mousedown` on document) or Escape
  key.
- **Toggle flow**: On every open, `editorDataUrl` is unconditionally set to
  `avatarOriginal` (the persisted source image). This ensures the editor
  always opens with the unprocessed original so filters can be re-applied
  correctly, and discards any unsaved edits from a previous session.
- **File selected flow**: Reads the selected `File` as a data URL via
  `FileReader.readAsDataURL`, then sets `editorDataUrl` to switch the panel
  from drop zone to editor.
- **Save flow**: Passes the rendered base64, `editorDataUrl` (the source
  original), and current settings to `saveAvatar`, then closes the popover.
- **`savedSettings` prop**: Passed to `AvatarEditor` only when
  `editorDataUrl === avatarOriginal` (i.e. re-opening a previously saved
  avatar). For a freshly uploaded file the editor starts from defaults.

### 9. Layout integration (`src/app/Layout.tsx`)

`<AvatarPopover />` is rendered in the nav bar's right side, between the
debug badge and the `<LanguageSwitcher />`, inside a flex container with
`gap-2`.

## Files

| File                                   | Purpose                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------ |
| `src/lib/avatar.ts`                    | File validation, canvas rendering, blob/base64 conversion, download            |
| `src/lib/avatar-state.ts`              | Immer-based reducer for editor state                                           |
| `src/lib/use-avatar.ts`                | Hook for localStorage persistence (rendered output, original source, settings) |
| `src/components/ImageDropZone.tsx`     | Drag-and-drop and click-to-browse upload                                       |
| `src/components/AvatarEditor.tsx`      | Canvas preview, crop, filters, sliders, save/export/clear                      |
| `src/components/AvatarPopover.tsx`     | Nav bar popover container                                                      |
| `src/app/Layout.tsx` (lines 5, 55-58)  | Imports and renders `AvatarPopover`                                            |
| `src/i18n/locales/en.json`             | 14 avatar-related i18n keys                                                    |
| `src/i18n/locales/es.json`             | Spanish translations                                                           |
| `src/data/topics.ts` (lines 2175-2196) | PR Atlas topic mappings for 4 Middle topics                                    |
| `src/test/avatar.test.ts`              | File validation, canvas rendering, blob conversion, download tests             |
| `src/test/avatar-state.test.ts`        | Immer reducer tests with immutability assertions                               |
| `src/test/use-avatar.test.ts`          | Hook tests for load, save, clear                                               |
| `src/test/ImageDropZone.test.tsx`      | Drop zone interaction, validation error display                                |
| `src/test/AvatarEditor.test.tsx`       | Preset toggles, sliders, save/export/clear                                     |
| `src/test/AvatarPopover.test.tsx`      | Popover open/close, outside click, Escape, save flow                           |
