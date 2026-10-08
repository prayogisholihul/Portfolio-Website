import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      className="relative mb-12"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <span
        className="ghost-word pointer-events-none absolute -top-14 right-0 text-8xl font-bold leading-none sm:text-9xl"
        aria-hidden="true"
      >
        {index}
      </span>
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
        {index} — {eyebrow}
      </p>
      <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
