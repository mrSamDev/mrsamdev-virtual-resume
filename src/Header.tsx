export function Header() {
  return (
    <header className="relative overflow-hidden py-12">
      {/* Accent background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" />

      {/* Top meta row */}
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-[#b9e0e0]">
        <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5" style={{ borderColor: "color-mix(in oklab, var(--color-borderPrimary), #fff 30%)" }}>
          <span>📍</span> Kerala, India
        </span>
        <span className="opacity-60">•</span>
        <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5" style={{ borderColor: "color-mix(in oklab, var(--color-borderPrimary), #fff 30%)" }}>
          ✈️ Open to relocate: Germany
        </span>
      </div>

      {/* Main grid */}
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        {/* Title block */}
        <div className="animate-[in-up_0.6s_ease_forwards]" style={{ animationDelay: "0ms" }}>
          <div className="inline-flex items-center gap-2">
            <span
              className="h-6 w-1 rounded-full"
              style={{
                background: "linear-gradient(180deg, var(--color-borderPrimary), transparent)",
              }}
            />
            <span className="text-[13px] tracking-[0.18em] text-[#cdeaea] uppercase">Full‑Stack Engineer</span>
          </div>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">Sijo Sam</h1>

          <p className="mt-3 max-w-2xl text-[#cce7e7]">
            I build fast, scalable web apps with modern JavaScript and thoughtful architecture. Proven impact: boosted search rankings by 50% and reduced development time by 30%.
          </p>

          {/* Skill snapshot */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {["React", "TypeScript", "Node.js", "SEO"].map((k) => (
              <span
                key={k}
                className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs"
                style={{
                  borderColor: "color-mix(in oklab, var(--color-borderPrimary), #fff 25%)",
                  background: "color-mix(in oklab, var(--color-muted), #002f2f 40%)",
                }}
              >
                {k}
              </span>
            ))}
            <span className="ml-1 text-xs text-[#9fdede] opacity-80">7+ years</span>
          </div>
        </div>

        {/* Contact actions */}
        <nav className="animate-[in-up_0.6s_ease_forwards] justify-self-start md:justify-self-end" style={{ animationDelay: "100ms" }} aria-label="Contact links">
          <div className="flex flex-wrap gap-2">
            <a className="soft-link" href="mailto:sijosam1905@gmail.com">
              <span>📧</span> <span className="ml-1">Email</span>
            </a>
            <a className="soft-link" href="https://www.sijosam.com/" target="_blank" rel="noreferrer">
              <span>🌐</span> <span className="ml-1">Website</span>
            </a>
            <a className="soft-link" href="https://www.linkedin.com/in/sijo-sam/" target="_blank" rel="noreferrer">
              <span className="text-[15px]">in</span>
              <span className="ml-1">LinkedIn</span>
            </a>
            <a className="soft-link" href="https://github.com/mrSamDev" target="_blank" rel="noreferrer">
              <span>⌂</span> <span className="ml-1">GitHub</span>
            </a>
          </div>
          <p className="mt-2 text-sm text-[#cfe9e9]/80">Currently exploring roles in Germany and EU.</p>
        </nav>
      </div>
    </header>
  );
}
