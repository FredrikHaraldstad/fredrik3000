"use client";

import { usePathname } from "next/navigation";
import SafeImage from "@/components/SafeImage";

export default function Footer() {
  const pathname = usePathname();

  const isSpecificProjectPage =
    pathname.startsWith("/projects/") && pathname !== "/projects";

  if (isSpecificProjectPage) {
    return null;
  }

  return (
    <footer className="bg-background-container-inverted text-text-inverted border-t border-white/10">
      <div className="mx-4 px-[18px] pt-[18px] pb-[18px] flex flex-col justify-between gap-10 min-h-[300px]">
        {/* Center logo / wordmark */}
        <div className="flex items-center justify-start">
          <SafeImage
            src="/brand-logo-mark.svg"
            alt="Fredrik Haraldstad"
            className="h-10 sm:h-12 md:h-14 w-auto"
            style={{
              filter:
                "brightness(0) invert(1) sepia(0.12) saturate(0.8) brightness(0.97)",
              height: "110px",
            }}
            fallbackLabel="Logo not available"
          />
        </div>

        {/* Bottom right: LinkedIn above org number */}
        <div className="flex justify-end">
          <div className="flex flex-col items-end gap-2">
            <a
              href="https://www.linkedin.com/in/fredrik-haraldstad-1a3b77257/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center justify-center rounded-full w-11 h-11 border border-white/40 text-text-inverted hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background-container-inverted transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  fill="currentColor"
                  d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5zM.32 8.13h4.36V23H.32zM8.21 8.13h4.18v2.02h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.67V23h-4.36v-7.01c0-1.67-.03-3.82-2.33-3.82-2.34 0-2.7 1.82-2.7 3.7V23H8.21z"
                />
              </svg>
            </a>
            <p className="small text-text-inverted">Org nr 935 989 973</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

