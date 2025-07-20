import { Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering (Data Science)",
      institution: "MCKV Institute of Engineering",
      period: "2023 - 2026 (Expected)",
      location: "West Bengal, India",
      status: "Currently Pursuing",
    },
    {
      degree: "Diploma in Computer Science & Technology",
      institution: "The Calcutta Technical School",
      period: "2020 - 2023",
      location: "Kolkata, India",
      status: "Graduated",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know me better - my journey, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6 animate-slide-up">
            <Card className="glass-card border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text-secondary">
                  My Story
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hi! I'm Anushka Dutta, a Computer Science and Engineering student with a 
                    specialization in Data Science. I'm passionate about development, designing, 
                    and creating user-friendly digital experiences that make a real impact.
                  </p>
                  <p>
                    I enjoy learning new technologies and am always eager to take on challenges 
                    that push my boundaries. My journey in tech has been driven by curiosity 
                    and a desire to solve real-world problems through innovative solutions.
                  </p>
                  <p>
                    Currently, I'm seeking internship opportunities to apply my skills, learn 
                    from industry professionals, and grow as both a designer and developer. 
                    I believe in the power of technology to transform lives and businesses.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 gradient-text-secondary">
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="glass-card border-none hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                          <Award className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Currently Pursuing' 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-accent/20 text-accent'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        
                        <h4 className="font-semibold text-foreground text-lg">
                          {edu.degree}
                        </h4>
                        
                        <p className="text-muted-foreground font-medium">
                          {edu.institution}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;