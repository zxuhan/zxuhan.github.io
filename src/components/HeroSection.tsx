import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => (
  <section id="about" className="px-6 py-24 sm:px-12 lg:px-32">
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.p variants={item} className="font-mono text-2xl uppercase tracking-[0.3em] text-primary">
        About
      </motion.p>

      <div className="mt-8 flex flex-col">
        <motion.div variants={item}>
          <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              I'm a software engineer focused on building systems that work at scale. My experience spans backend development, database design, and system integration across different industries. I enjoy tackling complex technical problems and turning them into reliable, efficient solutions.
          </p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
