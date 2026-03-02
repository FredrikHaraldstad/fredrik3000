"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ViewTransitions({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Check if browser supports View Transitions API
    if (typeof window !== 'undefined' && 'startViewTransition' in document) {
      // Handle browser back/forward navigation
      const handlePopState = () => {
        if (document.startViewTransition) {
          document.startViewTransition(() => {
            // The page will automatically update
          });
        }
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, []);

  useEffect(() => {
    // This runs when pathname changes (route navigation)
    // The CSS @view-transition rule will handle the animation
  }, [pathname]);

  return <>{children}</>;
}
