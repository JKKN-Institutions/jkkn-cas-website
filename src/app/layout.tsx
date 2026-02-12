import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/layout/ClientLayoutWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JKKN College",
  description: "JKKN College of Arts and Science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
