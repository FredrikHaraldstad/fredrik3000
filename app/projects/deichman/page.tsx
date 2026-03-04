"use client";

import TransitionLink from "@/components/TransitionLink";
import SafeImage from "@/components/SafeImage";

export default function DeichmanPage() {
  return (
    <div className="min-h-screen px-6 pt-16 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Project navigation */}
        <nav className="flex justify-between items-center mb-20" aria-label="Project navigation">
          <div>
            <TransitionLink
              href="/projects/infraspace"
              className="small text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
            >
              <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
              <span>infraspace</span>
            </TransitionLink>
          </div>
          <div />
        </nav>

        {/* Intro — 2/3 width */}
        <div className="lg:w-2/3 mb-20">
          <h1 className="title text-text-default mb-8">
            SAFT; Deichman Stovner
          </h1>

          <p className="body text-text-default mb-6">
            In this project, we collaborated with Deichman Stovner to address the
            challenge of attracting youth. Early in the process, we had to reframe
            our goal to focus on how we can engage and involve the youth in
            shaping the services that Deichman offers. We aimed to accomplish this
            while making the youths responsible and providing them with
            opportunities to learn from responsibility. Over six weeks, we worked
            together with the youth at Stovner, the staff at Deichman, and our
            professors to create what we called SAFT.
          </p>

          <p className="small text-text-subdued mb-10">
            Group work{" "}
            <span className="ml-4">
              University project (BA-level) · 6 weeks · 2024
            </span>
          </p>

          <ul
            className="flex flex-wrap gap-3 list-none"
            aria-label="Project categories"
          >
            <li>
              <span className="small text-text-subdued">(Servicedesign)</span>
            </li>
          </ul>
        </div>

        <hr className="border-border-separator mb-16" />

        {/* Overview */}
        <section className="mb-32" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="heading-1 text-text-default mb-8">Overview</h2>

          <div className="rounded-l overflow-hidden max-w-3xl mx-auto">
            <SafeImage
              src="/deichman/deichman-process.svg"
              alt="Workshop process documentation"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Process */}
        <section className="mb-32" aria-labelledby="process-heading">
          <h2 id="process-heading" className="heading-1 text-text-default mb-8">Process</h2>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Text — left */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              <p className="body text-text-default">
                In this project, we worked on two levels: trying to understand what offers and needs the youth had in the city and districts around them, and exploring the same within the library. We used methods such as observation, interviews, and mapping before we began co-designing and reviewing the existing service together with the youths.{" "}
                <span className="small text-text-subdued">#observation #interviews #mapping #cocreation</span>
              </p>
              <p className="body text-text-default">
                We learned throughout the process and improved with every workshop. This also shaped the design, creating tools together with the users, which we also think lowered the barrier to using the design later.{" "}
                <span className="small text-text-subdued">#workshops #codesign #iteration</span>
              </p>
              <p className="body text-text-default">
                Getting to know the environment we were designing for was important, we had to start easy and get to know the people and earn their respect. They were doing a lot of great stuff from before, and we needed to respect that.{" "}
                <span className="small text-text-subdued">#context #trustbuilding #youth</span>
              </p>
              <p className="body text-text-default">
                Through designing with the people at Deichman and not for them, we experienced better collaboration and a will and positivity for what we wanted to contribute. This made it easier to do workshops and present our work for them as well as get good feedback and contributions.{" "}
                <span className="small text-text-subdued">#collaboration #participation</span>
              </p>
            </div>

            {/* Photos — right */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              <div className="rounded-l overflow-hidden">
                <SafeImage
                  src="/deichman/deichman-workshop.svg"
                  alt="Co-design workshop with youth at Deichman"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Design proposal */}
        <section className="mb-32" aria-labelledby="design-proposal-heading">
          <h2 id="design-proposal-heading" className="heading-1 text-text-default mb-8">Design proposal</h2>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <p className="body text-text-default">
                SAFT includes various tools that the youth council at Stovner can use to become more organized, work smarter, and develop their services over time. This improves Deichman Stovner&apos;s service gradually and enhances the youths&apos; sense of affiliation and responsibility.
              </p>
            </div>

            <div className="lg:w-1/3 rounded-l overflow-hidden">
              <SafeImage
                src="/deichman/deichman-illustration-youth-council.png"
                alt="Illustration of youth council collaboration at Deichman Stovner"
                loading="lazy"
                className="w-[260px] h-[260px]"
              />
            </div>
          </div>

          <div className="mt-12 rounded-l overflow-hidden max-w-4xl mx-auto">
            <SafeImage
              src="/deichman/deichman-overview.svg"
              alt="SAFT service overview diagram"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Testing */}
        <section className="mb-32" aria-labelledby="testing-heading">
          <h2 id="testing-heading" className="heading-1 text-text-default mb-8">Testing</h2>

          <p className="body text-text-default mb-12">
            Created service models to test where our service best comes in, as well as seeing who needs to take action and who doesn't. Also creating some feedback loops to try to visualize effect over time, and depth of effect within the service.
          </p>

          <div className="rounded-l overflow-hidden max-w-4xl mx-auto">
            <SafeImage
              src="/deichman/deichman-testing.svg"
              alt="Service model testing visualization"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Bottom navigation */}
        <div className="flex justify-end mt-20">
          <TransitionLink
            href="/projects"
            className="paragraph-medium text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
          >
            <span>Back to all projects</span>
            <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
