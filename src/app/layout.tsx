import "./globals.css";

export const metadata = {
  title: "MetriFod - UANL",
  description: "Sistema de pruebas físicas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}