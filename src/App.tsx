import React, { useEffect } from "react";
import { Header } from "./Header";

type TagProps = { label: string };
const Tag: React.FC<TagProps> = ({ label }) => <span className="chip">{label}</span>;

type ItemProps = {
  title: string;
  sub?: string;
  bullets?: readonly string[];
  tags?: readonly string[];
};
const Item: React.FC<ItemProps> = ({ title, sub, bullets, tags }) => (
  <div className="card">
    <h3 className="title">{title}</h3>
    {sub && <p className="subtitle">{sub}</p>}
    {bullets?.length && (
      <ul className="bullets">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )}
    {tags?.length && (
      <div className="tags">
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
  <section className="section animate-fade-up" style={{ animationDelay: `${delay}ms` }} aria-label={title}>
    <header className="section-header">
      <h2>{title}</h2>
      {right && <div className="section-right">{right}</div>}
    </header>
    <div className="divider" />
    {children}
  </section>
);

export default function App() {
  // Initialise theme from localStorage (or system preference)
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  return (
    <main className="container">
      <Header />

      <Section title="Technologies & Languages" right={<span className="chip">7+ yr</span>} delay={60}>
        <div className="grid">
          <Item title="Languages" tags={["JavaScript", "TypeScript", "Go", "Lua", "GraphQL"]} />
          <Item title="Frontend" tags={["React", "Vue", "React Native", "Next.js", "Remix", "Svelte", "SolidJS", "Tailwind CSS"]} />
          <Item title="Backend" tags={["Node.js", "REST", "GraphQL"]} />
          <Item title="Data & Infra" tags={["PostgreSQL", "MongoDB", "AWS", "GCP", "Docker", "Ollama"]} />
          <Item title="Testing" tags={["Jest", "Vitest", "React Testing Library", "Storybook"]} />
          <Item title="Practices" tags={["Microservices", "CI/CD", "TDD", "SOLID", "Technical Leadership", "Agile (CSM)"]} />
        </div>
      </Section>

      <Section title="Work Experience" delay={140}>
        <div className="stack">
          <Item
            title="Technical Lead — Gadgeon (May 2025 – Present)"
            sub="SaaS Products, Kochi, India"
            bullets={["Adopted React 19 across the team; re‑architected 100k + lines from Angular 13.", "Introduced AI‑assisted coding (Claude Code, Windsurf) → 10 % productivity boost."]}
          />
          <Item
            title="Technical Lead — Diagnal Technologies (2022 – 2025)"
            sub="Digital Media & Streaming, London, UK"
            bullets={["Modernised legacy React → functional patterns → 30 % faster loads.", "Mentored developers; error rate ↓ 35 %, output ↑ 35 %."]}
          />
        </div>
      </Section>

      <Section title="Projects" delay={220}>
        <div className="grid">
          <Item title="Technical Blogging" sub="My Silent Thoughts" bullets={["“Why Your Frontend Needs a Safety Net”, “Network‑Aware Development”."]} />
          <Item title="Telegram File Downloader" sub="Node.js · Bulk downloads" bullets={["CLI utility for large‑batch downloads."]} />
        </div>
      </Section>

      <Section title="Education & Certifications" delay={300}>
        <div className="grid">
          <Item title="B.Tech — Computer Science" sub="University of Cochin (2014 – 2018)" />
          <Item title="Certifications" bullets={["Certified Scrum Master (CSM) – Scrum Alliance", "Certified Secure Web Application Engineer (C)SWAE – Mile2"]} />
        </div>
      </Section>

      <Section title="Interests" delay={380}>
        <div className="tags">
          {["Manhwa", "Manga", "Contemporary art"].map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </Section>

      <footer className="footer">© {new Date().getFullYear()} Sijo Sam — Open to opportunities in Germany & beyond.</footer>
    </main>
  );
}
