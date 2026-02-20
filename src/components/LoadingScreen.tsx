import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"loading" | "typing" | "reveal" | "exit">("loading");
  const name = "XUHAN ZHUANG";
  const [displayedChars, setDisplayedChars] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase === "loading") {
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            setTimeout(() => setPhase("typing"), 300);
            return 100;
          }
          // Accelerate: slow start, fast middle, slow end
          const increment = p < 30 ? 2 : p < 80 ? 4 : 1.5;
          return Math.min(p + increment, 100);
        });
      }, 30);
      return () => clearInterval(interval);
    } else if (phase === "typing") {
      if (displayedChars < name.length) {
        const timer = setTimeout(() => setDisplayedChars((c) => c + 1), 80);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => setPhase("reveal"), 400);
      }
    } else if (phase === "reveal") {
      setTimeout(() => setPhase("exit"), 800);
    } else if (phase === "exit") {
      setTimeout(onComplete, 600);
    }
  }, [phase, displayedChars, onComplete, progress]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {phase === "loading" ? (
            <div className="flex flex-col items-center gap-6">
              <p className="font-mono text-base tracking-[0.3em] text-muted-foreground">LOADING</p>
              <div className="h-px w-48 overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full bg-primary"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.05 }}
                />
              </div>
              <p className="font-mono text-sm text-muted-foreground">{Math.round(progress)}%</p>
            </div>
          ) : (
            <>
              <motion.h1
                className="font-mono text-3xl font-bold tracking-[0.3em] text-foreground sm:text-5xl md:text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {name.slice(0, displayedChars)}
                <motion.span
                  className="inline-block w-[3px] bg-primary ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  style={{ height: "1em", verticalAlign: "text-bottom" }}
                />
              </motion.h1>

              <motion.p
                className="mt-4 font-mono text-sm tracking-[0.2em] text-muted-foreground sm:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === "reveal" ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                SOFTWARE ENGINEER
              </motion.p>
            </>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default LoadingScreen;
