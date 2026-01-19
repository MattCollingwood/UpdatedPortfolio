import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span>
            About Me
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hello! I'm Matt, a passionate software developer who enjoys creating things 
                that live on the internet. My interest in web development started back when 
                I decided to try creating custom websites — turns out hacking together 
                a basic site taught me a lot about HTML & CSS!
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fast-forward to today, and I've had the privilege of working at various 
                companies, building software that makes a difference. My main focus these 
                days is building accessible, inclusive products and digital experiences.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Python", "PostgreSQL"].map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">▹</span>
                    <span className="font-mono text-sm">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Matt Collingwood"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
