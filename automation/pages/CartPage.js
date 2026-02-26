export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.cartItems = page.locator('.cart_item');
        this.cartItemNames = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.removeButtons = page.locator('button[data-test^="remove"]');
    }

    async openCart() {
        await this.cartLink.click();
    }

    async removeItemByName(productName) {
        const item = this.cartItems.filter({ hasText: productName });
        await item.locator('button[data-test^="remove"]').click();
    }

    async emptyCart() {
        const count = await this.removeButtons.count();
        for (let i = 0; i < count; i++) {
            await this.removeButtons.first().click();
        }
    }

    async getCartItemCount() {
        return await this.cartItems.count();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}