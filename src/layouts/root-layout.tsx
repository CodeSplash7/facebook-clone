import "@/style/globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="*:box-border w-full h-fit">{children}</body>
    </html>
  );
}

