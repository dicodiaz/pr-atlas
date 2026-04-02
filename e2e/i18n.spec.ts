import { expect, test } from '@playwright/test'

test.describe('Internationalization', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
    await page.getByRole('searchbox').waitFor()
  })

  test('switches to Spanish and back to English', async ({ page }) => {
    await expect(page.getByText(/topic results/i)).toBeVisible()

    await page.getByRole('combobox', { name: /language/i }).selectOption('es')

    await expect(page.getByText(/resultados de temas/i)).toBeVisible()
    await expect(page.getByText(/busca por tema/i)).toBeVisible()

    await page.getByRole('combobox', { name: /idioma/i }).selectOption('en')

    await expect(page.getByText(/topic results/i)).toBeVisible()
  })

  test('persists language choice across page reloads', async ({ page }) => {
    await page.getByRole('combobox', { name: /language/i }).selectOption('es')

    await expect(page.getByText(/resultados de temas/i)).toBeVisible()

    await page.reload()
    await page.getByRole('searchbox').waitFor()

    await expect(page.getByText(/resultados de temas/i)).toBeVisible()

    await page.getByRole('combobox', { name: /idioma/i }).selectOption('en')
  })
})
