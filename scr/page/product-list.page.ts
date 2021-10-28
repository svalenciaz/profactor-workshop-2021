import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCart: ElementFinder;

  constructor() {
    // this.addToCart = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
    this.addToCart = $('#center_column .button-container .ajax_add_to_cart_button');
  }

  public async clicAddToCart(): Promise<void> {
    await this.addToCart.click();
  }

  public getAddToCart(): ElementFinder {
    return this.addToCart;
  }
}
