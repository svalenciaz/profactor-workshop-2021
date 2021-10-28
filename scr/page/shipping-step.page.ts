import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsOfServiceCheckbox: ElementFinder;

  private proceedToCheckout: ElementFinder;

  constructor() {
    this.termsOfServiceCheckbox = $('#cgv');
    this.proceedToCheckout = $('#form > p > button > span');
  }

  public async clickTermsOfServiceCheckbox(): Promise<void> {
    await this.termsOfServiceCheckbox.click();
  }

  public async clickProceedToCheckout(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
