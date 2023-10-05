import "./globals.css";
import { Inter, Space_Grotesk, Sofia, Poppins } from "next/font/google";

import OurServices from "@/components/OurServices";
import Popular from "@/components/Popular";
import Foot from "@/app/Foot";
import Header from "./page";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-100 via-red-100 to-emerald-200">
        <Header />
        <Hero />
        <Feature />

        {children}
      </body>
    </html>
  );
}
