"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";

const SPLASH_SHOWN_KEY = "splashShown";

const SVG_WIDTH = 1738;
const STAGGER_SPAN = 2.8;
const DRAW_DURATION = 1.2;

// Timeline:
//  0 → SPLASH_DURATION_MS        logo draws
//  → + MERGE_DURATION_MS         logo moves to navbar position (top-right)
//  → + COLLAPSE_DURATION_MS      black overlay shrinks up to navbar height (h-14)
//  → + FADE_DURATION_MS          remaining navbar-height strip fades away
const SPLASH_DURATION_MS = 3000;
const MERGE_DURATION_MS = 750;
const COLLAPSE_DURATION_MS = 700;
const FADE_DURATION_MS = 350;

function getStartX(d: string): number {
  const match = d.match(/^M(-?[\d.]+)/);
  return match ? parseFloat(match[1]) : 0;
}

const paths = [
  "M524.502 18.5L532.002 90L529.002 118",
  "M569.002 24L574.002 121",
  "M574.502 76.5L675.102 88.3935C675.697 88.4639 676.275 88.6409 676.808 88.9159L691.502 96.5",
  "M576.002 73.5C576.002 73.5 604.596 64.4497 616.002 50.5C619.122 46.6848 623.002 40 623.002 40",
  "M394.002 31C394.002 31 373.819 28.0293 361.002 29.5C347.679 31.0289 328.002 39 328.002 39",
  "M327.002 24C327.002 24 322.883 58.5221 327.002 80C328.68 88.7459 333.002 102 333.002 102",
  "M333.002 102C333.002 102 351.935 85.8344 362.002 75C376.465 59.4354 394.002 31 394.002 31",
  "M239.002 64L281.002 62",
  "M237.002 30.5C237.002 30.5 257.708 28.0931 271.002 28.5C283.18 28.8727 302.002 32 302.002 32",
  "M282.502 89C282.502 89 268.615 95.8146 259.002 97.5C249.386 99.186 234.002 97.5 234.002 97.5",
  "M234.002 98L235.502 30.5",
  "M412.002 93.5L495.502 87.5",
  "M425.502 150L433.502 27.5",
  "M413.002 38C413.002 38 433.212 31.8539 446.502 32C459.024 32.1377 478.002 38 478.002 38",
  "M128.002 98.5L211.502 92.5",
  "M141.502 155L149.502 32.5",
  "M129.002 43C129.002 43 149.212 36.8539 162.502 37C175.024 37.1377 194.002 43 194.002 43",
  "M194.002 43.5L128.002 98",
  "M478.002 38.5L412.002 93",
  "M15.5022 85L110.002 66",
  "M10.0022 42C10.0022 42 48.7096 22.2441 75.5022 21.5C91.4575 21.0569 116.002 27 116.002 27",
  "M27.0022 130.5L35.0022 18",
  "M1399.5 48.5L1442.5 93",
  "M1442.5 93L1395 117.5",
  "M1227.5 26.5V118.5",
  "M1223.5 119.5L1279.5 99.5",
  "M893.002 111L935.002 15",
  "M1553 124.5L1595 28.5",
  "M1112 119.5L1154 23.5",
  "M935.002 15L964.502 147.5",
  "M1595 28.5L1627 166.5",
  "M1154 23.5L1184 147.5",
  "M901.002 85.5L985.002 65.5",
  "M1561 99L1645 79",
  "M1120 94L1204 74",
  "M817.002 122.5V10",
  "M854.502 12.5L860.502 155",
  "M802.002 77.5L884.002 58.5",
  "M1002 82.5L1085.5 76.5",
  "M1015.5 139L1023.5 16.5",
  "M1003 27C1003 27 1023.21 20.8539 1036.5 21C1049.02 21.1377 1068 27 1068 27",
  "M1068 27.5L1002 82",
  "M1367.83 40.5C1367.83 40.5 1347.65 37.5293 1334.83 39C1321.51 40.5289 1301.83 48.5 1301.83 48.5",
  "M1300.83 33.5C1300.83 33.5 1296.71 68.0221 1300.83 89.5C1302.51 98.2459 1306.83 111.5 1306.83 111.5",
  "M1306.83 111.5C1306.83 111.5 1325.77 95.3344 1335.83 84.5C1350.3 68.9354 1367.83 40.5 1367.83 40.5",
  "M1443 24L1399.5 48.5",
  "M1464.5 42.5H1539",
  "M1491 46L1500 140",
  "M1727.83 47.5C1727.83 47.5 1707.65 44.5293 1694.83 46C1681.51 47.5289 1661.83 55.5 1661.83 55.5",
  "M1660.83 40.5C1660.83 40.5 1656.71 75.0221 1660.83 96.5C1662.51 105.246 1666.83 118.5 1666.83 118.5",
  "M1666.83 118.5C1666.83 118.5 1685.77 102.334 1695.83 91.5C1710.3 75.9354 1727.83 47.5 1727.83 47.5",
];

type Phase = "drawing" | "merging" | "collapsing" | "fading";

