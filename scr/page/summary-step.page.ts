import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckout: ElementFinder;

  constructor() {
    // this.proceedToCheckout = $('.cart_navigation span');
    this.proceedToCheckout = $('.cart_navigation a > span');
  }

  public async clickProceedToCheckout(): Promise<void> {
    await this.proceedToCheckout.click();
  }

  public getProceedToCheckout(): ElementFinder {
    return this.proceedToCheckout;
  }
}
