import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kaiser OFS | Industrial Cleaning Services | Upper Midwest",
  description: "Professional tank cleaning, wash water recycling, and industrial cleaning services across North Dakota, Montana, Wyoming, South Dakota, Minnesota, and Iowa. Fast response, expert waste management.",
  keywords: [
    "tank cleaning",
    "industrial cleaning",
    "wash water recycling",
    "non-entry tank cleaning",
    "oil field services",
    "North Dakota industrial cleaning",
    "Montana tank cleaning",
    "hydro jetting",
    "rail car cleaning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
