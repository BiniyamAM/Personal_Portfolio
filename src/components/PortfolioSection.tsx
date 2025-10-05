import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    id: 1,
    title: "Doctor Appointment Booking System",
    description: "Complete appointment management system for patients and doctors with booking, rescheduling, and cancellation features",
    image: project1,
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    category: "web",
  },
  {
    id: 2,
    title: "Skill Trade Hub",
    description: "Platform facilitating skill exchanges between users with authentication, profile management, and real-time messaging",
    image: project2,
    tags: ["Flutter", "Nest.js", "JavaScript"],
    category: "mobile",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with admin dashboard and payment integration",
    image: project3,
    tags: ["Vue", "Nuxt.js", "PostgreSQL"],
    category: "web",
  },
  {
    id: 4,
    title: "UI/UX Design Projects",
    description: "Collection of user interface designs for various clients created with Figma",
    image: project4,
    tags: ["Figma", "UI/UX", "Prototyping"],
    category: "design",
  },
];

const categories = ["all", "web", "mobile", "design"];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 px-4 bg-muted/30" id="portfolio">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of my best work showcasing creativity and technical expertise
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="capitalize transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
