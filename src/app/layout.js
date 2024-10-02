import { CartProvider } from "./Cart";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Kick Cartel",
  description: "We sell name branded sneakers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>
        <body>{children}</body>
      </CartProvider>
    </html>
  );
}
