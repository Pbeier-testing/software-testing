import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Operations', () => {
    let productPage;
    let cartPage;

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Add all products to cart and remove them via Cart Page', async () => {
        await productPage.addAllProductsToCart();
        await cartPage.openCart();

        await expect(cartPage.cartItems).toHaveCount(6);

        await cartPage.emptyCart(); // Nutzt die neue Methode der CartPage

        await expect(cartPage.cartItems).toHaveCount(0);
    });

    test('Add all products, verify badge, remove via Inventory Page', async () => {
        await productPage.addAllProductsToCart();

        // FIX: Wir nutzen den Locator aus der Page Class, keinen lokalen
        await expect(productPage.cartBadge).toHaveText('6');

        await productPage.removeAllFromInventory(); // Nutzt die neue Methode der ProductPage

        // Prüfung, dass das Badge nicht mehr existiert
        await expect(productPage.cartBadge).toBeHidden();
    });
});