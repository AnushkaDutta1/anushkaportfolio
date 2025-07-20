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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground animate-fade-in">
                Hi I'm
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-foreground">Anushka</span>
                <br />
                <span className="gradient-text">Dutta</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-lg">
                a Computer Science student with a specialization in frontend development, 
                passionate about building user-friendly digital products.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium rounded-full"
              >
                Get in Touch
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                JavaScript
              </div>
              <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                TypeScript
              </div>
              <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                React
              </div>
              <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                Node.js
              </div>
              <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                Express.js
              </div>
              <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                MongoDB
              </div>
            </div>
          </div>

          {/* Profile Image with Decorative Elements */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-end justify-center p-8">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-4xl font-bold gradient-text">AD</div>
                </div>
              </div>
              
              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-6 w-32 h-20 bg-white dark:bg-card rounded-xl shadow-lg p-4 border animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium">Available</span>
                </div>
                <div className="text-xs text-muted-foreground">Ready for projects</div>
              </div>
              
              <div className="absolute -bottom-4 -left-6 w-28 h-16 bg-primary/90 text-primary-foreground rounded-xl shadow-lg p-3 animate-bounce">
                <div className="text-xs font-semibold">Portfolio</div>
                <div className="text-xs opacity-90">2024</div>
              </div>
              
              <div className="absolute top-1/2 -right-8 w-24 h-12 bg-accent/90 text-accent-foreground rounded-lg shadow-lg p-2 animate-pulse">
                <div className="text-xs font-medium text-center">Developer</div>
              </div>
              
              {/* Background Geometric Shapes */}
              <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 -z-10 animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-start gap-4 mt-12">
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
    </section>
  );
};

export default Hero;