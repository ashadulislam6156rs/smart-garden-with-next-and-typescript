import { Footer } from "@/components/shared/footer/Footer";
import { Header } from "@/components/shared/navbar/Navbar";
import React from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
