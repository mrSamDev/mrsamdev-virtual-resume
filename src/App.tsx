import DownloadResume from "./components/DownloadResume";
import RotatingLocation from "./components/RotatingLocation";

const Resume = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 bg-gray-50 min-h-screen">
      {/* Header - Absolute simplicity */}
      <header className="text-center mb-20 pb-8 border-b border-gray-200">
        <h1 className="text-2xl font-semibold mb-2 text-gray-950">Sijo Sam</h1>
        <p className="text-lg text-gray-800 mb-6 font-normal">Full-Stack Engineer</p>

        {/* Contact - Single line, minimal */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-6">
          <a href="mailto:sijosam1905@gmail.com" className="hover:text-accent transition-colors">
            sijosam1905@gmail.com
          </a>
          <a href="https://sijosam.com" className="hover:text-accent transition-colors">
            sijosam.com
          </a>
          <a href="https://linkedin.com/in/sijo-sam" className="hover:text-accent transition-colors">
            linkedin.com/in/sijo-sam
          </a>
        </div>

        <DownloadResume />
      </header>

      {/* Summary - One paragraph, essential only */}
      <section className="mb-16">
        <p className="text-base text-gray-800 leading-relaxed text-balance">
          7+ years building scalable web applications with React, TypeScript, and Node.js. Led teams through major architecture migrations, improved performance by 50%, and reduced development cycles
          by 30%. Currently seeking opportunities in Germany.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6 pb-2 border-b border-gray-200">Experience</h2>

        <div className="space-y-8">
          <div>
            <div className="mb-2">
              <h3 className="text-lg font-medium text-gray-950">Technical Lead</h3>
              <p className="text-sm text-gray-500">Gadgeon Smart Systems • May 2025 – Present</p>
            </div>
            <p className="text-sm text-gray-800 leading-loose">
              Leading React 19 migration across SaaS products. Implemented AI-assisted development workflows increasing team productivity 10%. Mentoring 8+ developers.
            </p>
          </div>

          <div>
            <div className="mb-2">
              <h3 className="text-lg font-medium text-gray-950">Technical Lead</h3>
              <p className="text-sm text-gray-500">Diagnal Technologies • 2022 – 2025</p>
            </div>
            <p className="text-sm text-gray-800 leading-loose">
              Modernized React architecture reducing load times 30%. Led 12-member team across time zones. Reduced error rates 35% through comprehensive testing.
            </p>
          </div>

          <div>
            <div className="mb-2">
              <h3 className="text-lg font-medium text-gray-950">Senior Developer</h3>
              <p className="text-sm text-gray-500">Various Companies • 2018 – 2022</p>
            </div>
            <p className="text-sm text-gray-800 leading-loose">Built applications serving 500k+ users. Improved SEO rankings 50%. Established team coding standards and mentored junior developers.</p>
          </div>
        </div>
      </section>

      {/* Skills - Grid layout */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6 pb-2 border-b border-gray-200">Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-base font-medium text-gray-950 mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Next.js", "Vue", "React Native", "Tailwind"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-gray-950 mb-3">Backend & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "GraphQL", "PostgreSQL", "AWS", "Docker", "Git"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects - Essential only */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6 pb-2 border-b border-gray-200">Selected Work</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-base font-medium text-gray-950 mb-1">Enterprise SaaS Migration</h3>
            <p className="text-sm text-gray-800 leading-loose">Migrated 100k+ line Angular application to React 19. Improved performance metrics and established modern development practices.</p>
          </div>

          <div>
            <h3 className="text-base font-medium text-gray-950 mb-1">Streaming Platform Optimization</h3>
            <p className="text-sm text-gray-800 leading-loose">Optimized video streaming for 1M+ users. Reduced load times 30% through architecture improvements and caching strategies.</p>
          </div>
        </div>
      </section>

      {/* Education - Minimal */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6 pb-2 border-b border-gray-200">Education</h2>

        <div>
          <h3 className="text-base font-medium text-gray-950">B.Tech Computer Science</h3>
          <p className="text-sm text-gray-500">University of Cochin • 2014 – 2018</p>
        </div>
      </section>

      {/* Footer - Location */}
      <footer className="text-center pt-8 border-t border-gray-200">
        <RotatingLocation />
      </footer>
    </div>
  );
};

export default Resume;
