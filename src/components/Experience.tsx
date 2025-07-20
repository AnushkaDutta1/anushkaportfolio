import { Calendar, MapPin, Building, Code, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "ZIDIO DEVELOPMENT",
      period: "May 2025",
      location: "Remote",
      type: "Internship",
      icon: Code,
      description: "Built Excel Analytical Platform using MERN stack for user-uploaded Excel datasets",
      achievements: [
        "Developed full-stack web application using React, Node.js, Express, and MongoDB",
        "Implemented file upload functionality for Excel dataset processing",
        "Created interactive data visualization features",
        "Gained hands-on experience with modern web development practices"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Excel Processing"]
    },
    {
      title: "DSAIML Intern",
      company: "ARDENT COMPUTECH",
      period: "June - July 2025",
      location: "Remote",
      type: "Internship",
      icon: Brain,
      description: "Built a Machine Learning model for Heart Disease prediction",
      achievements: [
        "Developed and trained ML models for medical prediction using Python",
        "Worked with various ML algorithms and data preprocessing techniques",
        "Gained experience with scikit-learn, pandas, and numpy",
        "Implemented model evaluation and performance optimization",
        "Created data visualizations for model insights"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning", "Data Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey through internships and professional experiences in the tech industry
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-card border-none hover:scale-[1.02] transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Company Info */}
                  <div className="lg:col-span-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <exp.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg text-foreground">
                          {exp.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="lg:col-span-3 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;