import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies for optimal performance.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    external: "https://example.com",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and project tracking. Features drag-and-drop interface and notification system.",
    tech: ["TypeScript", "React", "Socket.io", "MongoDB"],
    github: "https://github.com",
    external: "https://example.com",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard for tracking business metrics. Features interactive charts, data visualization, and automated reporting capabilities.",
    tech: ["Python", "React", "D3.js", "FastAPI"],
    github: "https://github.com",
    external: "https://example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
];

const otherProjects = [
  {
    title: "Weather App",
    description: "A weather application with location-based forecasts, interactive maps, and severe weather alerts.",
    tech: ["React", "OpenWeather API", "Leaflet"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Portfolio Generator",
    description: "A tool that generates professional portfolio websites from a simple JSON configuration file.",
    tech: ["Node.js", "Handlebars", "CSS"],
    github: "https://github.com",
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
    tech: ["React", "Firebase", "WebRTC"],
    github: "https://github.com",
    external: "https://example.com",
  },
];

const FeaturedProject = ({ project, index }: { project: typeof featuredProjects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative grid md:grid-cols-12 gap-4 items-center ${isEven ? "" : "md:text-right"}`}
    >
      {/* Image */}
      <div className={`md:col-span-7 ${isEven ? "" : "md:col-start-6"} relative group`}>
        <a href={project.external} target="_blank" rel="noopener noreferrer">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-300 z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </a>
      </div>

      {/* Content */}
      <div
        className={`md:col-span-6 md:absolute ${isEven ? "md:right-0" : "md:left-0"} z-20 p-6 md:p-0`}
      >
        <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
        <div className="bg-secondary p-6 rounded-lg shadow-xl mb-4">
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        <ul className={`flex flex-wrap gap-3 mb-4 ${isEven ? "" : "md:justify-end"}`}>
          {project.tech.map((t) => (
            <li key={t} className="text-muted-foreground font-mono text-sm">
              {t}
            </li>
          ))}
        </ul>
        <div className={`flex gap-4 ${isEven ? "" : "md:justify-end"}`}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const OtherProject = ({ project, index }: { project: typeof otherProjects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-secondary p-6 rounded-lg card-hover group"
    >
      <div className="flex items-center justify-between mb-6">
        <Folder size={40} className="text-primary" />
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
      <ul className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <li key={t} className="text-muted-foreground font-mono text-xs">
            {t}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center gap-4">
            <span className="text-primary font-mono text-xl">02.</span>
            Things I've Built
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mt-12">
          {featuredProjects.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Other Noteworthy Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <OtherProject key={project.title} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
