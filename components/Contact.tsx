"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import profile from "@/data/profile.json";

const rows = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/prayogi-sholihul",
    href: profile.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/prayogisholihul",
    href: profile.github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20">
      <SectionHeading
        index="05"
        eyebrow="Contact"
        title="Any type of query & discussion."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <motion.div
          className="rounded-xl border border-white/10 bg-surface p-8 transition hover:border-white/20 sm:p-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-2xl font-bold leading-snug text-white">
            Let&apos;s build the next release together.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-body">
            {profile.availability}.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Email is the fastest way to reach me.
          </p>
          <motion.a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block font-semibold text-accent transition hover:text-accent-soft"
            whileHover={{ x: 4 }}
          >
            {profile.email} <span aria-hidden="true">→</span>
          </motion.a>
        </motion.div>
        <motion.ul
          className="rounded-xl border border-white/10 bg-surface"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          {rows.map((row) => (
            <li
              key={row.label}
              className="border-b border-white/10 last:border-b-0"
            >
              <motion.a
                href={row.href}
                target={row.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  row.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                className="group flex items-center justify-between gap-4 p-6 transition hover:bg-white/[0.03] sm:px-8"
                whileHover={{ x: 4 }}
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
                    {row.label}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-white">
                    {row.value}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-accent transition group-hover:translate-x-1"
                >
                  →
                </span>
              </motion.a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
