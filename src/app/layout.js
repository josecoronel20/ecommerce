import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Mi Ecommerce",
  description: "Encuentra los mejores productos aquí.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
