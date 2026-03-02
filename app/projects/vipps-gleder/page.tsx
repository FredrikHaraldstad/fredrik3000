"use client";

import TransitionLink from "@/components/TransitionLink";
import { useEffect, useRef } from "react";

// Video component with scroll-triggered autoplay
function AutoplayVideo({ src }: { src: string }) {
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

    return () => {
      observer.disconnect();
    };
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
      className="w-full h-full object-cover"
      aria-label="Project demonstration video"
    >
      <track kind="captions" />
      Your browser does not support the video tag.
    </video>
  );
}

export default function VippsGlederPage() {

  return (
    <div className="min-h-screen px-6 pt-16 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Project Navigation */}
          <nav className="flex justify-between items-center mb-20" aria-label="Project navigation">
            <div>
              <TransitionLink
                href="/projects/vr-wayfinding"
                className="small text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
              >
                <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
                <span>VR wayfinding</span>
              </TransitionLink>
            </div>
            <div>
              <TransitionLink
                href="/projects/matchi"
                className="small text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
              >
                <span>Matchi</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </TransitionLink>
            </div>
          </nav>

          {/* Main Content */}
          <div>
            {/* Intro Section — text at 3/4 width */}
            <div className="mb-20 lg:w-3/4">
              {/* Project Title */}
              <h1 className="title text-text-default mb-8">Vipps gleder</h1>

              <p className="body text-text-default mb-6">
                In this project, we worked closely with Vipps over 12 weeks to improve the use of Vipps in e-commerce and strengthen the goal of becoming more of a wallet than just being used for peer-to-peer payments.
              </p>

              <p className="body text-text-default mb-6">
                We have expanded the gifting space with the aim of making it just as easy to delight someone with a small gift as it is to send a Vipps payment. For example, it will be possible to surprise someone with a soda or a chocolate bar, which can be picked up in-store using a QR code.
              </p>

              <p className="small text-text-subdued mb-10">
                With Isak Steiness Christoffersen <span className="ml-4">University project (BA-level) · 12 weeks · 2025</span>
              </p>

              <ul className="flex flex-wrap gap-3 list-none" aria-label="Project categories">
                <li><span className="small text-text-subdued">(Interactiondesign)</span></li>
                <li><span className="small text-text-subdued">(Servicedesign)</span></li>
                <li><span className="small text-text-subdued">(Visualdesign)</span></li>
              </ul>
            </div>

            <hr className="border-border-separator mb-16" />

            {/* Overview Section */}
            <section id="overview" className="mb-32">
              <h2 className="heading-1 text-text-default mb-8">Overview</h2>
              
              <div className="mb-12">
                <div className="aspect-video bg-background-container-low rounded-[16px] overflow-hidden max-w-4xl mx-auto">
                  <AutoplayVideo src="/Isak-Fredrik-Vipps-film.mp4" />
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section className="mb-32">
              <h2 className="heading-1 text-text-default mb-16">Process</h2>

              <div className="space-y-24">

                {/* Step 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4">
                    <p className="body text-text-default">
                      In the first phase of the project we looked at different aspects — ranging from Vipps itself to technology — trying to find out why people are using Vipps, or different payment methods, before we looked at how they use them. This brought us into the next phase of zooming in on Vipps specifically. <span className="small text-text-subdued">#marketanalysis #deskresearch #interviews</span>
                    </p>
                  </div>
                  <div className="rounded-l overflow-hidden">
                    <img
                      src="/6how and why.svg"
                      alt="Research phase — why and how Vipps is used"
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4">
                    <p className="body text-text-default">
                      Because Vipps is doing great, with almost 5 million users and 300 million transactions, we asked: what are the strong patterns in Vipps that we can try to combine with e-commerce to make it stronger? This led us into looking at how we can combine peer-to-peer Vipps with e-commerce. <span className="small text-text-subdued">#potential #benchmarking #competitoranalysis</span>
                    </p>
                  </div>
                  <div className="rounded-l overflow-hidden">
                    <img
                      src="/6 huh2.svg"
                      alt="Exploring potentials in the existing Vipps service"
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4">
                    <p className="body text-text-default">
                      We started early designing different concepts as a way to get feedback and do research. This was possible because of Vipps&apos; strong position in society — it&apos;s known to everyone. By doing this we were able to take with us the best parts, combine them, then design and test over again. <span className="small text-text-subdued">#concepttesting #iteration #prototyping</span>
                    </p>
                  </div>
                  <div className="rounded-l overflow-hidden">
                    <img
                      src="/6diff prot.svg"
                      alt="Testing simple concepts and combining strengths"
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Step 4 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4">
                    <p className="body text-text-default">
                      Building on the previous step we could use this as research and design tools, and do research by design — such as workshops, testing and co-designing for new ideas and iterations. <span className="small text-text-subdued">#codesign #workshop</span>
                    </p>
                  </div>
                  <div className="rounded-l overflow-hidden">
                    <img
                      src="/vipps-process-4.png"
                      alt="Co-design workshops and sessions"
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Step 5 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4">
                    <p className="body text-text-default">
                      Iterating continuously through design and testing cycles allowed us to refine and improve the concept with real feedback at each step. <span className="small text-text-subdued">#usertesting #prototyping #collaborative design</span>
                    </p>
                  </div>
                  <div className="rounded-l overflow-hidden">
                    <img
                      src="/vipps-process-5.png"
                      alt="Design and test iteration cycles"
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

              </div>
            </section>

            {/* Strategy Section */}
            <section className="mb-32">
              <h2 className="heading-1 text-text-default mb-8">Strategy</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
                <div className="space-y-6">
                  <p className="body text-text-default">
                    We tried to simulate the physical rituals associated with gift-giving and recreate them in the app, to give the user a feeling of the ritual of buying and giving gifts, as well as redesigning components and opening up for gifts in even more scenarios, and challenging what a gift can be.
                  </p>
                  <p className="body text-text-default">
                    Also trying to take advantage of the strong position Vipps has with people, and the possibilities it gives for personalizing. Early on, we chose to be open not only to the problems users experience in the app, but also to problems that are not Vipps' fault yet can still be solved with Vipps.
                  </p>
                </div>
                <div className="rounded-l overflow-hidden">
                  <img src="/vipps startegy.svg" alt="Strategy visualization — Vipps gifting strategy" loading="lazy" className="w-full h-[400px] object-contain" />
                </div>
              </div>

              <h2 className="heading-1 text-text-default mb-4">Design proposal</h2>
              <a
                href="#overview"
                className="small text-text-subdued hover:text-text-default transition-colors flex items-center gap-1 group mb-12 w-fit"
              >
                <span>Prototype</span>
                <span aria-hidden="true" className="group-hover:-translate-y-0.5 transition-transform inline-block">↑</span>
              </a>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                <div className="relative overflow-hidden max-w-sm">
                  <img src="/Vipps 1.svg" alt="Design proposal — gift sender screen" loading="lazy" className="w-full h-auto" />
                </div>
                <ul className="space-y-5 list-none pt-2">
                  <li><p className="body text-text-default">Keeping visual elements from the gift that are already known to the user in Vipps, while also combining them with elements from physical gifts.</p></li>
                  <li><p className="body text-text-default">Dividing, to make it clear it is two gifts.</p></li>
                  <li><p className="body text-text-default">A clear picture of the gift and a tag that follows it to update the gift&apos;s status.</p></li>
                  <li><p className="body text-text-default">A tag that follows the gift to update its status, such as where to pick it up and whether it has been collected.</p></li>
                </ul>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-32 mb-32">
                <div className="relative max-w-md">
                  <img src="/vipps donasjon.svg" alt="Design proposal — donation flow screens" loading="lazy" className="w-full h-auto" />
                </div>
                <ul className="space-y-5 list-none pt-2">
                  <li><p className="body text-text-default">There are many scenarios where money is not desired or adds value. We therefore made it possible to send a double gift — a donation to charity and a thank-you gift to the person you want to show appreciation to, completely without any trace of a transaction.</p></li>
                </ul>
              </div>

              {/* <div className="hidden md:block">
                <h2 className="heading-1 text-text-default mb-8">Flow</h2>
                <div className="rounded-l overflow-hidden max-w-5xl mx-auto">
                  <img 
                    src="/vipps flyt ja.svg"
                    alt="Vipps flow — gift and payment experience"
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </div>
              </div> */}
            </section>

            {/* Further Exploration and Reflections Section */}
            <section className="mb-32">
              <h2 className="heading-1 text-text-default mb-8">Further exploration and reflections</h2>
              
              <p className="body text-text-default mb-8">
                We explored further concepts like Vipps services as snow plowing and creating an advent calendar.
              </p>

              <div className="rounded-l overflow-hidden max-w-5xl mx-auto">
                <img 
                  src="/vipps jul.svg" 
                  alt="Vipps advent calendar concept"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </section>

            <div className="flex justify-end mt-20">
              <TransitionLink
                href="/projects/matchi"
                className="paragraph-medium text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
              >
                <span>Next project</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
  );
}

