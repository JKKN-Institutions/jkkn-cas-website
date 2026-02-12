'use client';

import Navigation from "./Navigation";
import Footer from "./Footer";
import { BottomNavbar } from "../BottomNav";

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
      <BottomNavbar />
    </>
  );
}
