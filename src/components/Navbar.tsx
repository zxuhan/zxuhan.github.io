import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const links = ["About", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY.current || currentY < 10);
      lastY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-border/50 sm:px-12"
      style={{ background: "hsla(36, 33%, 97%, 0.9)" }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-mono text-2xl font-bold tracking-widest text-primary"
      >
        XZ
      </button>
      <div className="flex gap-6 sm:gap-8">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className="font-mono text-2xl tracking-wider text-muted-foreground transition-colors hover:text-primary sm:text-sm"
          >
            {l}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
