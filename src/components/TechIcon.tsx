import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface TechIconProps {
  icon: LucideIcon;
  label: string;
}

const TechIcon = ({ icon: Icon, label }: TechIconProps) => {
  return (
    <motion.div
      className="group flex flex-col items-center gap-1.5"
      whileHover={{ y: -6, rotate: [0, -4, 4, -2, 0] }}
      transition={{ type: "spring", stiffness: 400, damping: 12 }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card transition-colors group-hover:border-primary/50 group-hover:shadow-[0_0_12px_hsl(175,60%,45%,0.15)]">
        <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
      <span className="font-mono text-[10px] text-muted-foreground transition-colors group-hover:text-foreground">
        {label}
      </span>
    </motion.div>
  );
};

export default TechIcon;
