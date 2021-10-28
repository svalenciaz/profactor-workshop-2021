import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private iConfirmMyOrderButton: ElementFinder;

  constructor() {
    this.iConfirmMyOrderButton = $('#cart_navigation > button > span');
  }

  public async clickIConfirmMyOrder(): Promise<void> {
    await this.iConfirmMyOrderButton.click();
  }
}
