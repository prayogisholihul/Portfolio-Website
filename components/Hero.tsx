"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import profile from "@/data/profile.json";
import { heroScreens } from "@/data/screenshots";
import { scrollToSection } from "@/components/SmoothScroll";
import PhoneFrame from "@/components/PhoneFrame";

gsap.registerPlugin(ScrollTrigger);

const titleLines = ["Prayogi", "Sholihul", "Insan"];

const builtThings = [
  "secure financial apps.",
  "native Android features.",
  "Flutter modules.",
  "Compose interfaces.",
];

function useTypewriter(active: boolean) {
  const [wordIndex, setWordIndex] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (!active) return;
    const word = builtThings[wordIndex % builtThings.length];
    let timer: number;
    if (chars < word.length) {
      timer = window.setTimeout(() => setChars((c) => c + 1), 45);
    } else {
      timer = window.setTimeout(() => {
        setChars(0);
        setWordIndex((i) => (i + 1) % builtThings.length);
      }, 1900);
    }
    return () => window.clearTimeout(timer);
  }, [chars, wordIndex, active]);

  return builtThings[wordIndex % builtThings.length].slice(0, chars);
}

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const typed = useTypewriter(!reduced);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-title", {
        yPercent: 22,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-ghost-a", {
        xPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-ghost-b", {
        xPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-phone-a", {
        y: -110,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-phone-b", {
        y: -210,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-intro", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative mx-auto grid max-w-6xl gap-12 overflow-visible px-6 pb-24 pt-16 sm:pt-24 lg:min-h-[92vh] lg:grid-cols-[1.1fr_0.9fr_1fr] lg:items-center lg:gap-8"
    >
      <span
        className="hero-ghost-a ghost-word pointer-events-none absolute top-10 left-0 whitespace-nowrap text-[20vw] font-bold leading-none lg:text-[13rem]"
        aria-hidden="true"
      >
        ANDROID
      </span>
      <span
        className="hero-ghost-b ghost-word pointer-events-none absolute bottom-6 right-0 whitespace-nowrap text-[20vw] font-bold leading-none lg:text-[13rem]"
        aria-hidden="true"
      >
        FLUTTER
      </span>

      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <h1 className="hero-title text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-7xl">
          {titleLines.map((line, i) => (
            <span
              key={line}
              className="-mb-[0.08em] block overflow-hidden pb-[0.08em]"
            >
              <motion.span
                className="block"
                initial={reduced ? { y: "0%" } : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.9,
                  delay: 0.1 + i * 0.12,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                {line}
                {i === titleLines.length - 1 && (
                  <span className="text-accent">.</span>
                )}
              </motion.span>
            </span>
          ))}
        </h1>
        <div className="mt-6 h-1 w-12 bg-accent" aria-hidden="true" />
        <ul className="mt-10 flex gap-6">
          {socials.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="font-mono text-xs uppercase tracking-[0.2em] text-body transition hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="relative mx-auto h-[26rem] w-full max-w-xs sm:h-[30rem]"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]"
          aria-hidden="true"
        />
        {heroScreens[0] && (
          <div className="hero-phone-a absolute left-0 top-8 w-40 sm:w-48">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="-rotate-6">
                <PhoneFrame
                  src={heroScreens[0].src}
                  alt={heroScreens[0].alt}
                  priority
                />
              </div>
            </motion.div>
          </div>
        )}
        {heroScreens[1] && (
          <div className="hero-phone-b absolute right-0 top-0 w-40 sm:w-48">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="rotate-6">
                <PhoneFrame
                  src={heroScreens[1].src}
                  alt={heroScreens[1].alt}
                  priority
                />
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>

      <div className="hero-intro relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
        <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-body">
          <span className="h-2 w-2 rounded-full bg-accent motion-safe:animate-pulse" />
          Open to Android & Flutter roles
        </span>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
          — Introduction
        </p>
        <p className="mt-4 text-2xl font-bold leading-snug text-white">
          {profile.title}, based in{" "}
          {profile.location.replace(", Indonesia", "")}.
        </p>
        <p className="mt-4 min-h-[1.75em] text-2xl font-bold leading-snug">
          <span className="text-white">I build </span>
          <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
            {reduced ? builtThings[0] : typed}
          </span>
          {!reduced && (
            <span
              className="ml-1 inline-block h-[1em] w-[2px] bg-accent align-[-0.15em] motion-safe:animate-pulse"
              aria-hidden="true"
            />
          )}
        </p>
        <p className="mt-5 text-sm leading-relaxed text-body">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <motion.button
            onClick={() => scrollToSection("#projects")}
            className="cursor-pointer rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink transition hover:brightness-110"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View projects →
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("#about")}
            className="cursor-pointer px-2 py-3 text-sm text-body transition hover:text-white"
            whileHover={{ x: 4 }}
          >
            My story →
          </motion.button>
        </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-muted transition hover:text-white lg:flex"
        aria-label="Scroll to about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span aria-hidden="true">↓</span>
      </motion.button>
    </section>
  );
}
