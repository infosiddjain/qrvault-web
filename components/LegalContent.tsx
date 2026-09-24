export default function LegalContent({
  sections,
}: {
  sections: { title: string; body: string }[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <ol className="panel divide-y divide-line">
        {sections.map((section, i) => (
          <li key={section.title} className="flex gap-5 p-6 md:p-7">
            <span className="font-display text-lg text-gold">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h2 className="text-base font-semibold text-text">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-soft md:text-[15px]">
                {section.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
