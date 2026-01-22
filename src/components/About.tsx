import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

  const employmentHistory = [
    {
      company: "DEG/Merkle",
      role: "Sr. Account Manager",
      years: "2021 - Present",
      description: "Led technical strategy and delivery for Tier-1 enterprise clients across a $3M+ portfolio, driving digital transformation, web application development, and integrated marketing technology programs while owning forecasting, revenue, and margin performance."
    },
    {
      company: "Elevation Marketing",
      role: "Account Manager",
      years: "2019 - 2021",
      description: "Served as primary strategic and technical lead for a diverse B2B enterprise portfolio managing $4M+ in annual revenue, driving multi-channel digital programs for clients including Amazon, Rogers, and NAPA Auto Parts. Led integrated campaign strategy, technical solution design, and cross-functional delivery across custom web builds, lead generation, and email programs—supporting measurable KPI growth and contributing to new business development through proposal leadership and solution architecture."
    },
    {
      company: "Renegade Communications",
      role: "Account Executive",
      years: "2016 - 2018",
      description: "Led strategic and executional delivery for major clients including Comcast and Under Armour, owning a $2M+ annual portfolio while maintaining a 9+ client NPS through high-impact integrated campaigns. Drove 25% revenue growth through strategic upsells and trust-based partnerships and optimized digital performance using analytics insights."
    },
    {
      company: "ABC WMAR - Baltimore",
      role: "Associate Account Executive",
      years: "2015 - 2016",
      description: "Managed television and digital advertising clients while driving new business acquisition, selling integrated broadcast and digital ad packages and converting new advertisers into recurring annual contracts. Served as a trusted advisor to local businesses, delivering data-informed recommendations to maximize advertising ROI and build long-term client relationships."
    },
    {
      company: "Bachelors of Science in Mass Communication",
      role: "Towson University",
      years: "2011 - 2015",
      description: "Earned a Bachelor of Science in Mass Communication, developing a strong foundation in media principles, communication strategies, and public relations. Engaged in various projects and internships that enhanced practical skills and prepared for a career in marketing and client management."
    }
  ];

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
                Based in Maryland, I graduated from Towson University with a degree in Mass Communication. Since then, I've spent over a decade working in marketing and client management. My professional journey has taken me from supporting local businesses to partnering with global marketing agencies, with client needs across the full spectrum of marketing services.
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

          {/* Employment History Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="text-primary font-mono">Past Experience</span>
            </h3>
            
            <div className="space-y-8">
              {employmentHistory.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-border last:border-b-0"
                >
                  {/* Left Column: Role, Company, Location, Years */}
                  <div className="md:col-span-1 space-y-1">
                    <h4 className="text-lg font-semibold text-foreground">
                      {job.role}
                    </h4>
                    <p className="text-primary font-mono text-sm">
                      {job.company}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {job.years}
                    </p>
                  </div>

                  {/* Right Column: Description */}
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;