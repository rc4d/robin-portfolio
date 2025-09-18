import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Wrench, Laptop, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "JavaScript (ES5/ES6)", level: 90, color: "bg-yellow-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
        { name: "HTML5 & CSS3", level: 95, color: "bg-orange-500" },
        { name: "Redux & Context API", level: 90, color: "bg-purple-500" }
      ]
    },
    {
      title: "Styling & UI",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
        { name: "SCSS/Sass", level: 85, color: "bg-pink-500" },
        { name: "Responsive Design", level: 95, color: "bg-green-500" },
        { name: "Jio Design System", level: 88, color: "bg-indigo-500" }
      ]
    },
    {
      title: "Backend & Tools",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "REST APIs", level: 90, color: "bg-emerald-500" },
        { name: "MySQL", level: 75, color: "bg-blue-700" },
        { name: "Git/GitHub", level: 90, color: "bg-gray-600" },
        { name: "SQL Workbench", level: 80, color: "bg-teal-500" }
      ]
    },
    {
      title: "Development Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "VS Code", level: 95, color: "bg-blue-400" },
        { name: "Azure DevOps", level: 85, color: "bg-blue-800" },
        { name: "Postman", level: 88, color: "bg-orange-600" },
        { name: "Performance Optimization", level: 85, color: "bg-red-500" }
      ]
    }
  ];

  const platforms = ["Mac", "Linux/Unix", "Windows"];
  const softSkills = [
    "Problem-solving", "Excellent verbal communication", "Good interpersonal skills",
    "Team collaboration", "Project leadership", "Agile methodology"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-glow">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive expertise across the frontend development stack
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 tech-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Platform Knowledge */}
            <Card className="p-6 tech-card">
              <div className="flex items-center gap-3 mb-6">
                <Laptop className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Platform Knowledge</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 bg-muted hover:bg-primary/20 transition-colors"
                  >
                    {platform}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className="p-6 tech-card">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="px-3 py-1 border-primary/30 text-primary text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Key Achievements */}
          <Card className="p-8 mt-8 tech-card bg-gradient-tech text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Technical Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">100K+</div>
                <div className="text-sm opacity-90">Active Users Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-sm opacity-90">Performance Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">6 Months</div>
                <div className="text-sm opacity-90">MVP Delivery Time</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;