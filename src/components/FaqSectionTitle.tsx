type FaqSectionTitleProps = {
  as?: "h2" | "h3" | "h4";
  className?: string;
};

const titleClassName =
  "text-center align-middle font-['Darker_Grotesque'] text-[40px] font-bold leading-[110%] tracking-[0] [leading-trim:none] sm:text-[52px] lg:text-[64px]";

/** Shared FAQ block heading: “Frequently Asked” / “Questions” colors and typography. */
export function FaqSectionTitle({
  as: HeadingTag = "h4",
  className = "",
}: FaqSectionTitleProps) {
  return (
    <HeadingTag
      className={[titleClassName, className].filter(Boolean).join(" ")}
    >
      <span className="text-[#0B1F2D]">Frequently Asked </span>
      <span className="text-[#2899E6]">Questions</span>
    </HeadingTag>
  );
}
