import { motion } from "framer-motion";

const experiences = [
  {
    company: "ASML",
    location: "Veldhoven, NL",
    role: "Software Engineer Intern",
    period: "Jan 2026 – Present",
    bullets: [
      "Developed full-stack automation platform using Spring Boot 3, React, and MySQL to replace manual Excel-based upgrade workflows, reducing generation time by 35%.",
      "Implemented constraint programming (CP-SAT solver) and backtracking algorithms with domain-specific heuristics for industrial upgrade dependency resolution.",
    ],
  },
  {
    company: "Deloitte",
    location: "Beijing, CN",
    role: "Data Engineer",
    period: "Oct 2020 – Dec 2021",
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
    bullets: [
      "Automated data processing workflows using Python with optimized SQL queries, reducing analysis time by 30% across 5 consulting projects.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="px-6 py-24 sm:px-12 lg:px-24">
    <motion.h2
      className="font-mono text-xs uppercase tracking-[0.3em] text-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Experience
    </motion.h2>

    <div className="relative mt-10 border-l border-border pl-8">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.company}
          className="relative mb-12 last:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
        >
          {/* Dot */}
          <div className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />

          <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
          <h3 className="mt-1 text-lg font-semibold text-foreground">
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
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
