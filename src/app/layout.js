import "./global.css";
import Header from "./components/header/header/Header";
import Footer from "./components/footer/Footer";
import { ProductsProvider } from "./context/ContextProducts";
import { CartProvider } from "./context/ContextCart";

export const metadata = {
  title: "D.SHOP | Ecommerce",
  description: "Encuentra los mejores productos aquí.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <ProductsProvider>
        <CartProvider>
          <body>
            <Header />
            <main>{children}</main>
            <Footer />
          </body>
        </CartProvider>
      </ProductsProvider>
    </html>
  );
}
