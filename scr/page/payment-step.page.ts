import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByCheckOption: ElementFinder;

  private payByBankWireOption: ElementFinder;

  constructor() {
    // this.payByCheckOption = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
    this.payByCheckOption = $('#HOOK_PAYMENT .payment_module .cheque');

    this.payByBankWireOption = $('#HOOK_PAYMENT .payment_module .bankwire');
  }

  public async clickPayByCheck(): Promise<void> {
    await this.payByCheckOption.click();
  }

  public async clickPayByBankWire(): Promise<void> {
    await this.payByBankWireOption.click();
  }
}
