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

  describe('Open browser window', () => {
    it('then should be loaded the automation practice page', async () => {
      await browser.get('http://automationpractice.com/');
    });
  });

  describe('Bougth the t-shirt', () => {
    it('then should add the t-shirt on the cart', async () => {
      await menuContentPage.goToTShirtMenu();
      // await browser.wait(EC.elementToBeClickable(productListPage.getAddToCart()), 20000);
      await productListPage.clicAddToCart();

      // falla
      await productAddedModalPage.clickToCheckout();
      // await browser.wait(EC.elementToBeClickable(productAddedModalPage.getToCheckout()), 20000);
      // await browser.sleep(3000);
      await summaryStepPage.clickProceedToCheckout();
      // await browser.wait(EC.elementToBeClickable(summaryStepPage.getProceedToCheckout()), 20000);
    });
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
      await paymentStepPage.clickPayByCheck();
      await bankPaymentPage.clickIConfirmMyOrder();
      await expect(orderSummaryPage.readConfirmation())
        .toBe('Your order on My Store is complete.');
    });
  });
});
