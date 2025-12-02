"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Shared/navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

export default function LayoutClient({ children }) {
  const pathname = usePathname();

  // pages where navbar & footer should be hidden
  const hideLayout = ["/login", "/get-started"];

  const isHidden = hideLayout.includes(pathname);

  return (
    <>
      {!isHidden && <Navbar />}
      {children}
      {!isHidden && <Footer />}
    </>
  );
}
