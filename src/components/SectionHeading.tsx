interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => (
  <div className={align === "center" ? "text-center" : ""}>
    <span className="text-accent font-mono text-sm font-medium tracking-wider uppercase">
      {label}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed text-lg">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
