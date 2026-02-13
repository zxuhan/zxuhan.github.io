import { motion } from "framer-motion";

const links = ["About", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 backdrop-blur-md sm:px-12"
      style={{ background: "hsla(230, 25%, 5%, 0.85)" }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-mono text-lg font-bold tracking-widest text-primary"
      >
        XZ
      </button>
      <div className="flex gap-6 sm:gap-8">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className="font-mono text-xs tracking-wider text-muted-foreground transition-colors hover:text-primary sm:text-sm"
          >
            {l}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
