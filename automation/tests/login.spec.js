import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page.getByText('Products')).toBeVisible();
});

test('login fails with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('wrong_user', 'wrong_pass');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage)
        .toContainText('Epic sadface: Username and password do not match any user in this service');
});