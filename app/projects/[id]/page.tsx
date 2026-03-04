"use client";

import TransitionLink from "@/components/TransitionLink";
import { projects } from "@/data/projects";
import { useEffect, useRef, useState } from "react";
import SafeImage from "@/components/SafeImage";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projectData: { [key: string]: any } = {
  "vipps-gleder": {
    title: "Vipps gleder",
    description:
      "In this project, we worked closely with Vipps over 12 weeks to improve the use of Vipps in e-commerce and strengthen the goal of becoming more of a wallet than just being used in peer-to-peer payments.",
    contributor: "With Isak Steiness Christoffersen",
    projectInfo: "University project (BA-level) · 12 weeks · 2024",
    categories: ["Interactiondesign", "Servicedesign", "Visualdesign"],
    overviewMedia: [{ type: "video", src: "/vipps-gleder/vipps-overview-film.mp4" }],
    overviewDescription:
      "We have expanded the gifting space with the aim of making it just as easy to delight someone with a small gift as it is to send a Vipps payment. For example, it will be possible to surprise someone with a soda or a chocolate bar, which can be picked up in-store using a QR code.",
    strategyContent: {
      paragraphs: [
        "We tried to simulate the physical rituals associated with gift-giving and recreate them in the app, to give the user a feeling of the ritual of buying and giving gifts, as well as redesigning components and opening up for gifts in even more scenarios, and challenging what a gift can be.",
        "Also trying to take advantage of the strong position Vipps has with the people, and the possibilities it gives for personalizing. Early on, we chose to be open not only to the problems users experience in the app, but also to problems that are not Vipps' fault yet can still be solved with Vipps. The strategy is to create a service that people love, planting the seed that buying things with Vipps is just as easy as sending someone money with Vipps.",
      ],
      images: [
        {
          src: "/vipps-gleder/vipps-strategy-left.png",
          alt: "Strategy visualization — Gift flow steps",
        },
        {
          src: "/vipps-gleder/vipps-strategy-right.png",
          alt: "Strategy visualization — Gift notifications",
        },
      ],
    },
  },
  infraspace: {
    title: "infraspace",
    description:
      "Project description Project description Project description Project description Project description Project description",
    contributor: "Contributor",
    categories: ["Interactiondesign", "Front-end development", "Visualdesign"],
    overviewMedia: [{ type: "video", src: "/infraspace/infraspace-walkthrough.mov" }],
    images: ["/project-image-1.jpg", "/project-image-2.jpg"],
  },
  matchi: {
    title: "Matchi",
    description:
      "In this two-day brief, we were assigned to analyze and redesign an existing UI with an explicit task in mind. I have redesigned the play page of the booking app Matchi for a user using the app for the first time, trying to find an available venue to play their sport.",
    contributor: "Individual",
    projectInfo: "University project (MA-level) · 2 days · 2026",
    categories: ["Interactiondesign"],
    overviewMedia: [{ type: "image", src: "/matchi/matchi-sketches-1.svg" }],
    overviewDescription:
      "The redesigned play page focuses on creating a clear entry point for first-time users, with simplified venue cards and progressive disclosure to reduce cognitive load.",
    overviewAdditionalMedia: [{ type: "image", src: "/matchi/matchi-sketches-2.svg" }],
    designProposal: {
      title: "Design proposal",
      media: { type: "image", src: "/matchi/matchi-final-detail.svg" },
    },
    processSteps: [
      {
        id: 1,
        title: "Analysis of existing interface",
        description: "Identifying pain points in the original design",
        image: "/matchi/matchi-process-1.png",
      },
      {
        id: 2,
        title: "Proposed solution",
        description: "Redesigned interface with improved hierarchy and clarity",
        image: "/matchi/matchi-proposal-1.png",
      },
    ],
  },
  deichman: {
    title: "SAFT; Deichman Stovner",
    description:
      "In this project, we collaborated with Deichman Stovner to address the challenge of attracting youth. Early in the process, we had to reframe our goal to focus on how we can engage and involve the youth in shaping the services that Deichman offers.",
    contributor: "Group work",
    projectInfo: "University project (BA-level) · 6 weeks · 2024",
    categories: ["Servicedesign"],
    overviewMedia: [{ type: "image", src: "/deichman/deichman-overview.svg" }],
    overviewDescription:
      "In this project, we worked on two levels: trying to understand what offers and needs the youth had in the city and districts around them, and exploring the same within the library.",
    processContent: {
      title: "Process",
      description:
        "Doing workshops and taking part in being in the environment we are designing for. Learning to adapt after experiencing and learning from one workshop to the next.",
      media: { type: "image", src: "/deichman/deichman-process.svg" },
    },
    testingContent: {
      title: "Testing",
      description:
        "Created service models to test where our service best comes in, as well as seeing who needs to take action. Also created some feedback loops to visualize effect over time.",
      media: { type: "image", src: "/deichman/deichman-testing.svg" },
    },
  },
};

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
      loop
      preload="metadata"
      playsInline
      className="w-full h-full object-cover"
      aria-label={title || "Project video"}
    >
      Your browser does not support the video tag.
    </video>
  );
}

