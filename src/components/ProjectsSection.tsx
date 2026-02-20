import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Agentic Website Builder",
    desc: "Full-stack AI platform to generate, preview, and deploy web apps with LLMs. Real-time streaming, RAG, multi-layer caching (Caffeine + Redis), cursor-based pagination.",
    tags: ["Spring Boot 3", "LangChain4j", "Redis", "PostgreSQL", "React"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    link: "#",
    github: "https://github.com/zxuhan/AI-code-platform",
  },
  {
    title: "High-Performance Like System",
    desc: "High-concurrency system with three-tier caching, HeavyKeeper algorithm for hot key detection, event-driven architecture with Apache Pulsar, atomic Redis operations via Lua scripting.",
    tags: ["Spring Boot 3", "Redis", "Apache Pulsar", "MySQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    link: "#",
    github: "https://github.com/zxuhan/like-app-backend",
  },
  {
    title: "Maastricht Bus Scheduling",
    desc: "Public transit route system using A* algorithm with 90% accuracy vs Google Maps. JavaFX GUI with MySQL database integration for GTFS transit data processing.",
    tags: ["JavaFX", "A* Algorithm", "MySQL", "GTFS"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    link: "#",
    github: "https://github.com/zxuhan/Maastrchit-bus-router",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="px-6 py-24 sm:px-12 lg:px-32">
    <motion.h2
      className="font-mono text-xl uppercase tracking-[0.3em] text-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Projects
    </motion.h2>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          className="flex"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="h-full flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm w-full">
            {/* Image — top half */}
            <div className="relative">
              <img
                src={p.image}
                alt={p.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              {/* GitHub icon — top-right over image */}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 shadow-md transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="GitHub"
                onClick={(e) => { if (p.github === "#") e.preventDefault(); }}
              >
                <Github className="h-4 w-4 text-white" />
              </a>
            </div>

            {/* Description — bottom half */}
            <div className="flex-1 p-5">
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
