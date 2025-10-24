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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "John Eric Sanchez Suarez",
    url: "https://joesanchezsu.github.io",
    image: "https://joesanchezsu.github.io/images/avatar.jpg", // optional
    jobTitle: "Creative Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Independent / Freelance",
    },
    sameAs: [
      "https://www.linkedin.com/in/john-eric-sánchez-suárez-b9b743158",
      "https://x.com/jesanchezsua",
      "https://github.com/joesanchezsu",
    ],
    description:
      "Creative frontend developer and technologist with a background in mechatronics and cognitive engineering. Experienced in interactive web, 3D, and UX design.",
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
