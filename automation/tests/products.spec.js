import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

test.describe('Product Overview', () => {
    let productPage;

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        productPage = new ProductPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Sort products by Name A-Z', async () => {
        await productPage.sortBy('az');
        const productNames = await productPage.getProductNames();
        expect(productNames).toEqual([...productNames].sort());
    });

    test('Sort products by Price low to high', async () => {
        await productPage.sortBy('lohi');
        const prices = await productPage.getProductPrices();
        expect(prices).toEqual([...prices].sort((a, b) => a - b));
    });
});