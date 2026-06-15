import MotionReveal from "./MotionReveal";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const textColor = light ? "text-white" : "text-brand-black";
  const subtitleColor = light ? "text-white/70" : "text-brand-gray-text";
  const eyebrowColor = light ? "text-brand-gold-light" : "text-brand-gold";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <MotionReveal delay={0.05}>
          <div className="flex items-center gap-3">
            {align === "center" && <div className="gold-line" />}
            <span
              className={`font-sans text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}
            >
              {eyebrow}
            </span>
            <div className="gold-line" />
            {align !== "center" && <div className="gold-line hidden" />}
          </div>
        </MotionReveal>
      )}

      <MotionReveal delay={0.1}>
        <h2
          className={`font-serif font-light leading-tight tracking-tight text-balance
            text-4xl md:text-5xl lg:text-[3.25rem] ${textColor}`}
        >
          {title}
        </h2>
      </MotionReveal>

      {subtitle && (
        <MotionReveal delay={0.15}>
          <p className={`font-sans text-base md:text-lg leading-relaxed max-w-2xl ${subtitleColor}`}>
            {subtitle}
          </p>
        </MotionReveal>
      )}
    </div>
  );
}
