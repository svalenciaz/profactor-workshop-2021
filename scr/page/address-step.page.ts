import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheckout: ElementFinder;

  constructor() {
    // this.proceedToCheckout = $('#center_column > form > p > button > span');
    this.proceedToCheckout = $('#center_column .cart_navigation button > span');
  }

  public async clickProceedToCheckout(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