const projectOrder = projects.map((p) => p.id);

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projectData[params.id] || projectData["vipps-gleder"];
  const [activeProcessStep, setActiveProcessStep] = useState(1);

  const currentIndex = projectOrder.indexOf(params.id);
  const prevId = currentIndex > 0 ? projectOrder[currentIndex - 1] : null;
  const nextId =
    currentIndex < projectOrder.length - 1
      ? projectOrder[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen px-6 pt-16 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Prev / Next navigation */}
        <nav
          className="flex justify-between items-center mb-20"
          aria-label="Project navigation"
        >
          <div>
            {prevId && (
              <TransitionLink
                href={`/projects/${prevId}`}
                className="small text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
              >
                <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
                <span>{projectData[prevId]?.title || projects.find((p) => p.id === prevId)?.title || prevId}</span>
              </TransitionLink>
            )}
          </div>
          <div>
            {nextId && (
              <TransitionLink
                href={`/projects/${nextId}`}
                className="small text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
              >
                <span>{projectData[nextId]?.title || projects.find((p) => p.id === nextId)?.title || nextId}</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </TransitionLink>
            )}
          </div>
        </nav>

        {/* Intro — 2/3 width */}
        <div className="lg:w-2/3 mb-20">
          <h1 className="title text-text-default mb-8">{project.title}</h1>

          <p className="body text-text-default mb-6">{project.description}</p>

          <p className="small text-text-subdued mb-10">
            {project.contributor}
            {project.projectInfo && (
              <span className="ml-4">{project.projectInfo}</span>
            )}
          </p>

          <ul
            className="flex flex-wrap gap-3 list-none"
            aria-label="Project categories"
          >
            {project.categories.map((category: string, index: number) => (
              <li key={index}>
                <span className="small text-text-subdued">({category})</span>
              </li>
            ))}
          </ul>

          {params.id === "vipps-gleder" && (
            <div className="mt-12 rounded-l overflow-hidden max-4xl">
              <SafeImage
                src="/vipps flyt ja.svg"
                alt="Vipps flow — gift and payment experience"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          )}
        </div>

        <hr className="border-border-separator mb-16" />

        {/* Overview */}
        <section className="mb-32" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="heading-1 text-text-default mb-8">
            Overview
          </h2>

          <div className="mb-12">
            {project.overviewMedia && project.overviewMedia.length > 0 ? (
              project.overviewMedia.map((media: any, index: number) => (
                <div
                  key={index}
                  className="rounded-[16px] overflow-hidden max-w-4xl mx-auto mb-8"
                >
                  {media.type === "image" ? (
                    <SafeImage
                      src={media.src}
                      alt={`${project.title} overview`}
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  ) : media.type === "video" ? (
                    <AutoplayVideo src={media.src} title={`${project.title} video`} />
                  ) : null}
                </div>
              ))
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] bg-background-container-low rounded-l" aria-hidden="true" />
                <div className="aspect-[4/3] bg-background-container-low rounded-l" aria-hidden="true" />
              </div>
            )}
          </div>

          {project.overviewDescription && (
            <p className="body text-text-default mb-12">
              {project.overviewDescription}
            </p>
          )}

          {project.overviewAdditionalMedia &&
            project.overviewAdditionalMedia.length > 0 && (
              <div className="mb-12">
                {project.overviewAdditionalMedia.map(
                  (media: any, index: number) => (
                    <div
                      key={index}
                      className="rounded-[16px] overflow-hidden max-w-4xl mx-auto"
                    >
                      {media.type === "image" ? (
                        <SafeImage
                          src={media.src}
                          alt={`${project.title} additional overview`}
                          loading="lazy"
                          className="w-full h-auto"
                        />
                      ) : media.type === "video" ? (
                        <AutoplayVideo src={media.src} title={`${project.title} additional video`} />
                      ) : null}
                    </div>
                  )
                )}
              </div>
            )}
        </section>

        {/* Design Proposal */}
        {project.designProposal && (
          <>
            <hr className="border-border-separator mb-16" />
            <section className="mb-32" aria-labelledby="proposal-heading">
              <h2
                id="proposal-heading"
                className="heading-1 text-text-default mb-8"
              >
                {project.designProposal.title}
              </h2>
              <div className="rounded-[16px] overflow-hidden max-w-4xl mx-auto">
                {project.designProposal.media.type === "image" ? (
                  <SafeImage
                    src={project.designProposal.media.src}
                    alt={project.designProposal.title}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                ) : project.designProposal.media.type === "video" ? (
                  <AutoplayVideo
                    src={project.designProposal.media.src}
                    title={project.designProposal.title}
                  />
                ) : null}
              </div>
            </section>
          </>
        )}

        {/* Interactive Process steps */}
        {project.processSteps && project.processSteps.length > 0 && (
          <section className="mb-32" aria-labelledby="process-heading">
            <h2 id="process-heading" className="heading-1 text-text-default mb-12">
              Process
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Steps list */}
              <ol className="lg:col-span-1 space-y-6 text-right list-none" aria-label="Process steps">
                {project.processSteps.map((step: ProcessStep) => (
                  <li key={step.id}>
                    <button
                      onClick={() => setActiveProcessStep(step.id)}
                      className={`paragraph-medium w-full text-right transition-all duration-300 bg-transparent border-none cursor-pointer ${
                        activeProcessStep === step.id
                          ? "text-text-default font-bold"
                          : "text-text-subdued hover:text-text-default"
                      }`}
                      aria-pressed={activeProcessStep === step.id}
                    >
                      {step.description}
                    </button>
                  </li>
                ))}
              </ol>

              {/* Active step image */}
              <div className="lg:col-span-2">
                <div className="aspect-[16/9] bg-background-container-low rounded-l overflow-hidden max-w-3xl">
                  {project.processSteps.find(
                    (step: ProcessStep) => step.id === activeProcessStep
                  )?.image && (
                    <SafeImage
                      src={
                        project.processSteps.find(
                          (step: ProcessStep) => step.id === activeProcessStep
                        )?.image
                      }
                      alt={`Process step ${activeProcessStep}: ${
                        project.processSteps.find(
                          (s: ProcessStep) => s.id === activeProcessStep
                        )?.description
                      }`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Strategy */}
        {project.strategyContent && (
          <section className="mb-32" aria-labelledby="strategy-heading">
            <h2 id="strategy-heading" className="heading-1 text-text-default mb-8">
              Strategy
            </h2>

            <div className="space-y-6 mb-12">
              {project.strategyContent.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={index} className="body text-text-default">
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {project.strategyContent.images && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.strategyContent.images.map(
                  (image: any, index: number) => (
                    <div key={index} className="rounded-l overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-auto"
                      />
                    </div>
                  )
                )}
              </div>
            )}
          </section>
        )}

        {/* Process (non-interactive variant) */}
        {project.processContent && (
          <section className="mb-32" aria-labelledby="process-content-heading">
            <h2 id="process-content-heading" className="heading-1 text-text-default mb-8">
              {project.processContent.title}
            </h2>
            <p className="body text-text-default mb-12">
              {project.processContent.description}
            </p>
            <div className="rounded-[16px] overflow-hidden max-w-4xl mx-auto">
              {project.processContent.media.type === "image" ? (
                <SafeImage
                  src={project.processContent.media.src}
                  alt={project.processContent.title}
                  loading="lazy"
                  className="w-full h-auto"
                />
              ) : project.processContent.media.type === "video" ? (
                <AutoplayVideo
                  src={project.processContent.media.src}
                  title={project.processContent.title}
                />
              ) : null}
            </div>
          </section>
        )}

        {/* Testing */}
        {project.testingContent && (
          <section className="mb-32" aria-labelledby="testing-heading">
            <h2 id="testing-heading" className="heading-1 text-text-default mb-8">
              {project.testingContent.title}
            </h2>
            <p className="body text-text-default mb-12">
              {project.testingContent.description}
            </p>
            <div className="rounded-[16px] overflow-hidden max-w-4xl mx-auto">
              {project.testingContent.media.type === "image" ? (
                <SafeImage
                  src={project.testingContent.media.src}
                  alt={project.testingContent.title}
                  loading="lazy"
                  className="w-full h-auto"
                />
              ) : project.testingContent.media.type === "video" ? (
                <AutoplayVideo
                  src={project.testingContent.media.src}
                  title={project.testingContent.title}
                />
              ) : null}
            </div>
          </section>
        )}

        {/* Bottom next-project link */}
        {nextId && (
          <div className="flex justify-end mt-20">
            <TransitionLink
              href={`/projects/${nextId}`}
              className="paragraph-medium text-text-subdued hover:text-text-default transition-colors flex items-center gap-2 group"
            >
              <span>Next project</span>
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </TransitionLink>
          </div>
        )}
      </div>
    </div>
  );
}
