"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";

export default function Navigation() {
  const pathname = usePathname();
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLAnchorElement>(null);
  const projectsRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateIndicator = () => {
      let activeRef: React.RefObject<HTMLAnchorElement> | null = null;

      if (pathname === "/") activeRef = homeRef;
      else if (pathname === "/projects" || pathname.startsWith("/projects/"))
        activeRef = projectsRef;
      else if (pathname === "/about") activeRef = aboutRef;
      else if (pathname === "/contact") activeRef = contactRef;

      if (activeRef?.current && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const activeRect = activeRef.current.getBoundingClientRect();
        setIndicator({
          left: activeRect.left - navRect.left,
          width: activeRect.width,
          opacity: 1,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [pathname]);

  const isHome = pathname === "/";
  const isProjects =
    pathname === "/projects" || pathname.startsWith("/projects/");
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";

  const linkCls = (active: boolean) =>
    `small whitespace-nowrap h-full flex items-center px-4 relative z-10 transition-colors ${
      active
        ? "text-text-inverted"
        : "text-text-subdued hover:text-text-default"
    }`;

  const mobileLinkCls = (active: boolean) =>
    `small py-3 transition-colors ${
      active ? "text-text-default font-medium" : "text-text-subdued hover:text-text-default"
    }`;

  return (
    <div className="sticky z-40" style={{ top: "3.5rem" }}>
      {/* ── Nav bar ── */}
      <nav
        ref={navRef}
        className="h-14 pt-2 bg-background-page flex items-center gap-8 pl-8 lg:pl-16 overflow-hidden"
        aria-label="Main navigation"
      >
        {/* Sliding dark indicator (desktop only) */}
        <div
          aria-hidden="true"
          className="hidden sm:block absolute bottom-0 bg-background-container-inverted pointer-events-none"
          style={{
            left: indicator.left,
            width: indicator.width,
            height: 48,
            opacity: indicator.opacity,
            borderRadius: "0 0 10px 10px",
            transition:
              "left 400ms cubic-bezier(0.4, 0, 0.2, 1), width 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease",
          }}
        />

        {/* Home icon */}
        <TransitionLink
          ref={homeRef}
          href="/"
          className={`flex items-center justify-center w-14 h-full flex-shrink-0 relative z-10 transition-colors overflow-hidden ${
            isHome ? "text-text-inverted" : "text-text-default hover:text-text-subdued"
          }`}
          aria-label="Home"
          aria-current={isHome ? "page" : undefined}
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

        {/* Desktop links */}
        <TransitionLink
          ref={projectsRef}
          href="/projects"
          className={`hidden sm:flex ${linkCls(isProjects)}`}
          aria-current={isProjects ? "page" : undefined}
        >
          Projects
        </TransitionLink>

        <TransitionLink
          ref={aboutRef}
          href="/about"
          className={`hidden sm:flex ${linkCls(isAbout)}`}
          aria-current={isAbout ? "page" : undefined}
        >
          About me
        </TransitionLink>

        <TransitionLink
          ref={contactRef}
          href="/contact"
          className={`hidden sm:flex ${linkCls(isContact)}`}
          aria-current={isContact ? "page" : undefined}
        >
          Contact
        </TransitionLink>

        {/* Hamburger button (mobile only) */}
        <button
          className="sm:hidden ml-auto mr-4 flex items-center justify-center w-10 h-10 relative z-10 text-text-default"
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
      </nav>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="sm:hidden bg-background-page border-t border-border-separator px-8 pb-4 flex flex-col"
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
    </div>
  );
}
