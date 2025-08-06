// src/Splash.tsx
import { useEffect, useState } from "react";

export const Splash = () => {
  const [visible, setVisible] = useState(true);

  // Auto‑hide after 800 ms (adjust as you like)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1000000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="splash">
      {/* Replace with your own SVG/logo if you have one */}
      <div className="splash-content">
        <h1 className="splash-title">Sijo Sam</h1>
        <p className="splash-tagline">Full‑Stack Engineer</p>
      </div>
    </div>
  );
};
