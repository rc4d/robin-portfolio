import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "5+ Years Experience",
      description: "Frontend development with modern technologies"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "100K+ Users",
      description: "Scaled applications to serve large user bases"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Performance Expert",
      description: "Reduced load times by 30% through optimization"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "MVP Delivery",
      description: "Delivered complex projects in 6 months"
    }
  ];

  const coreSkills = [
    "React.js", "Redux", "JavaScript (ES5/ES6)", "TypeScript", "HTML5", "CSS3", 
    "Tailwind CSS", "REST APIs", "Git/GitHub", "Responsive Design", "Performance Optimization"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate Frontend Developer with a proven track record of building scalable, 
              user-centric applications that deliver exceptional experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm Robin Kr Gupta, a <strong className="text-foreground">Software Development Engineer III</strong> at 
                Jio Platforms Limited with over 5 years of experience in frontend development. 
                I specialize in creating modern, responsive web applications using React.js and JavaScript.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently, I lead the development of <strong className="text-foreground">Sales Assist</strong>, 
                a comprehensive platform serving 100K+ active users. My expertise lies in building 
                scalable applications, optimizing performance, and delivering complex projects efficiently.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm passionate about clean code, user experience, and staying up-to-date with the 
                latest technologies and best practices in web development.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="p-6 tech-card hover:bg-card/80 text-center"
                >
                  <div className="mb-4 text-primary flex justify-center">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{highlight.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <Card className="p-8 tech-card">
            <h3 className="text-2xl font-bold mb-6 text-center">Core Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {coreSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-muted hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;