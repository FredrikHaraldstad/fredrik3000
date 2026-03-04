"use client";

import TransitionLink from "@/components/TransitionLink";
import { useEffect, useRef } from "react";
import SafeImage from "@/components/SafeImage";

function AutoplayVideo({ src, title }: { src: string; title?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      muted
      preload="metadata"
      loop
      playsInline
      className="w-full h-full object-contain"
      aria-label={title || "Project demonstration video"}
    >
      <track kind="captions" />
      Your browser does not support the video tag.
    </video>
  );
}

export default function InfraspacePage() {
  return (
    <div className="min-h-screen px-6 pt-16 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Project navigation */}
        <nav
          className="flex justify-between items-center mb-20"
          aria-label="Project navigation"
        >
          <div>
            <TransitionLink
              href="/projects/matchi"
              className="small text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
            >
              <span
                aria-hidden="true"
                className="group-hover:-translate-x-1 transition-transform inline-block"
              >
                ←
              </span>
              <span>Matchi</span>
            </TransitionLink>
          </div>
          <div>
            <TransitionLink
              href="/projects/deichman"
              className="small text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
            >
              <span>Deichman</span>
              <span
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform inline-block"
              >
                →
              </span>
            </TransitionLink>
          </div>
        </nav>

        {/* Intro — 2/3 width */}
        <div className="lg:w-2/3 mb-20">
          <h1 className="title text-text-default mb-8">infraspace</h1>

          <p className="body text-text-default mb-6">
            I work as a freelancer and was assigned by Infraspace, a Norwegian company that provides web-based software for smarter, faster and more flexible infrastructure planning. I was tasked to design and develop their new website.
          </p>

          <p className="small text-text-subdued mb-10">
            Freelance work <span className="ml-4">2025</span>
          </p>

          <ul
            className="flex flex-wrap gap-3 list-none"
            aria-label="Project categories"
          >
            <li>
              <span className="small text-text-subdued">(Interactiondesign)</span>
            </li>
            <li>
              <span className="small text-text-subdued">
                (Front-end development)
              </span>
            </li>
            <li>
              <span className="small text-text-subdued">(Visualdesign)</span>
            </li>
          </ul>
        </div>

        <hr className="border-border-separator mb-16" />

        {/* Overview */}
        <section className="mb-32" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="heading-1 text-text-default mb-4">Overview</h2>
          <a
            href="https://infraspace.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 small text-text-subdued hover:text-text-default transition-colors mb-8 group"
          >
            infraspace.tech
            <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">↗</span>
          </a>

          <div className="mb-12">
            <div className="aspect-video bg-background-container-low rounded-[16px] overflow-hidden max-w-4xl mx-auto">
              <AutoplayVideo
                src="/infraspace/infraspace-walkthrough.mov"
                title="Infraspace website walkthrough"
              />
            </div>
          </div>
        </section>

        {/* Process */}
        {/* <section className="mb-32" aria-labelledby="process-heading">
          <h2 id="process-heading" className="heading-1 text-text-default mb-12">Process</h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 items-center">
            <div>
              <p className="body text-text-default">
                Working with a large amount of complex information that needed to be communicated, it was crucial to carefully manage cognitive load. Throughout the site, I implemented progressive disclosure — revealing information gradually so users could absorb content at their own pace without feeling overwhelmed.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/infra cognitive.svg"
                alt="Cognitive load and progressive disclosure in the Infraspace design"
                loading="lazy"
                className="w-full max-w-md"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <div>
              <p className="body text-text-default">
                As the website was to be handed over to the client, I created a comprehensive system of reusable templates and components. This approach empowered the team to independently maintain and update the site as needed, without requiring developer assistance for routine content changes.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/infrapscae card.svg"
                alt="Reusable component template design for the Infraspace CMS"
                loading="lazy"
                className="w-full max-w-md"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mt-32">
            <div>
              <p className="body text-text-default">
                Here I have chosen to show my project planning, as I think the way the process is structured is important. It allowed me to manage my time so I could do all the testing I wanted, while also having time to explore the design and finish developing the design and the website on time.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/infra time.svg"
                alt="Project planning timeline showing phases from research to delivery"
                loading="lazy"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </section> */}

        {/* Visual exploration */}
        {/* <section className="mb-32" aria-labelledby="visual-exploration-heading">
          <h2 id="visual-exploration-heading" className="heading-1 text-text-default mb-12">Visual exploration</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <p className="body text-text-default">
                Working within the frames of the existing design and using the existing colors. I also chose to add some new colors, as well as sketch up for a new and softer logo and visual elements.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <img
                src="/infra LOGOS.svg"
                alt="Logo sketches and visual exploration for Infraspace"
                loading="lazy"
                className="w-full max-w-md"
              />
              <img
                src="/infra collors.svg"
                alt="Color palette exploration for Infraspace"
                loading="lazy"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </section> */}

        {/* Bottom navigation */}
        <div className="flex justify-end mt-20">
          <TransitionLink
            href="/projects/deichman"
            className="paragraph-medium text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
          >
            <span>Next project</span>
            <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
