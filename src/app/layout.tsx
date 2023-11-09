import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import { GlobalContextProvider } from "@/context/store";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minute Burger | Best Burger In Town",
  description: "Minute burger has the best burgers in town",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-[url('/background.jpg')] bg-repeat bg-contain ${inter.className}`}
      >
        <GlobalContextProvider>
          <MainHeader />
          <main>{children}</main>
          <MainFooter />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
