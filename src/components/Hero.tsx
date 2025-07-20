import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Profile image placeholder - user will upload their own image later

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-slide-up">
          <div className="mb-6">
            <p className="text-lg text-muted-foreground mb-2 animate-fade-in">
              Hi there! 👋 I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">Anushka</span>
              <br />
              <span className="text-foreground">Dutta</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-6">
              <span className="gradient-text-secondary font-semibold">
                Developer • Designer • Data Enthusiast
              </span>
            </div>
          </div>
          
          {/* Bio with Profile Photo */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-8 max-w-4xl mx-auto">
            <div className="flex-1">
              <p className="text-lg text-muted-foreground leading-relaxed text-left">
                Hi! I'm Anushka Dutta, a Computer Science student passionate about development and design. 
                I love building user-friendly digital products and solving real-world problems.
              </p>
            </div>
            
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-60 h-60 rounded-full overflow-hidden glass-card animate-float flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="text-4xl font-bold gradient-text">AD</div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-pastel-lavender to-pastel-blush opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-r from-neon-teal to-electric-blue opacity-40 animate-bounce"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 w-60 h-60 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 animate-glow -z-10"></div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group transition-all duration-300"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <a
                href="mailto:anushkadutta5493@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <a
                href="https://www.linkedin.com/in/anushkadutta1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Download className="h-5 w-5" />
              <span className="ml-2 text-sm">Resume</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;