export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="border-b border-border bg-white">
      <div className="mx-auto max-w-4xl px-6 py-14 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-dark md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
