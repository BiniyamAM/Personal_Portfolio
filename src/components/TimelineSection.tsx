import { motion } from "framer-motion";
import { Calendar, Award, Briefcase, GraduationCap } from "lucide-react";

const milestones = [
  {
    icon: GraduationCap,
    year: "2021",
    title: "Started University",
    description: "Began Software Engineering degree at Addis Ababa University",
  },
  {
    icon: Briefcase,
    year: "2022",
    title: "Started Freelancing",
    description: "Launched freelance career as a Full Stack Developer",
  },
  {
    icon: Award,
    year: "2023",
    title: "Doctor Appointment System",
    description: "Built complete appointment management platform with React and Node.js",
  },
  {
    icon: Calendar,
    year: "2024",
    title: "Skill Trade Hub",
    description: "Developed skill exchange platform using Flutter and Nest.js",
  },
];

export const TimelineSection = () => {
  return (
    <section className="py-20 px-4" id="timeline">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key milestones that shaped my creative and technical evolution
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow z-10" />

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? "md:pr-12" : "md:pl-12"} pl-20`}>
                    <div className="glass rounded-2xl p-6 hover:shadow-glow transition-smooth">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-bold text-primary">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
