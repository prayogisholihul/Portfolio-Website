"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "@/components/SmoothScroll";

const links = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  return (
    <motion.header
      className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button
        onClick={() => scrollToSection("#top")}
        className="flex cursor-pointer items-center gap-3"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-bold text-ink">
          P
        </span>
        <span className="hidden text-sm font-semibold text-white sm:inline">
          Prayogi Sholihul
        </span>
      </button>
      <nav>
        <ul className="flex items-center gap-7 text-sm">
          {links.map((link) => (
            <li
              key={link.href}
              className="hidden transition hover:text-white md:inline"
            >
              <button
                onClick={() => scrollToSection(link.href)}
                className="cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection("#contact")}
              className="cursor-pointer font-semibold text-accent transition hover:text-accent-soft"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
