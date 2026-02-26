import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Process', () => {
    // Variablen deklarieren, damit sie in allen Tests verfügbar sind
    let productPage;
    let cartPage;
    let checkoutPage;

    test.beforeEach(async ({ page }) => {
        test.setTimeout(45000);

        const loginPage = new LoginPage(page);
        // Zuweisung OHNE 'const' oder 'let', damit wir die oberen Variablen nutzen
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        // Setup für Checkout Tests: Warenkorb füllen und zur Kasse gehen
        await productPage.addAllProductsToCart();
        await productPage.openCart();
        await cartPage.proceedToCheckout();
    });

    test('Complete checkout successfully', async () => {
        await checkoutPage.fillCheckoutInformation({
            firstName: 'Max',
            lastName: 'Mustermann',
            postalCode: '12345'
        });
        await checkoutPage.continue();
        await checkoutPage.finishCheckout();
        await expect(checkoutPage.completeHeader).toContainText('Thank you for your order');
    });

    const errorScenarios = [
        { data: { lastName: 'M', postalCode: '1' }, error: 'Error: First Name is required' },
        { data: { firstName: 'M', postalCode: '1' }, error: 'Error: Last Name is required' },
        { data: { firstName: 'M', lastName: 'M' }, error: 'Error: Postal Code is required' }
    ];

    for (const scenario of errorScenarios) {
        test(`Checkout fails when ${scenario.error}`, async () => {
            await checkoutPage.fillCheckoutInformation(scenario.data);
            await checkoutPage.continue();
            await expect(checkoutPage.errorMessage).toHaveText(scenario.error);
        });
    }
});