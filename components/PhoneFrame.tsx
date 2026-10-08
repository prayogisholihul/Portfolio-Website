import Image from "next/image";

export default function PhoneFrame({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[9/19] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black p-1.5 shadow-2xl shadow-black/70 ${className}`}
    >
      <div
        className="absolute left-1/2 top-3.5 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#101413] ring-1 ring-white/20"
        aria-hidden="true"
      />
      <Image
        src={src}
        alt={alt}
        width={360}
        height={640}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="h-full w-full rounded-[1.3rem] object-cover"
      />
    </div>
  );
}
