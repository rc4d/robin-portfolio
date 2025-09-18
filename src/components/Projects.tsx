import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, TrendingUp, Smartphone, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sales Assist Platform",
      description: "Comprehensive end-to-end sales partner lifecycle management platform serving 100K+ active users across web and Android platforms.",
      longDescription: "Leading the development of a full-featured sales management application that handles partner onboarding, beat planning, training and assessment, location tracking, attendance management, and comprehensive sales analytics.",
      icon: <TrendingUp className="h-8 w-8" />,
      achievements: [
        "Scaled to 100K+ active users",
        "Built comprehensive partner management system",
        "Implemented real-time location tracking",
        "Developed advanced analytics dashboard",
        "Cross-platform web and Android support"
      ],
      technologies: ["React.js", "Redux", "JavaScript", "Tailwind CSS", "Jio Design System", "REST APIs"],
      category: "Enterprise Application",
      status: "Production",
      impact: "100K+ Users",
      timeline: "Nov 2023 - Present"
    },
    {
      title: "JioPOS Lite",
      description: "Modern React.js migration of legacy Kotlin-based JSON UI, integrated into React Native Android shell via WebView.",
      longDescription: "Complete migration project that transformed a legacy mobile application into a modern, maintainable React.js frontend. Built mobile-optimized UI from scratch and delivered MVP in just 6 months.",
      icon: <Smartphone className="h-8 w-8" />,
      achievements: [
        "Migrated legacy Kotlin UI to React.js",
        "Delivered MVP in 6 months",
        "Built mobile-optimized responsive design",
        "Integrated with React Native shell",
        "Improved code maintainability significantly"
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "React Native", "WebView Integration"],
      category: "Mobile Application",
      status: "Completed",
      impact: "Legacy Migration",
      timeline: "Feb 2023 - Oct 2023"
    },
    {
      title: "Shiseido E-commerce Platform",
      description: "Frontend development for premium beauty products e-commerce website with enhanced user experience features.",
      longDescription: "Worked on enhancing the e-commerce experience for Shiseido Americas, implementing key features like Gift Box functionality, Gift Messages, and optimizing the entire checkout flow.",
      icon: <ShoppingCart className="h-8 w-8" />,
      achievements: [
        "Implemented Gift Box and Gift Message features",
        "Enhanced cart and checkout experience",
        "Optimized product details pages",
        "Improved order confirmation flow",
        "Responsive design implementation"
      ],
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "SCSS", "jQuery"],
      category: "E-commerce",
      status: "Completed",
      impact: "Enhanced UX",
      timeline: "March 2022 - Feb 2023"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Completed": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Enterprise Application": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Mobile Application": return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      case "E-commerce": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing impactful projects that demonstrate technical expertise and business value
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 tech-card overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">{project.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                          <Badge className={getCategoryColor(project.category)}>
                            {project.category}
                          </Badge>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Long Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1 text-xs">✦</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
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
                  </div>

                  {/* Project Meta */}
                  <div className="space-y-6">
                    {/* Impact Stats */}
                    <Card className="p-4 bg-gradient-glow border-primary/20">
                      <h4 className="font-semibold mb-3 text-center">Project Impact</h4>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{project.impact}</div>
                        <div className="text-sm text-muted-foreground">Business Impact</div>
                      </div>
                    </Card>

                    {/* Timeline */}
                    <div className="text-center">
                      <h4 className="font-semibold mb-2">Timeline</h4>
                      <p className="text-sm text-muted-foreground">{project.timeline}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live (Private)
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/30 text-foreground hover:bg-primary/10"
                        disabled
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code (Private)
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      * These are enterprise projects with private repositories
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-tech text-white">
              <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
              <p className="text-lg opacity-90 mb-6">
                Let's discuss how I can contribute to your next project
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;