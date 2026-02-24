import "./globals.css";
import { Poppins, Press_Start_2P } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
      <body className={`${poppins.variable} ${pressStart2P.variable} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}