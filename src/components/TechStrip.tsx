import { motion } from "framer-motion";

const techs = [
  { label: "Java",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { label: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { label: "Go",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" },
  { label: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
  { label: "MySQL",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { label: "Redis",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { label: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { label: "Git",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

const TechStrip = () => (
  <div className="flex justify-center px-6 py-6">
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
      {techs.map((t, i) => (
        <motion.div
          key={t.label}
          className="group flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          whileHover={{ y: -6 }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-shadow group-hover:shadow-md sm:h-16 sm:w-16">
            <img src={t.logo} alt={t.label} className="h-8 w-8 sm:h-9 sm:w-9" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground transition-colors group-hover:text-foreground">
            {t.label}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default TechStrip;
