import { motion } from "framer-motion";

const projects = [
  {
    title: "Agentic Website Builder",
    desc: "Full-stack AI platform to generate, preview, and deploy web apps with LLMs. Real-time streaming, RAG, multi-layer caching (Caffeine + Redis), cursor-based pagination.",
    tags: ["Spring Boot 3", "LangChain4j", "Redis", "PostgreSQL", "React"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "High-Performance Like System",
    desc: "High-concurrency system with three-tier caching, HeavyKeeper algorithm for hot key detection, event-driven architecture with Apache Pulsar, atomic Redis operations via Lua scripting.",
    tags: ["Spring Boot 3", "Redis", "Apache Pulsar", "MySQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Maastricht Bus Scheduling",
    desc: "Public transit route system using A* algorithm with 90% accuracy vs Google Maps. JavaFX GUI with MySQL database integration for GTFS transit data processing.",
    tags: ["JavaFX", "A* Algorithm", "MySQL", "GTFS"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    link: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="px-6 py-24 sm:px-12 lg:px-24">
    <motion.h2
      className="font-mono text-xs uppercase tracking-[0.3em] text-primary"
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
          className="group perspective-[1000px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="relative h-80 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front — Cover */}
            <div className="absolute inset-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm [backface-visibility:hidden]">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
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

            {/* Back — Description */}
            <div className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link !== "#" && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
