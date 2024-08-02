import "./globals.css";

export const metadata = {
  title: "Kick Cartel",
  description: "We sell name branded sneakers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
