import React from "react";

type SectionProps = {
  title: string;
  right?: React.ReactNode;
  children?: React.ReactNode;
};

export function Section({ title, right, children }: SectionProps) {
  return (
    <section className="section">
      <div className="section-header">
        <span className="badge">●</span>
        <h2>{title}</h2>
        <div style={{ marginLeft: "auto" }}>{right}</div>
      </div>
      <div className="divider" />
      {children}
    </section>
  );
}
