import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const allProjects = [
  {
    title: "Swim Workout Tracker",
    description: "A data-driven swim training analytics platform that seamlessly syncs workout data and delivers insights through an interactive Python dashboard.",
    image: "/SwimWorkoutTracker.png",
    link: "https://swim-workout-tracker.onrender.com/",
    tags: ["Python", "Dash", "Bootstrap"],
  },
  {
    title: "Dominion Root's Website",
    description: "This is a community website for my friend's YouTube channel, Dominion Root. I actively maintain and update this website.",
    image: "/dominionroot.png",
    link: "https://dominion-root.vercel.app",
    tags: ["JavaScript", "HTML", "CSS", "Vercel", "React"],
  },
  {
    title: "Interactive 2D Top Down Game",
    description: "A 2D top-down game created using HTML, CSS, and JavaScript featuring a Pokemon battle system where you can battle against wild opponents.",
    image: "/pokemonGame.png",
    link: "/resources/projects/PokemonVS/gameIndex.html",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Choose Your Own Adventure",
    description: "This React application allows users to navigate through a story by making choices that affect the outcome of their adventure.",
    image: "/ChooseYourOwnAdventure.png",
    link: "https://matt-collingwood-choose-adventure.netlify.app/",
    tags: ["React", "JavaScript", "HTML"],
  },
  {
    title: "Fitness Tracker",
    description: "This app is an example of using a SQLlite database to track fitness activities.",
    image: "/FitnessTracker.png",
    link: "https://github.com/MattCollingwood/Fitness-Tracker-and-Visualizer",
    tags: ["Python", "SQLlite"],
  },
  {
    title: "Healthcare Dashboard",
    description: "This app details a medical and insurance dashboard built with Python.",
    image: "/HealthcareDashboard.png",
    link: "https://github.com/MattCollingwood/Healthcare-Dashboard",
    tags: ["Python", "Dash"],
  },
  {
    title: "Minecraft",
    description: "A Minecraft clone built with Python.",
    image: "/Minecraft.png",
    link: "https://github.com/MattCollingwood/Python-Minecraft",
    tags: ["Python"],
  },
  {
    title: "Pong",
    description: "A classic Pong game built with Python.",
    image: "/pong.png",
    link: "https://github.com/MattCollingwood/Pong",
    tags: ["Python"],
  },
  {
    title: "Expense Tracker",
    description: "This app helps users track their expenses and manage their budgets effectively. Built with React and Redux.",
    image: "/expenseTracker.png",
    link: "https://matt-collingwood-expense-tracker.netlify.app/",
    tags: ["JavaScript", "React", "Redux"],
  },
  {
    title: "Storefront App",
    description: "This app demo allows users to browse and purchase products from an online store. Built with React and Redux.",
    image: "/storefront.png",
    link: "https://matt-collingwood-storefront.netlify.app/",
    tags: ["JavaScript", "React", "Redux"],
  },
  {
    title: "Favorite Recipes App",
    description: "This app demo allows users to browse and save their favorite recipes. Built with React and Redux.",
    image: "/favoriterecipes.png",
    link: "https://matt-collingwood-favorite-recipes.netlify.app/",
    tags: ["JavaScript", "React", "Redux"],
  },
  {
    title: "Movie Finder App",
    description: "This app allows users to search their favorite movie category and suggests new movies for them to watch.",
    image: "/FilmFinder.png",
    link: "/resources/projects/FilmFinder/index.html",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Animal Jokes App",
    description: "Get ready to laugh (or not, as the jokes are pretty bad) with this collection of corny animal jokes!",
    image: "/AnimalJokes.png",
    link: "/resources/projects/javaScriptSyntax/index.html",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Pet Adoption Project",
    description: "This project helps users find their perfect pet match by browsing available animals for adoption.",
    image: "/Pet-Adoption.png",
    link: "https://mattcollingwood-petadoptionproject.netlify.app/",
    tags: ["JavaScript", "React"],
  },
  {
    title: "Productivity App",
    description: "This app helps you manage your tasks efficiently and boost your productivity.",
    image: "/Productivity-App.png",
    link: "https://mattcollingwood-to-do-app.netlify.app/",
    tags: ["JavaScript", "HTML", "CSS"],
  },
];

const allTags = ["All", "Python", "SQLlite", "React", "JavaScript", "HTML", "CSS", "Redux", "Dash", "Bootstrap", "Vercel"];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/contact" },
];

const ProjectsPage = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const filteredProjects = selectedTag === "All" 
    ? allProjects 
    : allProjects.filter(project => project.tags.includes(selectedTag));

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-gradient">
            MC
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <a
              href="/Collingwood, Matt - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors text-sm font-medium"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="nav-link text-lg py-2"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/Collingwood, Matt - Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-primary text-primary rounded-md text-center hover:bg-primary/10 transition-colors"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-20 px-6 pb-24">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 mt-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              My Projects
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse through my portfolio of web applications and projects
            </p>
          </motion.div>

          {/* Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  selectedTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : "_self"}
                  rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group block bg-secondary rounded-lg overflow-hidden card-hover"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <p className="text-muted-foreground text-lg">
                  No projects match the selected filter.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;