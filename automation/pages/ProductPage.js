export class ProductPage {
    constructor(page) {
        this.page = page;
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        // Selektoren für den aktuellen Zustand der Buttons
        this.addToCartButtons = page.locator('button[data-test^="add-to-cart"]');
        this.removeFromInventoryButtons = page.locator('button[data-test^="remove-"]');
    }

    async sortBy(option) {
        await this.sortDropdown.selectOption(option);
    }

    async getProductNames() {
        return await this.productNames.allTextContents();
    }

    async getProductPrices() {
        const prices = await this.productPrices.allTextContents();
        return prices.map(price => Number(price.replace('$', '')));
    }

    async getCartBadgeText() {
        return await this.cartBadge.innerText();
    }

    async addAllProductsToCart() {
        // Logik: Klicke solange auf den ersten "Add"-Button, bis keiner mehr da ist
        // (weil sie sich in "Remove" verwandeln)
        const count = await this.addToCartButtons.count();
        for (let i = 0; i < count; i++) {
            await this.addToCartButtons.first().click();
        }
    }

    async removeAllFromInventory() {
        // Logik: Klicke solange auf den ersten "Remove"-Button im Inventory
        const count = await this.removeFromInventoryButtons.count();
        for (let i = 0; i < count; i++) {
            await this.removeFromInventoryButtons.first().click();
        }
    }

    async openCart() {
        await this.cartLink.click();
    }
}