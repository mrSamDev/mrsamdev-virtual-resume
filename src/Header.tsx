import React, { useEffect, useState } from "react";

export function Header() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Sync HTML class & localStorage whenever the mode changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="header">
      <div className="header-inner">
        {/* ── Top meta row ── */}
        <div className="header-meta">
          <span className="chip">📍 Kerala, India</span>
          <span className="chip">✈️ Open to relocate: Germany</span>
        </div>

        {/* ── Main content ── */}
        <div className="header-main">
          {/* Title block */}
          <div className="title-block animate-fade-up" style={{ animationDelay: "0ms" }}>
            <div className="role">
              <span className="role-marker">●</span>
              <span className="role-text">Full‑Stack Engineer</span>
            </div>

            <h1 className="name">Sijo Sam</h1>

            <p className="summary">
              I build fast, scalable web apps with modern JavaScript and thoughtful architecture. Proven impact: boosted search rankings by 50 % and reduced development time by 30 %.
            </p>

            {/* Skill snapshot */}
            <div className="skills">
              {["React", "TypeScript", "Node.js", "SEO"].map((k) => (
                <span key={k} className="chip">
                  {k}
                </span>
              ))}
              <span className="chip subtle">7+ yr</span>
            </div>
          </div>

          {/* Contact actions */}
          <nav className="header-contact animate-fade-up" style={{ animationDelay: "100ms" }} aria-label="Contact links">
            <a className="soft-link" href="mailto:sijosam1905@gmail.com">
              📧 Email
            </a>
            <a className="soft-link" href="https://www.sijosam.com/" target="_blank" rel="noreferrer">
              🌐 Website
            </a>
            <a className="soft-link" href="https://www.linkedin.com/in/sijo-sam/" target="_blank" rel="noreferrer">
              in LinkedIn
            </a>
            <a className="soft-link" href="https://github.com/mrSamDev" target="_blank" rel="noreferrer">
              ⌂ GitHub
            </a>

            {/* Theme toggle */}
            <button className="theme-toggle" onClick={() => setIsDark((p) => !p)} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
              {isDark ? "🌙" : "☀️"}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
