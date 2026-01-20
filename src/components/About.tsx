import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-4">
            <span className="text-primary font-mono text-xl">03.</span>
            About Me
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Based in Maryland, I graduated from Towson University with a degree in Mass Communication. Since then, I’ve spent over a decade working in marketing and client management. My professional journey has taken me from supporting local businesses to partnering with global marketing agencies, with client needs across the full spectrum of marketing services.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Over time, I found myself increasingly drawn to the technical side of my engagements, supporting engineering teams on complex projects such as CDP and CMS migrations, Salesforce implementations, cloud storage solutions, and responsive web development. These experiences sparked a deep curiosity and passion for the engineering side of the work, ultimately inspiring me to dive into programming myself.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                After dedicating over a year to learning how to code and building my own projects, I am now able to bring a unique blend of strategic communication skills, marketing experience, and a growing technical toolkit—ready to contribute to teams building smart, scalable solutions. I will continue to grow my capabilities to better serve my clients and team members along my career journey.
              </p>
              
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
                  src="/Matt-arches.jpg"
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
