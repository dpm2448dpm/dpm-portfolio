import Image from "next/image";
import { contactLinks, personJsonLd, siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="relative border-b border-slate-200 bg-white px-6 py-24 dark:border-slate-800 dark:bg-slate-950 sm:py-32">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_36rem)]" />
        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300">
              {siteConfig.heroPill}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              {siteConfig.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {siteConfig.subheadline}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-950 dark:border-slate-700 dark:text-white dark:hover:border-slate-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-2xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
            <div className="rounded-2xl bg-slate-950 p-6 text-slate-100">
              <p className="text-sm text-sky-300">production-ready systems</p>
              <div className="mt-8 space-y-4">
                {siteConfig.highlights.map((item) => (
                  <div key={item} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section id="services" eyebrow="Services" title="Engineering support from prototype to production.">
        <div className="grid gap-5 md:grid-cols-2">
          {siteConfig.services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="process" eyebrow="How I Work" title="From business workflow to production software.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.process.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="font-mono text-sm text-sky-600 dark:text-sky-300">0{index + 1}</p>
              <h3 className="mt-8 font-semibold text-slate-950 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Featured Projects"
        title="Case studies focused on problems, solutions and outcomes."
      >
        <div className="space-y-8">
          {siteConfig.projects.map((project, index) => (
            <article
              key={project.name}
              className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white">
                <div className="relative h-56">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 390px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <a
                    href={project.image.creditUrl}
                    className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs text-slate-200 backdrop-blur transition hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.image.credit}
                  </a>
                </div>
                <div className="p-6">
                <p className="font-mono text-sm text-sky-300">0{index + 1} / case study</p>
                <p className="mt-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
                  {project.category}
                </p>
                <h3 className="mt-10 text-2xl font-semibold">{project.name}</h3>
                <p className="mt-4 text-slate-300">{project.summary}</p>
                <p className="mt-8 rounded-xl border border-sky-900 bg-sky-950/60 p-3 text-sm text-sky-100">
                  {project.status}
                </p>
                {project.links ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-sky-300 hover:text-sky-200"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
                </div>
              </div>
              <div className="space-y-5">
                <ProjectBlock title="Context" text={project.context} />
                <ProjectBlock title="Role" text={project.role} />
                <ProjectBlock title="Problem" text={project.problem} />
                <ProjectBlock title="Solution" text={project.solution} />
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Contribution
                  </h4>
                  <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                    {project.contribution.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Technologies
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Outcome
                  </h4>
                  <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                    {project.outcome.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            More Selected Work
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {siteConfig.additionalWork.map((work) => (
              <article
                key={work.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <h4 className="font-semibold text-slate-950 dark:text-white">{work.name}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {work.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about" eyebrow="About" title="A practical engineering partner for AI-enabled products.">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{siteConfig.about}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.credentials.map((credential) => (
              <div
                key={credential.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400">{credential.label}</p>
                <p className="mt-1 font-semibold text-slate-950 dark:text-white">{credential.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="publications"
        eyebrow="Publications & Academic Work"
        title="Research background in cryptography, benchmarking and privacy."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {siteConfig.publications.map((publication) => (
            <article
              key={publication.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-sm font-medium text-sky-600 dark:text-sky-300">
                {publication.venue} · {publication.year}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">
                {publication.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {publication.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={publication.href}
                className="mt-6 inline-flex text-sm font-semibold text-sky-700 transition hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200"
                target="_blank"
                rel="noreferrer"
              >
                View publication
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section id="stack" eyebrow="Technology Stack" title="Tools selected for reliable delivery.">
        <div className="grid gap-5 md:grid-cols-2">
          {siteConfig.technologyGroups.map((group) => (
            <article
              key={group.category}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="font-semibold text-slate-950 dark:text-white">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section id="contact" className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Contact</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Tell me about your project.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Share the business problem, current constraints and what a successful outcome would look like.
              </p>
            </div>
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block rounded-2xl border border-slate-800 p-4 transition hover:border-sky-400 hover:bg-slate-900"
                >
                  <span className="block text-sm text-slate-400">{link.label}</span>
                  <span className="mt-1 block font-medium">{link.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: Readonly<{
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section id={id} className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ProjectBlock({ title, text }: Readonly<{ title: string; text: string }>) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {title}
      </h4>
      <p className="mt-2 text-slate-700 dark:text-slate-300">{text}</p>
    </div>
  );
}
