"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/SectionHeading";
import experienceJson from "@/data/experience.json";

gsap.registerPlugin(ScrollTrigger);

type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  client: string | null;
  highlights: string[];
};

const jobs = experienceJson as Job[];

export default function Journey() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".journey-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".journey",
            start: "top 60%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".journey-stop").forEach((stop) => {
        ScrollTrigger.create({
          trigger: stop,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => stop.classList.add("active"),
          onLeave: () => stop.classList.remove("active"),
          onEnterBack: () => stop.classList.add("active"),
          onLeaveBack: () => stop.classList.remove("active"),
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={root}
      className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20"
    >
      <SectionHeading index="02" eyebrow="Career" title="A short journey." />
      <ol className="journey relative ml-1 border-l border-white/10">
        <span
          className="journey-progress absolute -left-[1px] top-0 h-full w-[2px] origin-top bg-accent"
          aria-hidden="true"
        />
        {jobs.map((job) => (
          <li key={`${job.company}-${job.period}`} className="journey-stop relative pb-10 pl-8 last:pb-0">
            <span
              className="journey-dot absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full"
              aria-hidden="true"
            />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {job.period}
            </p>
            <h3 className="mt-2 text-lg font-bold text-white">{job.role}</h3>
            <p className="mt-1 text-sm text-body">
              {job.company} · {job.location}
            </p>
            {job.client && (
              <p className="mt-1 text-sm text-muted">Client: {job.client}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
