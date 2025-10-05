import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Your Name" 
                  required
                  className="glass border-0 h-12"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  className="glass border-0 h-12"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  required
                  className="glass border-0 min-h-[150px]"
                />
              </div>
              <Button type="submit" size="lg" className="w-full shadow-glow">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:biniyamassefa648@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  biniyamassefa648@gmail.com
                </a>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-smooth">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-smooth">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-smooth">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-3">Quick Response</h3>
              <p className="text-muted-foreground">
                I typically respond within 24 hours. Looking forward to discussing your project!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
