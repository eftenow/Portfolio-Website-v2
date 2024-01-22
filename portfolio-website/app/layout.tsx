import type { Metadata } from "next";
import '../scss/main.scss';
import { Navigation } from "./components/Navigation/Navigation";


export const metadata: Metadata = {
  title: "Tsvetan Eftenov",
  description: "Portfolio website of Tsvetan Eftenov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        </body>
    </html>
  );
}
