import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Database, Server, Layout } from "lucide-react";
import { SkillCard } from "./SkillCard";

const skills = [
  { icon: Code2, name: "React & Vue & Next.js", level: 95, category: "Frontend" },
  { icon: Palette, name: "UI/UX Design (Figma)", level: 90, category: "Design" },
  { icon: Smartphone, name: "Flutter & React Native", level: 88, category: "Mobile" },
  { icon: Database, name: "MongoDB & PostgreSQL", level: 85, category: "Database" },
  { icon: Server, name: "Node.js & Nest.js & C#", level: 90, category: "Backend" },
  { icon: Layout, name: "Tailwind & Responsive Design", level: 98, category: "Frontend" },
];

export const SkillsSection = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built through years of dedication and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
