import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Express", "FastAPI", "REST APIs", "Dash", "Bootstrap"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span>
            Skills & Technologies
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-primary">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="font-mono text-sm">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
