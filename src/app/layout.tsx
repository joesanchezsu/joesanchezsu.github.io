import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Eric Sanchez Suarez – Creative Frontend Developer",
  description:
    "Portfolio of John Eric Sanchez Suarez, a creative frontend developer and technologist with experience in interactive web, 3D, and UX design.",
  metadataBase: new URL("https://joesanchezsu.github.io"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "John Eric Sanchez Suarez – Creative Frontend Developer",
    description:
      "Showcasing projects and experiments in creative web development, 3D graphics, and interactive design.",
    url: "https://joesanchezsu.github.io",
    siteName: "John Eric Sanchez Suarez Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
