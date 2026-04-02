import { expect, test } from '@playwright/test'

test.describe('Saved searches', () => {
  test.beforeEach(async ({ page, context }) => {
    await context.clearCookies()
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
    await page.getByRole('searchbox').waitFor()
  })

  test('saves a search and shows it as a chip', async ({ page }) => {
    const input = page.getByRole('searchbox')
    await input.fill('accessibility')

    await page.getByRole('button', { name: /save search/i }).click()

    await expect(
      page.getByRole('button', { name: /apply saved search: accessibility/i }),
    ).toBeVisible()
  })

  test('applies a saved search by clicking its chip', async ({ page }) => {
    const input = page.getByRole('searchbox')
    await input.fill('accessibility')
    await page.getByRole('button', { name: /save search/i }).click()

    await input.clear()
    await expect(input).toHaveValue('')

    await page
      .getByRole('button', { name: /apply saved search: accessibility/i })
      .click()

    await expect(input).toHaveValue('accessibility')
  })

  test('removes a saved search chip', async ({ page }) => {
    const input = page.getByRole('searchbox')
    await input.fill('testing')
    await page.getByRole('button', { name: /save search/i }).click()

    await page
      .getByRole('button', { name: /remove saved search: testing/i })
      .click()

    await expect(
      page.getByRole('button', { name: /apply saved search: testing/i }),
    ).not.toBeVisible()
  })
})
