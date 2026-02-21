import "./globals.css";
import { Inter, Press_Start_2P } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata = {
  title: "B & Wings | Digital Growth Agency",
  description: "Performance Driven Digital Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pressStart2P.variable} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}