import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const projects = [
  {
    title: "Swim Workout Tracker",
    description:
      "Swim Workout Tracker is a Python-based analytics dashboard that syncs Apple Watch swim data and visualizes performance metrics through interactive charts using Dash, Plotly, and Pandas.",
    link: "https://updated-swim-tracker-matt-5c04be4d02e8.herokuapp.com/#",
    image: "/SwimWorkoutTracker.png",
  },
  {
    title: "Dominion Root Website",
    description:
      "DominionRoot is a live website built with TypeScript and React for the Dominion Root YouTube channel, hosted on Vercel and featuring modern web technologies like Tailwind CSS and Vite.",
    link: "https://dominion-root.vercel.app/",
    image: "/dominionroot.png",
  },
  {
    title: "Choose Your Own Adventure",
    description:
      "ChooseYourOwnAdventure is a React-based web application built with Create React App, primarily using JavaScript, CSS, and HTML for an interactive storytelling experience.",
    link: "https://matt-collingwood-choose-adventure.netlify.app/",
    image: "/ChooseYourOwnAdventure.png",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block bg-secondary rounded-lg overflow-hidden card-hover"
    >
      <div className="relative overflow-hidden h-64 md:h-80">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-4">
            <span className="text-primary font-mono text-xl">02.</span>
            Projects
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/projects"
            className="inline-block px-8 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
