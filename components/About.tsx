"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import profile from "@/data/profile.json";
import experience from "@/data/experience.json";

const current = experience[0];

const card =
  "rounded-xl border border-white/10 bg-surface p-8 transition hover:border-white/20";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Four years of production Android & Flutter."
      />
      <div className="grid gap-5 md:grid-cols-3">
        <motion.div
          className={`${card} md:col-span-2`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="leading-relaxed text-body">{profile.summary}</p>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-8 inline-block font-semibold text-accent transition hover:text-accent-soft"
          >
            {profile.email}{" "}
            <span
              aria-hidden="true"
              className="inline-block transition group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </motion.div>

        <motion.div
          className="rounded-xl bg-accent p-8 text-ink transition hover:brightness-105"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em]">
            Currently
          </p>
          <p className="mt-4 text-xl font-bold">{current.role}</p>
          <p className="mt-1 font-medium">{current.company}</p>
          {current.client && (
            <p className="mt-4 text-sm">Client: {current.client}</p>
          )}
          <p className="mt-2 font-mono text-sm">{current.period}</p>
        </motion.div>

        <motion.div
          className={`${card} md:col-span-2`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
            Focus areas
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {profile.focus.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className={card}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
            Languages
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {profile.languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-center justify-between text-body"
              >
                <span>{lang.name}</span>
                <span className="text-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className={`${card} md:col-span-2`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
            Education
          </p>
          {profile.education.map((item) => (
            <div key={item.school} className="mt-5">
              <p className="text-lg font-bold text-white">{item.school}</p>
              <p className="text-sm text-body">{item.degree}</p>
              <p className="mt-1 text-sm text-muted">
                {item.period} · {item.detail}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={card}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
            Activities
          </p>
          {profile.activities.map((item) => (
            <div key={item.title} className="mt-5">
              <p className="font-bold text-white">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.period}</p>
              <p className="mt-2 text-sm text-body">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
