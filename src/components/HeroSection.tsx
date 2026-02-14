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
      <motion.p variants={item} className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
        About
      </motion.p>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Left side — about summary */}
        <motion.div variants={item} className="flex-[1.2]">
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Backend Software Engineer who builds scalable distributed systems, high-concurrency services, and data-intensive
            applications. Passionate about clean architecture, performance optimization, and everything behind the API.
          </p>
        </motion.div>

        {/* Right side — portrait frame, smaller and upper-right */}
        <motion.div variants={item} className="flex flex-1 items-start justify-center lg:justify-end lg:-mt-4">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl border-2 border-primary/20" />
            <div className="h-52 w-40 overflow-hidden rounded-lg border border-border bg-muted shadow-lg sm:h-60 sm:w-44">
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