/**
 * Full-viewport splash overlay shown on first arrival this session.
 *
 * 1. Logo draws itself in the center of the screen.
 * 2. Logo moves up and scales down into the top-right navbar position.
 * 3. Overlay fades away, revealing the page underneath.
 *
 * Dispatches a global "splashDone" event when finished so the TopBar
 * can show its own logo seamlessly.
 */
export default function SplashLogo() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>("drawing");
  const [shouldShow, setShouldShow] = useState(true);

  // Computed pixel position for the merge animation (FLIP technique).
  const [logoStyle, setLogoStyle] = useState<React.CSSProperties>({});
  const logoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem(SPLASH_SHOWN_KEY) === "1"
    ) {
      setShouldShow(false);
    }
  }, []);

  useEffect(() => {
    if (!shouldShow) return;

    const mergeTimer = setTimeout(() => {
      if (!logoRef.current) return;

      const rect = logoRef.current.getBoundingClientRect();

      // Target: right-aligned in the navbar, matching TopBar logo position.
      // TopBar uses mr-8 (32px) and h-7 (28px) for the logo.
      const targetH = 28;
      const aspectRatio = rect.width / rect.height;
      const targetW = targetH * aspectRatio;
      const targetLeft = window.innerWidth - 32 - targetW;
      const targetTop = (56 - targetH) / 2; // vertically centered in h-14

      // Step 1 — pin element to exact screen coordinates (remove % / transform).
      setLogoStyle({
        position: "fixed",
        left: rect.left,
        top: rect.top,
        width: rect.width,
        transform: "none",
        transition: "none",
      });

      // Step 2 — after two frames (browser has painted step 1), animate to target.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setLogoStyle({
            position: "fixed",
            left: targetLeft,
            top: targetTop,
            width: targetW,
            transform: "none",
            transition: `left ${MERGE_DURATION_MS}ms cubic-bezier(0.25,0.46,0.45,0.94),
                         top  ${MERGE_DURATION_MS}ms cubic-bezier(0.25,0.46,0.45,0.94),
                         width ${MERGE_DURATION_MS}ms cubic-bezier(0.25,0.46,0.45,0.94)`,
          });
        });
      });

      setPhase("merging");
    }, SPLASH_DURATION_MS);

    const collapseTimer = setTimeout(
      () => setPhase("collapsing"),
      SPLASH_DURATION_MS + MERGE_DURATION_MS
    );

    const fadeTimer = setTimeout(
      () => setPhase("fading"),
      SPLASH_DURATION_MS + MERGE_DURATION_MS + COLLAPSE_DURATION_MS
    );

    const hideTimer = setTimeout(() => {
      sessionStorage.setItem(SPLASH_SHOWN_KEY, "1");
      window.dispatchEvent(new Event("splashDone"));
      setVisible(false);
    }, SPLASH_DURATION_MS + MERGE_DURATION_MS + COLLAPSE_DURATION_MS + FADE_DURATION_MS);

    return () => {
      clearTimeout(mergeTimer);
      clearTimeout(collapseTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [shouldShow]);

  if (!shouldShow || !visible) return null;

  const isMerging =
    phase === "merging" || phase === "collapsing" || phase === "fading";
  const isCollapsing = phase === "collapsing" || phase === "fading";

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] overflow-hidden"
      aria-live="polite"
      aria-label="Loading"
      style={{
        // Collapse: shrink height from full viewport down to navbar height (56 px = h-14).
        // The bottom of the black lifts upward, revealing the page below.
        height: isCollapsing ? 56 : "100dvh",
        transition:
          phase === "collapsing"
            ? `height ${COLLAPSE_DURATION_MS}ms cubic-bezier(0.25,0.46,0.45,0.94)`
            : phase === "fading"
            ? `opacity ${FADE_DURATION_MS}ms ease`
            : "none",
        opacity: phase === "fading" ? 0 : 1,
        pointerEvents: phase !== "drawing" ? "none" : "auto",
      }}
    >
      {/* Black canvas */}
      <div className="absolute inset-0 bg-background-container-inverted" />

      {/* Logo — centered while drawing, then moves to navbar via FLIP */}
      <div
        ref={logoRef}
        style={
          isMerging
            ? logoStyle
            : {
                position: "fixed",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "min(768px, calc(100vw - 4rem))",
              }
        }
      >
        <svg
          viewBox="0 0 1738 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Fredrik Haraldstad"
          role="img"
          className="w-full"
        >
          <style>{`
            @keyframes splashLogoDraw {
              from { stroke-dashoffset: 3000; opacity: 0; }
              12% { opacity: 1; }
              to { stroke-dashoffset: 0; opacity: 1; }
            }
          `}</style>
          {paths.map((d, i) => {
            const drawDelay = (getStartX(d) / SVG_WIDTH) * STAGGER_SPAN;
            return (
              <path
                key={i}
                d={d}
                stroke="white"
                strokeWidth="20"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 3000,
                  strokeDashoffset: 3000,
                  opacity: 0,
                  animation: `splashLogoDraw ${DRAW_DURATION}s cubic-bezier(0.25,0.46,0.45,0.94) ${drawDelay.toFixed(3)}s both`,
                }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
