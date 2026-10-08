"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import skillsJson from "@/data/skills.json";
import certificationsJson from "@/data/certifications.json";

type SkillGroup = { category: string; items: string[] };
type Cert = { name: string; issuer: string };

const skills = skillsJson as SkillGroup[];
const certifications = certificationsJson as Cert[];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20">
      <SectionHeading index="04" eyebrow="Capabilities" title="What I work with." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            className="rounded-xl border border-white/10 bg-surface p-7 transition hover:border-white/20"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: (i % 3) * 0.08,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
              {group.category}
            </p>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-body transition hover:text-white"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
        <motion.div
          className="rounded-xl bg-accent p-7 text-ink transition hover:brightness-105"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: (skills.length % 3) * 0.08,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em]">
            Certifications
          </p>
          <ul className="mt-5 space-y-2.5">
            {certifications.map((cert) => (
              <li key={cert.name} className="text-sm font-medium">
                {cert.name} <span className="opacity-70">· {cert.issuer}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
