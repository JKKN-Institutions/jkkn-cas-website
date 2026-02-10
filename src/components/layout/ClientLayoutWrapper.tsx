'use client';

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { BottomNavbar } from "@/components/BottomNav";

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();

  return (
    <>
      <Navigation />
      <main className={cn(
        isMobile && 'pb-20'  // Bottom padding for navbar on mobile
      )}>
        {children}
      </main>
      <Footer />
      <BottomNavbar />
    </>
  );
}
