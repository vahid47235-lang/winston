import { Section } from "../ui/Section";

export function LegalPage({
  title,
  updated,
  paragraphs,
}: {
  title: string;
  updated: string;
  paragraphs: string[];
}) {
  return (
    <Section className="pt-32">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl text-paper md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-paper/40">{updated}</p>
        <div className="mt-10 space-y-5 leading-relaxed text-paper/70">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
