import { browser, ExpectedConditions } from 'protractor';
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
  const EC = ExpectedConditions;

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await browser.wait(EC.elementToBeClickable(menuContentPage.getGoToShirtMenu()), 10000);
    await menuContentPage.goToTShirtMenu();
    await browser.wait(EC.elementToBeClickable(productListPage.getAddToCart()), 5000);
    await productListPage.clicAddToCart();
    await browser.wait(EC.visibilityOf(productAddedModalPage.getToCheckout()), 15000);
    await productAddedModalPage.clickToCheckout();
    await summaryStepPage.clickProceedToCheckout();
    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    await addressStepPage.clickProceedToCheckout();
    await shippingStepPage.clickTermsOfServiceCheckbox();
    await shippingStepPage.clickProceedToCheckout();
    await paymentStepPage.clickPayByCheck();
    await bankPaymentPage.clickIConfirmMyOrder();
    await browser.wait(EC.visibilityOf(orderSummaryPage.getConfirmation()), 5000);
    await expect(orderSummaryPage.readConfirmation())
      .toBe('Your order on My Store is complete.');
  });
});
