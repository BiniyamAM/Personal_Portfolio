import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            
            {/* Personal Info */}
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Biniyam Assefa</h2>
              <p className="text-xl text-primary mb-6">Full Stack Developer</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+251-94-018-5778</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>biniyamassefa648@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="glass rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated software engineer with 2 years of experience specializing in web
                and mobile application development. Proficient in modern front-end and
                back-end technologies, with a strong foundation in UI/UX design. Proven track
                record of delivering scalable, user-friendly applications, including a doctor
                appointment booking system and Skill Trade Hub. Currently pursuing a degree
                in Software Engineering at Addis Ababa University.
              </p>
            </div>

            {/* Education */}
            <div className="glass rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <div className="flex items-center gap-2 text-sm text-primary mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>2021 - 2026</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Bachelor of Software Engineering</h4>
                  <p className="text-muted-foreground">Addis Ababa University</p>
                </div>

                <div className="border-l-2 border-primary/50 pl-6">
                  <div className="flex items-center gap-2 text-sm text-primary/70 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>2018 - 2021</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Secondary School</h4>
                  <p className="text-muted-foreground">Woldia Secondary School</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Experience
              </h3>
              
              <div className="border-l-2 border-primary pl-6">
                <div className="flex items-center gap-2 text-sm text-primary mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>2022 - Present</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Freelance Software Developer</h4>
                <p className="text-muted-foreground mb-4">Self-Employed</p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Developed and maintained responsive web and mobile applications for clients, focusing on user experience and performance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Managed end-to-end development for various projects, from gathering requirements to deployment.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
