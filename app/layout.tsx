import "./globals.css";

export const metadata = {
  title: "Cosmo Businesses",
  description: "Discover local businesses in Cosmo City",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fafafa] text-gray-900">{children}</body>
    </html>
  );
}