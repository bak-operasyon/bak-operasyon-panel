export const metadata = {
  title: "Beşiktaş Arama Kurtarma Operasyon Paneli",
  description: "BAK Dijital Afet Operasyon Sistemi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
