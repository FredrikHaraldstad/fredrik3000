"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";
import SafeImage from "@/components/SafeImage";

const TOPBAR_H = 56; // h-14

export default function TopBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProjects =
    pathname === "/projects" || pathname.startsWith("/projects/");
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";

  const [progress, setProgress] = useState(1);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const [logoVisible, setLogoVisible] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome || sessionStorage.getItem("splashShown") === "1") {
      setLogoVisible(true);
    }
  }, [isHome]);

  const headerRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLAnchorElement>(null);
  const projectsRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isHome) return;
    const handle = () => setLogoVisible(true);
    window.addEventListener("splashDone", handle);
    return () => window.removeEventListener("splashDone", handle);
  }, [isHome]);

  useEffect(() => {
    const update = () => {
      let active: React.RefObject<HTMLAnchorElement> | null = null;
      if (isHome) active = homeRef;
      else if (isProjects) active = projectsRef;
      else if (isAbout) active = aboutRef;
      else if (isContact) active = contactRef;

      if (active?.current && headerRef.current) {
        const hRect = headerRef.current.getBoundingClientRect();
        const aRect = active.current.getBoundingClientRect();
        setIndicator({
          left: aRect.left - hRect.left,
          width: aRect.width,
          opacity: 1,
        });
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [pathname, progress, isHome, isProjects, isAbout, isContact]);

  const linkStyle = {
    opacity: progress,
    transform: `translateY(${(1 - progress) * -6}px)`,
    transition: "opacity 0.08s linear, transform 0.08s linear",
    pointerEvents: progress < 0.1 ? ("none" as const) : ("auto" as const),
  };

  const linkCls = (active: boolean) =>
    `small whitespace-nowrap h-full flex items-center px-4 relative z-10 transition-colors ${
      active
        ? "text-text-default"
        : "text-text-subdued hover:text-text-inverted"
    }`;

  const mobileLinkCls = (active: boolean) =>
    `small py-4 border-b border-white/10 transition-colors ${
      active ? "text-text-inverted" : "text-white/60 hover:text-text-inverted"
    }`;

  return (
    <>
      <header
        ref={headerRef}
        className="topbar-persist fixed top-0 left-0 right-0 z-50 h-14 pt-2 bg-background-container-inverted flex items-center overflow-hidden"
        aria-label="Site header"
      >
        {/* Sliding indicator (desktop) */}
        <div
          aria-hidden="true"
          className="hidden sm:block absolute pointer-events-none bg-background-page"
          style={{
            left: indicator.left,
            width: indicator.width,
            bottom: 0,
            height: 48,
            opacity: indicator.opacity,
            borderRadius: "10px 10px 0 0",
            transition:
              "left 400ms cubic-bezier(0.4, 0, 0.2, 1), width 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease",
          }}
        />

        {/* Nav links — hidden on mobile */}
        <nav
          className="flex items-center h-full gap-8 pl-8 lg:pl-16"
          aria-label="Main navigation"
          aria-hidden={progress < 0.05}
        >
          <TransitionLink
            ref={homeRef}
            href="/"
            style={linkStyle}
            className={`flex items-center justify-center w-14 h-full flex-shrink-0 relative z-10 transition-colors overflow-hidden ${
              isHome
                ? "text-text-default"
                : "text-text-subdued hover:text-text-inverted"
            }`}
            aria-label="Home"
            aria-current={isHome ? "page" : undefined}
            tabIndex={progress < 0.1 ? -1 : undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </TransitionLink>

          <TransitionLink
            ref={projectsRef}
            href="/projects"
            style={linkStyle}
            className={`hidden sm:flex ${linkCls(isProjects)}`}
            aria-current={isProjects ? "page" : undefined}
            tabIndex={progress < 0.1 ? -1 : undefined}
          >
            Projects
          </TransitionLink>

          <TransitionLink
            ref={aboutRef}
            href="/about"
            style={linkStyle}
            className={`hidden sm:flex ${linkCls(isAbout)}`}
            aria-current={isAbout ? "page" : undefined}
            tabIndex={progress < 0.1 ? -1 : undefined}
          >
            About me
          </TransitionLink>

          <TransitionLink
            ref={contactRef}
            href="/contact"
            style={linkStyle}
            className={`hidden sm:flex ${linkCls(isContact)}`}
            aria-current={isContact ? "page" : undefined}
            tabIndex={progress < 0.1 ? -1 : undefined}
          >
            Contact
          </TransitionLink>
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className="sm:hidden ml-auto mr-4 flex items-center justify-center w-10 h-10 relative z-10 text-white/80 hover:text-white transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Logo — right-aligned */}
        {logoVisible && (
          <Link
            href="/"
            aria-label="Fredrik Haraldstad — home"
            className="hidden sm:flex ml-auto mr-8 flex-shrink-0 relative z-10"
            style={{
              animation: isHome ? "jkl-fade-in 0.35s ease both" : "none",
            }}
          >
            <SafeImage
              src="/brand-logo-mark.svg"
              alt="Fredrik Haraldstad"
              className="h-7 w-auto"
              style={{
                filter:
                  "brightness(0) invert(1) sepia(0.12) saturate(0.8) brightness(0.97)",
              }}
              fallbackLabel="Logo not available"
            />
          </Link>
        )}
      </header>

      {/* Mobile dropdown — fixed below topbar, outside header so it's not clipped */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="sm:hidden fixed top-14 left-0 right-0 z-40 bg-background-container-inverted flex flex-col px-8 pb-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <TransitionLink
            href="/"
            className={mobileLinkCls(isHome)}
            aria-current={isHome ? "page" : undefined}
          >
            Home
          </TransitionLink>
          <TransitionLink
            href="/projects"
            className={mobileLinkCls(isProjects)}
            aria-current={isProjects ? "page" : undefined}
          >
            Projects
          </TransitionLink>
          <TransitionLink
            href="/about"
            className={mobileLinkCls(isAbout)}
            aria-current={isAbout ? "page" : undefined}
          >
            About me
          </TransitionLink>
          <TransitionLink
            href="/contact"
            className={mobileLinkCls(isContact)}
            aria-current={isContact ? "page" : undefined}
          >
            Contact
          </TransitionLink>
        </div>
      )}
    </>
  );
}
