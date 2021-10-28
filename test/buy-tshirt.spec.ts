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

  describe('Open browser window', () => {
    it('then should be loaded the automation practice page', async () => {
      await browser.get('http://automationpractice.com/');
    });
  });

  describe('Bougth the t-shirt', () => {
    it('then should add the t-shirt on the cart', async () => {
    await browser.wait(EC.elementToBeClickable(menuContentPage.getGoToShirtMenu()), 10000);
    await menuContentPage.goToTShirtMenu();
    await browser.wait(EC.elementToBeClickable(productListPage.getAddToCart()), 5000);
    await productListPage.clicAddToCart();
    await browser.wait(EC.visibilityOf(productAddedModalPage.getToCheckout()), 15000);
    await productAddedModalPage.clickToCheckout();
    await summaryStepPage.clickProceedToCheckout();
  });

  describe('Login on the page', () => {
    it('then should be logged on the page', async () => {
      await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    });
  });

  describe('Select the default address', () => {
    it('then should be agreeded with the  terms of service of shipping', async () => {
      await addressStepPage.clickProceedToCheckout();
      await shippingStepPage.clickTermsOfServiceCheckbox();
      await shippingStepPage.clickProceedToCheckout();
    });
  });

  describe('Pay in the bank', () => {
    it('then should be confimed the buy order', async () => {
      await paymentStepPage.clickPayByBankWire();
      await bankPaymentPage.clickIConfirmMyOrder();
      await browser.wait(EC.visibilityOf(orderSummaryPage.getConfirmation()), 5000);
      await expect(orderSummaryPage.readConfirmation())
        .toBe('Your order on My Store is complete.');
    });
  });
});
