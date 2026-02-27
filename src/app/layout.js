import "./globals.css";
//стили и грифиы
export const metadata = {
  title: "Soller",
  description: "Solar products in your home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
