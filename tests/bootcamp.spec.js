// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/loginPage.js';
import { DashboardPage } from '../page/dashboardPage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/')
})

test('Login', async ({ page }) => {
  
    await page.getByRole('textbox', {name: 'username'}).fill('Admin')
    await page.getByRole('textbox', { name: 'password'}).fill('admin123')
    await page.getByRole('button' , { name: 'Login' }).click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
  })

test('Login PO', async ({ page }) => {
    const login = new LoginPage(page)
    const dashboard = new DashboardPage(page)

    
    await login.loginWithUser()
    await expect(await dashboard.checkDashboardPage()).toBeVisible()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  })