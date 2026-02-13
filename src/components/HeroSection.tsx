import { motion } from "framer-motion";
import {
  Server, Database, Container, GitBranch, Cloud, Cpu, Terminal,
  Braces, Layers, Workflow, Cable, Lock, Gauge, Boxes
} from "lucide-react";
import TechIcon from "./TechIcon";

const techStack = [
  { icon: Braces, label: "Java" },
  { icon: Server, label: "Spring" },
  { icon: Terminal, label: "Go" },
  { icon: Cpu, label: "Python" },
  { icon: Database, label: "MySQL" },
  { icon: Database, label: "Postgres" },
  { icon: Gauge, label: "Redis" },
  { icon: Workflow, label: "Kafka" },
  { icon: Cable, label: "Pulsar" },
  { icon: Container, label: "Docker" },
  { icon: Boxes, label: "K8s" },
  { icon: Cloud, label: "Azure" },
  { icon: GitBranch, label: "Git" },
  { icon: Layers, label: "REST" },
  { icon: Lock, label: "Auth" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => (
  <section id="about" className="relative flex min-h-screen flex-col justify-center px-6 pt-20 sm:px-12 lg:px-24">
    {/* Grid bg */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(175,60%,45%) 1px, transparent 1px), linear-gradient(90deg, hsl(175,60%,45%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <motion.div
      className="relative z-10 max-w-3xl"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p variants={item} className="font-mono text-sm tracking-widest text-primary">
        HI, I'M
      </motion.p>
      <motion.h1 variants={item} className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        Xuhan Zhuang
      </motion.h1>
      <motion.p variants={item} className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Backend Software Engineer who builds scalable distributed systems, high-concurrency services, and data-intensive
        applications. Passionate about clean architecture, performance optimization, and everything behind the API.
      </motion.p>

      {/* Education — two simple lines */}
      <motion.div variants={item} className="mt-6 flex flex-col gap-1 border-l-2 border-primary/30 pl-4">
        <p className="text-sm text-foreground">
          <span className="font-semibold">B.Sc. Computer Science</span>{" "}
          <span className="text-muted-foreground">— Maastricht University, NL · 2023–2026</span>
        </p>
        <p className="text-sm text-foreground">
          <span className="font-semibold">B.Sc. Economics</span>{" "}
          <span className="text-muted-foreground">— Central Univ. of Finance & Economics, CN · 2016–2020</span>
        </p>
      </motion.div>

      {/* Tech stack icons */}
      <motion.div variants={item} className="mt-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Tech Stack</p>
        <div className="flex flex-wrap gap-4">
          {techStack.map((t) => (
            <TechIcon key={t.label} icon={t.icon} label={t.label} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
