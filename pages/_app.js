import '../styles/scss/style.scss';
import AuthProvider from '../contexts/auth';
import CommonProvider from '../contexts/common';
import ProductsProvider from '../contexts/products';
import CartProvider from '../contexts/cart';
import CheckoutProvider from '../contexts/checkout';
import CommonLayout from '../layouts/CommonLayout';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CommonProvider>
        <ProductsProvider>
          <CartProvider>
            <CheckoutProvider>
              <CommonLayout>
                <Component {...pageProps} />
              </CommonLayout>
            </CheckoutProvider>
          </CartProvider>
        </ProductsProvider>
      </CommonProvider>
    </AuthProvider>
  );
}

export default MyApp;
