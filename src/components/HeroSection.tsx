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
  <section id="about" className="px-6 py-24 sm:px-12 lg:px-24">
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.p variants={item} className="font-mono text-sm uppercase tracking-[0.3em] text-primary sm:text-base">
        About
      </motion.p>

      <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
        {/* Left side — about summary (larger) */}
        <motion.div variants={item} className="flex-[1.3]">
          <p className="mt-4 max-w-xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            Backend Software Engineer who builds scalable distributed systems, high-concurrency services, and data-intensive
            applications. Passionate about clean architecture, performance optimization, and everything behind the API.
          </p>
        </motion.div>

        {/* Right side — portrait frame */}
        <motion.div variants={item} className="flex flex-1 items-start justify-center lg:justify-center lg:-mt-2">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl border-2 border-primary/20" />
            <div className="h-48 w-36 overflow-hidden rounded-lg border border-border bg-muted shadow-lg sm:h-56 sm:w-40">
              {/* Placeholder portrait */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
                <div className="text-4xl font-bold">XZ</div>
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
