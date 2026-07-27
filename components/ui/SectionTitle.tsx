interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      {subtitle && (
        <p className="mb-3 uppercase tracking-[0.3em] text-sm font-semibold text-[#B08D57]">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}