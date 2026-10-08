"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile.json";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-lg font-bold text-white">
            Prayogi Sholihul Insan
          </p>
          <p className="mt-1 text-sm text-muted">
            {profile.title} · {profile.location}
          </p>
          <motion.a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-ink transition hover:brightness-110"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {profile.email}
          </motion.a>
        </motion.div>
        <motion.ul
          className="flex gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          {socials.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                className="font-mono text-xs uppercase tracking-[0.2em] text-body transition hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
