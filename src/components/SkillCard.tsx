import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number;
  category: string;
  delay?: number;
}

export const SkillCard = ({ icon: Icon, name, level, category, delay = 0 }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass rounded-2xl p-6 hover:shadow-glow transition-smooth group cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-smooth">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <span className="text-xs font-medium text-muted-foreground px-3 py-1 rounded-full bg-muted">
          {category}
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-3">{name}</h3>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Proficiency</span>
          <span className="font-medium">{level}%</span>
        </div>
        <Progress value={level} className="h-2" />
      </div>
    </motion.div>
  );
};
