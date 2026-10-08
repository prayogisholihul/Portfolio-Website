"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/SectionHeading";
import PhoneFrame from "@/components/PhoneFrame";
import projectsJson from "@/data/projects.json";
import { screenshots } from "@/data/screenshots";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  slug: string;
  name: string;
  platform: string;
  stack: string[];
  description: string;
};

const projects = projectsJson as Project[];

const panelDress: Record<string, { glow: string; word: string }> = {
  "brimo-qita": { glow: "bg-[#2f7bff]/10", word: "BANKING" },
  mytelkomsel: { glow: "bg-[#ff2d2d]/10", word: "TELCO" },
  yesdok: { glow: "bg-[#00c2a8]/10", word: "HEALTH" },
};

const stores: Record<string, { label: string; url: string }[]> = {
  "brimo-qita": [
    {
      label: "BRImo",
      url: "https://play.google.com/store/apps/details?id=id.co.bri.brimo",
    },
    {
      label: "Qita",
      url: "https://play.google.com/store/apps/details?id=id.co.bri.brimons",
    },
  ],
  mytelkomsel: [
    {
      label: "MyTelkomsel",
      url: "https://play.google.com/store/apps/details?id=com.telkomsel.telkomselcm",
    },
  ],
  yesdok: [
    {
      label: "YesDok",
      url: "https://play.google.com/store/apps/details?id=com.yesdok.mobile.app",
    },
  ],
};

export default function Projects() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const track = root.current?.querySelector(
          ".projects-track"
        ) as HTMLElement | null;
        if (!track) return;
        const amount = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -amount(),
          ease: "none",
          scrollTrigger: {
            trigger: ".projects-pin",
            start: "top top",
            end: () => `+=${amount()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        gsap.fromTo(
          ".projects-progress",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".projects-pin",
              start: "top top",
              end: () => `+=${amount()}`,
              scrub: 1,
            },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={root} className="scroll-mt-8 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" eyebrow="Portfolio" title="Selected app projects." />
      </div>

      <div className="projects-pin lg:flex lg:h-screen lg:items-center lg:overflow-hidden">
        <div className="projects-track flex flex-col gap-5 px-6 lg:w-max lg:flex-row lg:items-stretch lg:gap-0 lg:px-0">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className="relative shrink-0 overflow-hidden rounded-xl border border-white/10 bg-surface p-6 transition sm:p-8 lg:mx-6 lg:flex lg:h-[76vh] lg:w-max lg:items-center lg:gap-12 lg:p-12 lg:pr-20"
            >
              <span
                className="ghost-word pointer-events-none absolute -top-4 left-4 whitespace-nowrap text-7xl font-bold leading-none lg:text-8xl"
                aria-hidden="true"
              >
                {panelDress[project.slug]?.word ?? project.name.toUpperCase()}
              </span>
              <div
                className={`pointer-events-none absolute -right-24 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rounded-full blur-[120px] ${panelDress[project.slug]?.glow ?? "bg-accent/10"}`}
                aria-hidden="true"
              />
              <div className="relative lg:w-[30rem] lg:shrink-0">
                <p className="font-mono text-6xl font-bold text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {project.platform}
                </p>
                <h3 className="mt-3 text-3xl font-bold text-white lg:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-body">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-white/10 px-3 py-1 font-mono text-xs text-body"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted">
                  Screenshots via Google Play ·{" "}
                  {(stores[project.slug] ?? []).map((store, si) => (
                    <span key={store.url}>
                      {si > 0 && " · "}
                      <a
                        href={store.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-accent transition hover:text-accent-soft"
                      >
                        {store.label} ↗
                      </a>
                    </span>
                  ))}
                </p>
              </div>
              <div className="relative mt-8 flex snap-x items-start gap-6 overflow-x-auto py-2 lg:mt-0 lg:shrink-0 lg:overflow-visible lg:py-0">
                {(screenshots[project.slug] ?? []).map((shot) => (
                  <figure
                    key={shot.src}
                    className="w-60 shrink-0 snap-start transition duration-500 hover:scale-[1.03] sm:w-64 lg:w-64"
                  >
                    <PhoneFrame src={shot.src} alt={shot.alt} />
                    <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                      {shot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 hidden max-w-6xl px-6 lg:block">
        <div className="h-[2px] w-full bg-white/10">
          <div className="projects-progress h-full w-full origin-left bg-accent" />
        </div>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-muted">
          Scroll to travel →
        </p>
      </div>
    </section>
  );
}
