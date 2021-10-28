import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage,
} from '../scr/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  // const EC = ExpectedConditions;

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    // await browser.wait(EC.elementToBeClickable(productListPage.getAddToCart()), 20000);
    await productListPage.clicAddToCart();

    // falla
    await productAddedModalPage.clickToCheckout();
    // await browser.wait(EC.elementToBeClickable(productAddedModalPage.getToCheckout()), 20000);
    // await browser.sleep(3000);
    await summaryStepPage.clickProceedToCheckout();
    // await browser.wait(EC.elementToBeClickable(summaryStepPage.getProceedToCheckout()), 20000);
    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    await addressStepPage.clickProceedToCheckout();
    await shippingStepPage.clickTermsOfServiceCheckbox();
    await shippingStepPage.clickProceedToCheckout();
    await paymentStepPage.clickPayByCheck();
    await bankPaymentPage.clickIConfirmMyOrder();
    await expect(orderSummaryPage.readConfirmation())
      .toBe('Your order on My Store is complete.');
  });
});
