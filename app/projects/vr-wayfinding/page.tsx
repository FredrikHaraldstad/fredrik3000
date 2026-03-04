"use client";

import TransitionLink from "@/components/TransitionLink";
import SafeImage from "@/components/SafeImage";

export default function VRWayfindingPage() {
  return (
    <div className="min-h-screen px-6 pt-16 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Project navigation */}
        <nav className="flex justify-between items-center mb-20" aria-label="Project navigation">
          <div />
          <div>
            <TransitionLink
              href="/projects/vipps-gleder"
              className="small text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
            >
              <span>Vipps gleder</span>
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </TransitionLink>
          </div>
        </nav>

        {/* Intro — 2/3 width */}
        <div className="lg:w-2/3 mb-20">
          <h1 className="title text-text-default mb-8">VR wayfinding</h1>

          <p className="body text-text-default mb-6">
            This project started by finding ways to prototype with better tools. I wanted more functionality so I could user-test more realistically. I hooked up Cursor AI with Xcode (Apple) and forked Apple Maps to be able to make my own version, which resulted in a new way of navigating with the help of VR and GPS feedback.
          </p>

          <p className="small text-text-subdued mb-10">
            <span className="ml-0">
              Personal project · 2026
            </span>
          </p>

          <ul
            className="flex flex-wrap gap-3 list-none"
            aria-label="Project categories"
          >
            <li>
              <span className="small text-text-subdued">(Interaction design)</span>
            </li>
          </ul>
        </div>

        <hr className="border-border-separator mb-16" />

        {/* Overview section temporarily hidden so Process comes first */}
        {/*
        <section className="mb-32" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="heading-1 text-text-default mb-8">Overview</h2>
          <p className="body text-text-default mb-12">
            Add your VR wayfinding project content here.
          </p>

          <div className="mb-12">
            <div className="aspect-video bg-background-container-low rounded-[16px] overflow-hidden max-w-4xl mx-auto" />
          </div>
        </section>
        */}

        <section className="mb-32" aria-labelledby="process-heading">
          <h2 id="process-heading" className="heading-1 text-text-default mb-12">Process</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — workflow text */}
            <div>
              <p className="body text-text-default mb-4">
                I designed components in Figma, then used the Figma MCP to connect directly with Cursor — which is hooked up to Xcode. This lets me write SwiftUI code and test in Apple&apos;s native environment.
              </p>
              <p className="body text-text-default">
                Most importantly, it lets me download the app I&apos;ve built directly onto my phone, unlocking real hardware like the camera and GPS — making it possible to prototype and test with full fidelity.
              </p>
            </div>

            {/* Right — tool chain icons */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-3">
                <SafeImage
                  src="/vr-wayfinding/logo-figma.png"
                  alt="Figma"
                  className="w-16 h-16 rounded-m object-contain"
                />
                <span className="small text-text-subdued">Figma</span>
              </div>

              <span className="text-text-subdued body mb-6" aria-hidden="true">→</span>

              <div className="flex flex-col items-center gap-3">
                <SafeImage
                  src="/vr-wayfinding/logo-cursor.png"
                  alt="Cursor"
                  className="w-16 h-16 rounded-m object-contain"
                />
                <span className="small text-text-subdued">Cursor</span>
              </div>

              <span className="text-text-subdued body mb-6" aria-hidden="true">→</span>

              <div className="flex flex-col items-center gap-3">
                <SafeImage
                  src="/vr-wayfinding/logo-xcode.png"
                  alt="Xcode"
                  className="w-16 h-16 rounded-m object-contain"
                />
                <span className="small text-text-subdued">Xcode</span>
              </div>
            </div>
          </div>

          {/* Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            <div className="rounded-[16px] overflow-hidden bg-background-container-low">
              <SafeImage
                src="/vr-wayfinding/vr-wayfinding-figma-mcp.png"
                alt="Figma design with MCP connection"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[16px] overflow-hidden bg-background-container-low">
              <SafeImage
                src="/vr-wayfinding/vr-wayfinding-cursor-xcode.png"
                alt="Cursor connected to Xcode with SwiftUI code"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[16px] overflow-hidden bg-background-container-low">
              <SafeImage
                src="/vr-wayfinding/vr-wayfinding-iphone-gps.png"
                alt="App running on iPhone with live GPS"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Context */}
        <section className="mb-16">
          <p className="small text-text-subdued uppercase tracking-widest mb-2">Context</p>
          <p className="body text-text-default">Using Apple Maps for walking, with rapid wayfinding in focus.</p>
        </section>

        {/* Problem statement section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — problem text */}
            <div>
              <p className="body text-text-default mb-4">
                Pain point one — From experience I recognised an uncertain moment that arrives right after pressing &ldquo;Start route&rdquo; — which direction am I actually going? The blue dot is small, is it this way or that?
              </p>
              <p className="body text-text-default">
                To tackle this I designed a compass that immediately addresses the user&apos;s direction — removing the hesitation and giving a clear, confident start to the journey.
              </p>
            </div>

            {/* Right — user journey diagram */}
            <div className="flex items-center gap-3">
              {/* Press Start — left, full height */}
              <div className="border border-border-separator rounded-m px-4 py-6 flex items-center justify-center self-stretch min-w-[130px]">
                <p className="body text-text-default text-center">Press Start</p>
              </div>

              <span className="text-text-subdued body self-center" aria-hidden="true">→</span>

              {/* 2×2 grid */}
              <div className="flex-1 grid grid-cols-2 gap-3">
                {/* Top row — solution (green) */}
                <div className="border-2 border-[#22c55e] rounded-m px-4 py-5">
                  <span className="small text-text-subdued block mb-1">New</span>
                  <p className="body text-text-default">Large compass</p>
                </div>
                <div className="border-2 border-[#22c55e] rounded-m px-4 py-5">
                  <span className="small text-text-subdued block mb-1">New</span>
                  <p className="body text-text-default">Incentive to start walking</p>
                </div>

                {/* Bottom row — existing problem */}
                <div className="border-2 border-[#ef4444] rounded-m px-4 py-5">
                  <span className="small text-text-subdued block mb-1">Existing</span>
                  <p className="body text-text-default">Small blue dot</p>
                </div>
                <div className="border-2 border-[#ef4444] rounded-m px-4 py-5">
                  <span className="small text-text-subdued block mb-1">Problem</span>
                  <p className="body text-text-default">Unsure of direction, waits</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain point two */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <p className="body text-text-default mb-4">
                Pain point two — The second problem area I wanted to explore was being close to the target but not knowing the exact building or door. Could VR help here?
              </p>
              <p className="body text-text-default">
                I designed a VR mode in the map that lets the user point the camera at a specific building to mark the right door or entrance — turning the final metres into a clear, guided moment.
              </p>
            </div>

            {/* Right — solution flow */}
            <div className="flex items-stretch gap-3">
              <div className="flex-1 border-2 border-[#ef4444] rounded-m px-4 py-5">
                <span className="small text-text-subdued block mb-1">Existing</span>
                <p className="body text-text-default">You have arrived at your destination</p>
              </div>

              <span className="text-text-subdued body shrink-0 self-center" aria-hidden="true">→</span>

              <div className="flex-1 border-2 border-[#22c55e] rounded-m px-4 py-5">
                <span className="small text-text-subdued block mb-1">New</span>
                <p className="body text-text-default">Scan with camera and compass</p>
              </div>

              <span className="text-text-subdued body shrink-0 self-center" aria-hidden="true">→</span>

              <div className="flex-1 border-2 border-[#22c55e] rounded-m px-4 py-5">
                <span className="small text-text-subdued block mb-1">New</span>
                <p className="body text-text-default">Mark door or building</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testing section */}
        <section className="mb-32" aria-labelledby="testing-heading">
          <h2 id="testing-heading" className="heading-1 text-text-default mb-12">Testing</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — text */}
            <div>
              <p className="body text-text-default mb-4">
                I started this project because I wanted to test more realistically — so let&apos;s get into it. By building this application in Xcode I was able to download it onto my own phone, but also turn on developer mode on three of my friends&apos; phones and install it on theirs too.
              </p>
              <p className="body text-text-default mb-4">
                This meant they could use the app with a fully functioning GPS and camera — enabling a completely new way of testing. No more &ldquo;can I click this?&rdquo; or &ldquo;where do I go from here?&rdquo; or &ldquo;why isn&apos;t the camera working?&rdquo;
              </p>
              <p className="body text-text-default">
                The app was taken seriously from the start. The feedback was about the design and the functionality — not about what was broken or missing.
              </p>
            </div>

            {/* Right — photos, same height */}
            <div className="flex gap-3 items-stretch h-[420px]">
              <div className="rounded-[16px] overflow-hidden flex-1">
                <SafeImage
                  src="/vr-wayfinding/vr-wayfinding-testing-desktop.png"
                  alt="Three phones and a MacBook Air on a desk during testing"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[16px] overflow-hidden w-[180px] shrink-0">
                <SafeImage
                  src="/vr-wayfinding/vr-wayfinding-home-screen.png"
                  alt="iPhone home screen showing the Cursor test app installed"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Feedback quotes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
            <blockquote className="border-l-2 border-border-separator pl-5 py-1">
              <p className="body text-text-default">&ldquo;It disappeared kind of fast for me. I was still looking at it when it was already gone.&rdquo;</p>
            </blockquote>
            <blockquote className="border-l-2 border-border-separator pl-5 py-1">
              <p className="body text-text-default">&ldquo;The overlay label was a bit hard to read against a bright white building facade.&rdquo;</p>
            </blockquote>
          </div>
        </section>

        {/* Design proposal section */}
        <section className="mb-32" aria-labelledby="proposal-heading">
          <h2 id="proposal-heading" className="heading-1 text-text-default mb-12">Design proposal</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Images */}
            <div className="flex flex-col md:flex-row items-center justify-start gap-12 lg:ml-[80px]">
              {/* Phone */}
              <div className="flex-shrink-0 w-[260px]">
                <SafeImage
                  src="/vr-wayfinding/vr-wayfinding-hero-phone.png"
                  alt="VR wayfinding app running on iPhone showing compass and Oslo Central Station"
                  loading="lazy"
                  className="w-full h-auto overflow-visible"
                />
              </div>

              {/* Compasses */}
              <div className="flex flex-col items-center gap-6">
                <div className="flex-shrink-0">
                  <SafeImage
                    src="/vr-wayfinding/vr-wayfinding-compass-main.svg"
                    alt="Compass design component"
                    className="w-[220px] h-[220px]"
                  />
                </div>
                <div className="flex-shrink-0">
                  <SafeImage
                    src="/vr-wayfinding/vr-wayfinding-compass-variant.svg"
                    alt="Compass design component variant"
                    className="w-[220px] h-[220px]"
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <ul className="space-y-5 list-none pt-3 text-left lg:pl-20">
              <li><p className="body text-text-default">Used Apple&apos;s design system to design a compass. The compass is clear on what is the correct direction, which helps the user get the information they need to start walking.</p></li>
            </ul>
          </div>
        </section>

        {/* Design proposal 2 */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Notes */}
            <ul className="space-y-5 list-none pt-3 text-left lg:pl-20">
              <li>
                <p className="body text-text-default">
                  Trying to design a solution for the problem of arriving at a destination but still wondering — where is the right door, bench, or building? Using speculative design to design an AR concept to mark the correct entrance or building, made possible by combining the camera in AR view with an algorithm that analyses doors and buildings.
                </p>
              </li>
            </ul>

            {/* Images */}
            <div className="flex flex-col md:flex-row items-center justify-start gap-12">
              <div className="flex-shrink-0 w-[260px]">
                <SafeImage
                  src="/vr-wayfinding/vr-wayfinding-arrived-screen.png"
                  alt="You have arrived screen showing Oslo Opera House with Find door button"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 w-[260px]">
                <SafeImage
                  src="/vr-wayfinding/vr-wayfinding-ar-door.png"
                  alt="VR camera view showing entrance found at Oslo Opera House"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-end mt-20">
          <TransitionLink
            href="/projects/vipps-gleder"
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
