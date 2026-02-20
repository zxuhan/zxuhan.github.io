import { motion } from "framer-motion";
import asmlLogo from "@/assets/asml_logo.jpeg";
import deloitteLogo from "@/assets/deloitte_logo.jpeg";
import pwcLogo from "@/assets/pwc_logo.jpeg";

const experiences = [
  {
    company: "ASML",
    location: "Veldhoven, NL",
    role: "Software Engineer Intern",
    period: "Jan 2026 – Present",
    logo: asmlLogo,
    bullets: [
      "Developed full-stack automation platform using Spring Boot 3, React, and MySQL to replace manual Excel-based upgrade workflows, reducing generation time by 35%.",
      "Implemented constraint programming (CP-SAT solver) and backtracking algorithms with domain-specific heuristics for industrial upgrade dependency resolution.",
    ],
  },
  {
    company: "Deloitte",
    location: "Beijing, CN",
    role: "Data Engineer",
    period: "Oct 2020 – Oct 2021",
    logo: deloitteLogo,
    bullets: [
      "Built ETL pipelines using Python and Java to process financial datasets into PostgreSQL, reducing manual operation time by 26%.",
      "Collaborated with IT audit teams to assess database integrity, writing SQL queries and data validation frameworks ensuring 100% accuracy.",
    ],
  },
  {
    company: "PWC",
    location: "Beijing, CN",
    role: "Data Analytics Consulting Intern",
    period: "Jul 2019 – Oct 2019",
    logo: pwcLogo,
    bullets: [
      "Automated data processing workflows using Python with optimized SQL queries, reducing analysis time by 30% across 5 consulting projects.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="px-6 py-24 sm:px-12 lg:px-24">
    <motion.h2
      className="font-mono text-xl uppercase tracking-[0.3em] text-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Experience
    </motion.h2>

    {/* Alternating timeline */}
    <div className="relative mt-14">
      {/* Center line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-border lg:left-1/2" />

      {experiences.map((exp, i) => {
        const isLeft = i % 2 === 0;
        return (
          <motion.div
            key={exp.company}
            className="relative mb-16 flex flex-col last:mb-0 lg:flex-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {/* Center dot + company logo */}
            <div className="absolute left-6 -translate-x-1/2 lg:left-1/2 z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-card shadow-md overflow-hidden">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Left side - content for left companies, period for right companies */}
            <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-3rem)] lg:mr-auto ${isLeft ? "" : "hidden lg:flex lg:pt-5 lg:justify-end"}`}>
              {isLeft ? (
                <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}{" "}
                    <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="font-mono text-sm text-muted-foreground lg:pr-8">{exp.period}</p>
              )}
            </div>

            {/* Right side - period for left companies, content for right companies */}
            <div className={`lg:w-[calc(50%-3rem)] lg:ml-auto ${isLeft ? "hidden lg:flex lg:pt-5 lg:pl-8" : "ml-16 lg:ml-0"}`}>
              {isLeft ? (
                <p className="font-mono text-sm text-muted-foreground">{exp.period}</p>
              ) : (
                <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}{" "}
                    <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Mobile: period shown below content */}
            <div className="ml-16 mt-2 lg:hidden">
              <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default ExperienceSection;
