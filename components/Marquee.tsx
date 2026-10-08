const items = [
  "Kotlin",
  "Jetpack Compose",
  "Flutter",
  "Dart",
  "MVVM",
  "Clean Architecture",
  "Riverpod",
  "Melos",
  "Modularization",
  "Room",
];

export default function Marquee() {
  return (
    <div
      className="marquee overflow-hidden border-y border-white/10 bg-white/[0.015] py-5"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center gap-12 pr-12">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 whitespace-nowrap font-mono text-base uppercase tracking-[0.25em] text-muted"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
