export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 pt-40 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-16">
          <img
            src="/LOGO FERDIG.svg"
            alt="Fredrik Haraldstad wordmark"
            loading="lazy"
            className="w-full max-w-2xl"
          />
        </div>

        {/* Introduction */}
        <section className="mb-20 space-y-6" aria-labelledby="intro-heading">
          <h1 id="intro-heading" className="sr-only">
            About Fredrik Haraldstad
          </h1>
          <p className="body text-text-default">
            I am curious, active, and I like things that work the way they're
            supposed to, when they're supposed to.
          </p>
          <p className="body text-text-default">
            Currently I'm in my fourth year of a Master's in Interaction Design
            at the Oslo School of Architecture and Design. I'm passionate about
            UX, UI, and service design as well as front-end development!
          </p>
          <p className="body text-text-default">
            I believe that as designers, we have the opportunity to make
            technology usable and accessible for everyone, creating great
            services that truly help people in their everyday lives and work
            when they're most needed.
          </p>
        </section>

        {/* Divider */}
        <hr className="border-border-separator mb-16" />

        {/* Education */}
        <section className="mb-16" aria-labelledby="education-heading">
          <h2 id="education-heading" className="heading-2 text-text-default mb-8">
            Education
          </h2>
          <dl>
            <div className="space-y-1">
              <dt className="small text-text-subdued">2022–2027</dt>
              <dd className="paragraph-medium text-text-default">
                MA Interaction Design — The Oslo School of Architecture and Design
              </dd>
            </div>
          </dl>
        </section>

        {/* Divider */}
        <hr className="border-border-separator mb-16" />

        {/* Experience */}
        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="heading-2 text-text-default mb-8">
            Experience
          </h2>
          <dl className="space-y-8">
            <div className="space-y-1">
              <dt className="small text-text-subdued">January 2025</dt>
              <dd className="paragraph-medium text-text-default">
                PwC Design Explore — Ruter Autonomous Driving
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="small text-text-subdued">2024–2025</dt>
              <dd className="paragraph-medium text-text-default">
                UX Design Intern — Paldo AS
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
