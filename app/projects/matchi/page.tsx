"use client";

import TransitionLink from "@/components/TransitionLink";

export default function MatchiPage() {
  return (
    <div className="min-h-screen px-6 pt-16 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Project navigation */}
        <nav className="flex justify-between items-center mb-20" aria-label="Project navigation">
          <div>
            <TransitionLink
              href="/projects/vipps-gleder"
              className="small text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
            >
              <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
              <span>Vipps gleder</span>
            </TransitionLink>
          </div>
          <div>
            <TransitionLink
              href="/projects/infraspace"
              className="small text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
            >
              <span>infraspace</span>
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </TransitionLink>
          </div>
        </nav>

        {/* Intro — 2/3 width */}
        <div className="lg:w-2/3 mb-20">
          <h1 className="title text-text-default mb-8">Matchi</h1>

          <p className="body text-text-default mb-6">
            In this two-day brief, we were assigned to analyze and redesign an existing UI with an explicit task in mind. I have redesigned the play page of the booking app Matchi for a user using the app for the first time, trying to find an available venue to play their sport. I have included this in my portfolio to show the importance of analyzing and arguing for my choices.
          </p>

          <p className="body text-text-default mb-6">
            The redesigned play page focuses on creating a clear entry point for first-time users, with simplified venue cards and progressive disclosure to reduce cognitive load.
          </p>

          <p className="small text-text-subdued mb-10">
            Individual{" "}
            <span className="ml-4">
              University project (MA-level) · 2 days · 2026
            </span>
          </p>

          <ul
            className="flex flex-wrap gap-3 list-none"
            aria-label="Project categories"
          >
            <li>
              <span className="small text-text-subdued">(Interactiondesign)</span>
            </li>
          </ul>
        </div>

        <hr className="border-border-separator mb-16" />

        {/* Overview */}
        <section className="mb-32" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="heading-1 text-text-default mb-8">Overview</h2>

          <div className="rounded-l overflow-hidden max-w-xl mx-auto">
            <img
              src="/matchi overwiew1.svg"
              alt="Side-by-side comparison: original Matchi design (left) vs redesigned version (right)"
              loading="lazy"
              className="w-full h-auto mx-auto"
            />
          </div>
        </section>

        {/* Process */}
        <section className="mb-32" aria-labelledby="process-heading">
          <h2 id="process-heading" className="heading-1 text-text-default mb-12">Process</h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
            <div>
              <ul className="list-none space-y-4 body text-text-default">
                <li>
                  Started by analyzing the old design. This led me to identify some issues that the new design needed to address.
                  No clear primary action, and the interface lacks explicit task signaling. How do I move forward from this step?
                </li>
                <li>Low visual contrast between elements. Where should I look first?</li>
                <li>Premature detail exposure. The UI proposes details before a choice has been made.</li>
              </ul>
              <p className="small text-text-subdued mt-4">#uxlaws #tasksignaling #progressive #abtesting</p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-[16px] overflow-hidden max-w-md w-full">
                <img
                  src="/Matchi old.svg"
                  alt="Original Matchi interface showing usability issues"
                  loading="lazy"
                  className="w-full h-[500px] object-contain"
                />
              </div>
            </div>
          </div>

          <h3 className="heading-3 font-normal text-text-default mb-8">
            Then designed sketches and tested.
          </h3>

          <div className="rounded-l overflow-hidden max-w-4xl mx-auto">
            <img
              src="/ekte.svg"
              alt="Sketches and early prototypes for the redesigned play page"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </section>

        <hr className="border-border-separator mb-16" />

        {/* Design Proposal */}
        <section className="mb-32" aria-labelledby="proposal-heading">
          <h2 id="proposal-heading" className="heading-1 text-text-default mb-12">Design proposal</h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6">
              <p className="body text-text-default">
                A horizontal sport selector was added at the top to create a clear starting point and give users an early sense of progress through the goal-gradient effect.
              </p>
              <p className="body text-text-default">
                The sport selector shifts the screen from general browsing to a focused task, making the layout feel simpler and more coherent.
              </p>
              <p className="body text-text-default">
                Venue cards were simplified to show only key information, using progressive disclosure to reduce cognitive load and help users scan and decide more quickly.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-[16px] overflow-hidden max-w-md w-full">
                <img
                  src="/matchi ferdig.svg"
                  alt="Final design proposal for the redesigned Matchi play page"
                  loading="lazy"
                  className="w-full h-[500px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom navigation */}
        <div className="flex justify-end mt-20">
          <TransitionLink
            href="/projects/infraspace"
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
