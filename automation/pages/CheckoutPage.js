export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.completeHeader = page.locator('.complete-header');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async fillCheckoutInformation({ firstName, lastName, postalCode }) {
        if (firstName) await this.firstNameInput.fill(firstName);
        if (lastName) await this.lastNameInput.fill(lastName);
        if (postalCode) await this.postalCodeInput.fill(postalCode);
    }

    async continue() {
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}