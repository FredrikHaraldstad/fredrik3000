"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

/**
 * Renders the Navigation bar on every page EXCEPT the home page ("/").
 * On the home page, Navigation is rendered inline inside page.tsx
 * so it can sit below the hero and then stick after scrolling.
 */
export default function ConditionalNav() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Navigation />;
}
