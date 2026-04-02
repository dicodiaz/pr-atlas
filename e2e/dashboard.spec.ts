import { expect, test } from '@playwright/test'

test.describe('Dashboard', () => {
  test('navigates to dashboard and shows chart headings', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: /dashboard/i }).click()

    await expect(page).toHaveURL(/\/dashboard/)
    await expect(page.getByText(/coverage analytics/i)).toBeVisible()
    await expect(page.getByText(/coverage by category/i)).toBeVisible()
    await expect(page.getByText(/coverage by level/i)).toBeVisible()
    await expect(page.getByText(/promotion thresholds/i)).toBeVisible()
  })

  test('navigates back to search from dashboard', async ({ page }) => {
    await page.goto('/dashboard')
    await page.waitForSelector('text=Coverage Analytics')

    await page.getByRole('link', { name: /search/i }).click()

    await expect(page).toHaveURL('/')
    await expect(page.getByRole('searchbox')).toBeVisible()
  })
})
