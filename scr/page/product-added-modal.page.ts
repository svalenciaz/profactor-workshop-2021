import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckout: ElementFinder;

  constructor() {
    this.proceedToCheckout = $('[style*="display: block;"] .button-container > a');
  }

  public async clickToCheckout(): Promise<void> {
    await this.proceedToCheckout.click();
  }

  public getToCheckout(): ElementFinder {
    return this.proceedToCheckout;
  }
}
