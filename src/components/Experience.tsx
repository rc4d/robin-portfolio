import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Jio Platforms Limited",
      position: "Software Development Engineer - III",
      duration: "Feb 2023 – Present",
      location: "Mumbai",
      logo: "🔵",
      projects: [
        {
          name: "Sales Assist",
          period: "Nov 2023 - Present",
          description: "Lead developer for Web and Android application supporting end-to-end sales partner lifecycle management.",
          achievements: [
            "Scaled to 100K+ active users across web and Android platforms",
            "Built comprehensive modules for onboarding, beat planning, training, analytics",
            "Implemented location tracking, attendance, leave and expense management",
            "Optimized performance and enhanced usability across platforms"
          ],
          technologies: ["React.js", "Redux", "JavaScript", "Tailwind CSS", "Jio Design System"]
        },
        {
          name: "JioPOS Lite",
          period: "Feb 2023 - Oct 2023",
          description: "Migrated legacy Kotlin-based JSON UI to modern, scalable React.js frontend.",
          achievements: [
            "Delivered MVP in 6 months, improving maintainability significantly",
            "Built mobile-optimized UI from scratch using React.js",
            "Integrated into React Native Android shell via WebView",
            "Developed core modules: Jio Bharat Phone sale, JioFiber leads, recharge dashboard"
          ],
          technologies: ["React.js", "JavaScript", "Tailwind CSS", "React Native", "REST APIs"]
        }
      ]
    },
    {
      company: "Publicis Sapient",
      position: "Associate Technology L2",
      duration: "March 2022 – Feb 2023",
      location: "Remote/Gurgaon",
      logo: "🟠",
      projects: [
        {
          name: "Shiseido Americas E-commerce",
          period: "March 2022 – Feb 2023",
          description: "Frontend developer for SHISEIDO e-commerce website of beauty products.",
          achievements: [
            "Implemented Gift Box and Gift Message features",
            "Developed responsive UI components as per mockup requirements",
            "Worked on cart page, checkout page, product details page",
            "Enhanced order confirmation page user experience"
          ],
          technologies: ["HTML5", "CSS3", "JavaScript", "ES6", "React", "jQuery", "SCSS"]
        }
      ]
    },
    {
      company: "Knimbus",
      position: "Software Developer Executive",
      duration: "Nov 2020 – March 2022",
      location: "Remote",
      logo: "🟢",
      projects: [
        {
          name: "Frontend Development & Web Scraping",
          period: "Nov 2020 – March 2022",
          description: "Full-stack development focusing on responsive web applications and data processing.",
          achievements: [
            "Made websites responsive using vanilla JavaScript",
            "Developed APIs and web scraping solutions",
            "Processed data using Perl scripts and SQL Workbench",
            "Maintained and optimized existing web applications"
          ],
          technologies: ["JavaScript", "HTML5", "CSS3", "Perl", "SQL", "APIs"]
        }
      ]
    },
    {
      company: "Coding Ninjas",
      position: "Student Developer",
      duration: "Jan 2020 – Oct 2020",
      location: "Remote",
      logo: "🔴",
      projects: [
        {
          name: "Immersive Development Program",
          period: "Jan 2020 – Oct 2020",
          description: "Six-month intensive program focused on coding and development skills.",
          achievements: [
            "Developed strong Data Structures and Algorithms foundation",
            "Learned modern web development technologies",
            "Built multiple projects demonstrating web development skills",
            "Gained hands-on experience with React.js and JavaScript"
          ],
          technologies: ["HTML", "CSS", "JavaScript", "React.js", "DSA"]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              5+ years of building exceptional digital experiences
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 tech-card">
                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="text-3xl">{exp.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.position}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-6">
                  {exp.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="border-l-2 border-primary/20 pl-6">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {project.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">{project.period}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;