import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // This would download the resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would need to add the actual resume file
    link.download = 'Robin_Kr_Gupta_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="slide-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Robin</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-4">
              Frontend Developer & Software Engineer
            </div>
            <div className="text-lg text-muted-foreground max-w-2xl mx-auto">
              5+ years of experience crafting exceptional user experiences with React.js, JavaScript, and modern web technologies
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg tech-glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-3 text-lg"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center slide-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="mailto:guptarobin466@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-colors tech-glow"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/rc4d"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-colors tech-glow"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/erobincse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-colors tech-glow"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 slide-in-up" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={scrollToAbout}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll to about section"
            >
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;