import type { Metadata } from "next";
import { ProjectsCarouselFocus } from "@/components/ProjectsCarouselFocus";
import SplashLogo from "@/components/SplashLogo";
import { TypewriterHeading } from "@/components/TypewriterHeading";

export const metadata: Metadata = {
  title: "Portfolio – Fredrik Haraldstad, Interaction Designer & Developer",
  description:
    "Explore the portfolio of Fredrik Haraldstad, an interaction designer and front-end developer based in Oslo, showcasing UX, UI and service design projects.",
  openGraph: {
    title: "Portfolio – Fredrik Haraldstad",
    description:
      "Selected interaction design, UX, UI and service design projects by Fredrik Haraldstad.",
    type: "website",
  },
};

/**
 * Home page — single-page scroll layout:
 *
 *  [Fixed TopBar]        ← always visible (layout)
 *  ┌─────────────────┐
 *  │  Hero  (60vh)   │  dark, name at bottom-left
 *  └─────────────────┘
 *  [Navigation bar]      ← sticky: sticks to top-14 after hero scrolls away
 *  [Projects carousel]
 *  [Education / Experience]
 */
export default function Home() {
  return (
    <>
      {/* ── Splash — logo for 4s on arrival, then fades out ───────────────── */}
      <SplashLogo />

      {/* ── 1. HERO — light, 60vh ───────────────────────────────────────────── */}
      <section
        className="relative h-[35vh] bg-background-page flex flex-col justify-end px-8 lg:px-16 pb-12"
        aria-labelledby="hero-name"
      >
        <div className="relative z-10 hero-content-reveal">
          <h1 id="hero-name" className="title hero-title text-text-default font-medium">
            <TypewriterHeading
              className="inline"
              statements={[
                "Fredrik Haraldstad",
                "Interaction designer",
                "Web developer",
                "Service designer",
              ]}
              typeSpeed={50}
              deleteSpeed={30}
              pauseDuration={2800}
              startDelayMs={4600}
              cursor="|"
              loop
            />
          </h1>
        </div>
      </section>

      {/* ── 2. PROJECTS — carousel comes into focus on scroll ────────────── */}
      <ProjectsCarouselFocus />

      {/* ── 4. EDUCATION & EXPERIENCE ───────────────────────────────────── */}
      <section
        className="bg-background-page px-8 lg:px-16 pb-32"
        aria-label="Background"
      >
        <hr className="border-border-separator mb-16" />

        {/* Education */}
        <div className="mb-16">
          <p className="small text-text-subdued mb-6">Education</p>
          <dl>
            <div className="space-y-2">
              <dt className="small text-text-subdued">2022–2027</dt>
              <dd className="heading-1 text-text-default">
                MA Interaction Design — The Oslo School of Architecture and
                Design
              </dd>
            </div>
          </dl>
        </div>

        <hr className="border-border-separator mb-16" />

        {/* Experience */}
        <div>
          <p className="small text-text-subdued mb-6">Experience</p>
          <div className="overflow-x-auto pb-4 -mx-8 lg:-mx-16 px-8 lg:px-16">
            <dl className="flex gap-12 min-w-0" aria-label="Work experience">
              <div className="flex-shrink-0 space-y-2">
                <dt className="small text-text-subdued">Current</dt>
                <dd
                  className="heading-2 text-text-default font-normal"
                  style={{
                    backgroundImage: "none",
                    WebkitBackgroundClip: "unset",
                    backgroundClip: "unset",
                  }}
                >
                  Freelance designer and developer
                </dd>
              </div>
              <div className="flex-shrink-0 space-y-2">
                <dt className="small text-text-subdued">January 2025</dt>
                <dd className="heading-2 text-text-default">
                  PwC Design Explore — Ruter Autonomous Driving
                </dd>
              </div>
              <div className="flex-shrink-0 space-y-2">
                <dt className="small text-text-subdued">2024–2025</dt>
                <dd className="heading-2 text-text-default">
                  UX Design Intern — Paldo AS
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Fredrik Haraldstad",
            jobTitle: "Interaction Designer & Developer",
            description:
              "Interaction designer and front-end developer specialising in UX, UI and service design.",
          }),
        }}
      />
    </>
  );
}
