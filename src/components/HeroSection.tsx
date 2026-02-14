import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const education = [
  { degree: "B.Sc. Computer Science", school: "Maastricht University, NL", period: "2023 – 2026" },
  { degree: "B.Sc. Economics", school: "Central Univ. of Finance & Economics, CN", period: "2016 – 2020" },
];

const HeroSection = () => (
  <section id="about" className="px-6 py-24 sm:px-12 lg:px-24">
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.p variants={item} className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
        About
      </motion.p>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Left side — about + education (slightly larger) */}
        <motion.div variants={item} className="flex-[1.2]">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Xuhan Zhuang
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Backend Software Engineer who builds scalable distributed systems, high-concurrency services, and data-intensive
            applications. Passionate about clean architecture, performance optimization, and everything behind the API.
          </p>

          {/* Education Cards */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground">{edu.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right side — portrait frame */}
        <motion.div variants={item} className="flex flex-1 items-start justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative border frame */}
            <div className="absolute -inset-3 rounded-2xl border-2 border-primary/20" />
            <div className="h-72 w-56 overflow-hidden rounded-xl border border-border bg-muted shadow-lg sm:h-80 sm:w-64">
              {/* Placeholder portrait */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
                <div className="text-5xl font-bold">XZ</div>
                <p className="font-mono text-xs">your photo here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
