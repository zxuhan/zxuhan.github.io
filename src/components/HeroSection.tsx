import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import bannerImg from "@/assets/banner.jpeg";

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
  <section id="about" className="relative pt-16">
    {/* Banner */}
    <div className="relative h-52 w-full overflow-hidden sm:h-64 md:h-72">
      <img
        src={bannerImg}
        alt="Banner"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>

    {/* Content area */}
    <div className="relative px-6 sm:px-12 lg:px-24">
      {/* Profile picture overlapping banner */}
      <div className="-mt-16 mb-6 flex items-end gap-6 sm:-mt-20">
        <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-background bg-muted shadow-lg sm:h-36 sm:w-36">
          {/* Placeholder avatar */}
          <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-muted-foreground sm:text-4xl">
            XZ
          </div>
        </div>
      </div>

      <motion.div
        className="max-w-3xl pb-16"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="font-mono text-sm tracking-widest text-primary">
          HI, I'M
        </motion.p>
        <motion.h1 variants={item} className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Xuhan Zhuang
        </motion.h1>
        <motion.p variants={item} className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Backend Software Engineer who builds scalable distributed systems, high-concurrency services, and data-intensive
          applications. Passionate about clean architecture, performance optimization, and everything behind the API.
        </motion.p>

        {/* Education Cards */}
        <motion.div variants={item} className="mt-8 grid gap-3 sm:grid-cols-2">
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
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
