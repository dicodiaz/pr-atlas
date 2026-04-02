import { expect, test } from '@playwright/test'

test.describe('Search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.getByRole('searchbox').waitFor()
  })

  test('filters topics by query and shows result count', async ({ page }) => {
    const input = page.getByRole('searchbox')
    await input.fill('metaprogramming')

    await expect(page.getByText(/1 topic shown/i)).toBeVisible()
    await expect(
      page.getByText('Uses language metaprogramming techniques'),
    ).toBeVisible()
  })

  test('shows ghost-text autocomplete suggestion', async ({ page }) => {
    const input = page.getByRole('searchbox')
    await input.fill('deboun')

    // Ghost text container should show the suggestion
    await expect(page.locator('[aria-hidden="true"]')).toContainText(
      'ced search',
    )
  })

  test('accepts ghost suggestion with Tab', async ({ page }) => {
    const input = page.getByRole('searchbox')
    await input.fill('deboun')

    await page.keyboard.press('Tab')

    await expect(input).toHaveValue('debounced search')
  })

  test('clears search and restores all topics', async ({ page }) => {
    const input = page.getByRole('searchbox')
    await input.fill('metaprogramming')

    await expect(page.getByText(/1 topic shown/i)).toBeVisible()

    await page.getByRole('button', { name: /clear search/i }).click()

    await expect(input).toHaveValue('')
    await expect(page.getByText(/topics shown/i)).toBeVisible()
  })

  test('shows empty state for no results', async ({ page }) => {
    const input = page.getByRole('searchbox')
    await input.fill('zzzznonexistent')

    await expect(page.getByText(/no matching topics/i)).toBeVisible()
  })
})
