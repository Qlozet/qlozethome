type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  eyebrowPlacement?: "before" | "after";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  eyebrowPlacement = "before",
}: SectionHeadingProps) {
  const baseText = theme === "dark" ? "text-white" : "text-zinc-900";
  const metaText = theme === "dark" ? "text-zinc-400" : "text-zinc-500";
  const subText = theme === "dark" ? "text-zinc-300" : "text-zinc-600";

  const eyebrowElement = eyebrow ? (
    <span className={`text-xs uppercase tracking-[0.35em] ${metaText}`}>
      {eyebrow}
    </span>
  ) : null;

  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "text-left"
      }`}
    >
      {eyebrowPlacement === "before" ? eyebrowElement : null}
      <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl ${baseText}`}>
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-base sm:text-lg ${subText}`}>{description}</p>
      ) : null}
      {eyebrowPlacement === "after" ? eyebrowElement : null}
    </div>
  );
}


