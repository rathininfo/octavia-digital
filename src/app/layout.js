import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";



const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Octavia Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
   <Footer></Footer>
        </body>
    </html>
  );
}
