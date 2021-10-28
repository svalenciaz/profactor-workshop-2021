import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailInput: ElementFinder;

  private passwordInput: ElementFinder;

  private loginButton: ElementFinder;

  constructor() {
    this.emailInput = $('#email');
    this.passwordInput = $('#passwd');
    this.loginButton = $('#SubmitLogin > span');
  }

  public async login(email, password): Promise<void> {
    await this.emailInput.sendKeys(email);
    await this.passwordInput.sendKeys(password);
    await this.loginButton.click();
  }
}
