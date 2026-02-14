import { motion } from "framer-motion";
import bannerImg from "@/assets/banner.jpeg";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const HeroPage = () => (
  <section className="relative flex h-screen w-full items-end overflow-hidden">
    {/* Panda image — top-right diagonal */}
    <div className="absolute inset-0">
      <img
        src={bannerImg}
        alt="Panda background"
        className="h-full w-full object-cover object-center"
      />
      {/* Diagonal gradient overlay: transparent top-right → solid bottom-left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, transparent 30%, hsl(var(--background) / 0.6) 50%, hsl(var(--background)) 70%)",
        }}
      />
      {/* Extra bottom fade for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </div>

    {/* Text — bottom-left */}
    <motion.div
      className="relative z-10 max-w-2xl px-8 pb-24 sm:px-16 lg:px-28"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.p
        variants={item}
        className="font-mono text-sm tracking-widest text-primary sm:text-base"
      >
        HI, I'M
      </motion.p>
      <motion.h1
        variants={item}
        className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
      >
        Xuhan Zhuang
      </motion.h1>
      <motion.p
        variants={item}
        className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl"
      >
        I love coding and drinking matcha.
      </motion.p>
    </motion.div>

    {/* Scroll hint */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.8, repeat: Infinity }}
    >
      <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center pt-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
      </div>
    </motion.div>
  </section>
);

export default HeroPage;
