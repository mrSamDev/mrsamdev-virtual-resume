import React from "react";
import { Header } from "./Header";

type TagProps = { label: string };
const Tag: React.FC<TagProps> = ({ label }) => <span className="chip">{label}</span>;

type ItemProps = {
  title: string;
  sub?: string;
  bullets?: string[];
  tags?: string[];
};
const Item: React.FC<ItemProps> = ({ title, sub, bullets, tags }) => (
  <div className="card">
    <div className="text-[#def7f7] font-semibold">{title}</div>
    {sub && <div className="mt-1 text-sm text-[#c5eaea]">{sub}</div>}
    {!!bullets?.length && (
      <ul className="mt-2 list-disc pl-5 text-[#d6f1f1]">
        {bullets.map((b, i) => (
          <li key={i} className="my-1">
            {b}
          </li>
        ))}
      </ul>
    )}
    {!!tags?.length && (
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    )}
  </div>
);

type SectionProps = {
  title: string;
  right?: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
};
const Section: React.FC<SectionProps> = ({ title, right, children, delay = 0 }) => (
  <section className="section" style={{ animationDelay: `${delay}ms` }} aria-label={title}>
    <div className="mb-2 flex items-center gap-2 font-bold text-[#b9e0e0]">
      <span className="chip">●</span>
      <h2 className="text-lg tracking-wide">{title}</h2>
      <div className="ml-auto">{right}</div>
    </div>
    <div className="divider" />
    {children}
  </section>
);

export default function App() {
  return (
    <main className="min-h-dvh px-[calc(var(--spacing)*4)] md:px-[calc(var(--spacing)*8)]">
      <div className="mx-auto max-w-[1100px] gap-2">
        <Header />

        <Section title="Technologies & Languages" right={<span className="chip">7+ years</span>} delay={60}>
          <div className="grid gap-3 md:grid-cols-2">
            <Item title="Languages" tags={["JavaScript", "TypeScript", "Go", "Lua", "GraphQL"]} />
            <Item title="Frontend" tags={["React", "Vue", "React Native", "Next.js", "Remix", "Svelte", "SolidJS", "Tailwind CSS"]} />
            <Item title="Backend" tags={["Node.js", "REST", "GraphQL"]} />
            <Item title="Data & Infra" tags={["PostgreSQL", "MongoDB", "AWS", "GCP", "Docker", "Ollama"]} />
            <Item title="Testing" tags={["Jest", "Vitest", "React Testing Library", "Storybook"]} />
            <Item title="Practices" tags={["Microservices", "CI/CD", "TDD", "SOLID", "Technical Leadership", "Agile (CSM)"]} />
          </div>
        </Section>

        <Section title="Work Experience" delay={140}>
          <div className="space-y-3">
            <Item
              title="Technical Lead — Gadgeon (May 2025 – Present)"
              sub="SaaS Products team, Kochi, Kerala"
              bullets={[
                "Spearheaded adoption of React 19; led a team of developers.",
                "Migrated and re-architected 100k+ lines from Angular 13 to React 19.",
                "Drove code reviews and knowledge sharing to uplift code quality.",
                "Championed AI tools (Claude Code, Windsurf), boosting productivity by 10%.",
              ]}
            />
            <Item
              title="Technical Lead — Diagnal Technologies (2022 – 2025)"
              sub="Digital Media & Streaming, London, UK"
              bullets={[
                "Modernized legacy React to functional patterns: 30% faster loads, 25% overall perf.",
                "Led cross-timezone teams; fast-tracked to Front-End Technical Lead.",
                "Mentored via reviews and 1:1s, reducing code errors and lifting productivity by 35%.",
                "Raised search rankings by 50% via technical SEO, SSE migration, and content/meta optimization.",
              ]}
            />
            <Item
              title="Software Developer — HyperBlox (2020 – 2022)"
              sub="IDE Products team, Bangalore, India"
              bullets={[
                "Architected a web IDE for IoT and 5G, reducing app development time by 30%.",
                "Collaborated with the CTO on platform compilers and IDE integration.",
                "Project Owner and Scrum Master, driving agile processes.",
              ]}
            />
            <Item
              title="Software Developer — 7th Pillar Ventures (2018 – 2020)"
              sub="SaaS Products team, Kochi, India"
              bullets={[
                "Built scalable SaaS for healthcare, retail, and travel.",
                "Improved efficiency by 20% and cut costs via automation.",
                "Accelerated product delivery across multiple startup domains.",
              ]}
            />
          </div>
        </Section>

        <Section title="Projects" delay={220}>
          <div className="grid gap-3 md:grid-cols-2">
            <Item title="Technical Blogging" sub="My Silent Thoughts" bullets={["Popular: “Why Your Frontend Needs a Safety Net”, “Network-Aware Development”."]} />
            <Item title="Telegram File Downloader" sub="Node.js · Bulk downloads" bullets={["CLI utility to manage large batch downloads."]} />
          </div>
        </Section>

        <Section title="Education & Certifications" delay={300}>
          <div className="grid gap-3 md:grid-cols-2">
            <Item title="B.Tech — Computer Science" sub="University of Cochin, India (2014 – 2018)" />
            <Item title="Certifications" bullets={["Certified Scrum Master (CSM) — Scrum Alliance", "Certified Secure Web Application Engineer (C)SWAE — Mile2"]} />
          </div>
        </Section>

        <Section title="Interests" delay={380}>
          <div className="flex flex-wrap gap-2">
            {["Manhwa", "Manga", "Most notable works explored"].map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </Section>

        <footer className="px-0 py-5 text-center text-sm text-[#cfe9e9] opacity-85">© {new Date().getFullYear()} Sijo Sam — Open to opportunities in Germany and beyond.</footer>
      </div>
    </main>
  );
}
