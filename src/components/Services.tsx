import { Code, BarChart3, Palette, Globe, Database, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive websites and platforms using modern tech stacks like React, Node.js, and MongoDB.",
      icon: Code,
      color: "from-neon-teal to-electric-blue",
      features: [
        "Responsive Web Applications",
        "MERN Stack Development",
        "RESTful API Development",
        "Database Integration",
        "Performance Optimization"
      ]
    },
    {
      title: "Data Analysis & Dashboards",
      description: "Cleaning, analyzing data and visualizing it using Python, Tableau, and modern data science tools.",
      icon: BarChart3,
      color: "from-pastel-lavender to-pastel-blush",
      features: [
        "Data Cleaning & Processing",
        "Statistical Analysis",
        "Interactive Dashboards",
        "Business Intelligence",
        "Data Visualization"
      ]
    },
    {
      title: "UI/UX Design Support",
      description: "Designing intuitive digital interfaces using Figma with focus on user experience and modern design principles.",
      icon: Palette,
      color: "from-pastel-mint to-neon-teal",
      features: [
        "User Interface Design",
        "Prototyping & Wireframing",
        "User Experience Research",
        "Design System Creation",
        "Responsive Design"
      ]
    },
    {
      title: "Machine Learning Solutions",
      description: "Developing ML models for prediction, classification, and data-driven insights using Python and scikit-learn.",
      icon: Database,
      color: "from-electric-blue to-pastel-lavender",
      features: [
        "Predictive Modeling",
        "Classification Algorithms",
        "Model Training & Validation",
        "Feature Engineering",
        "Performance Optimization"
      ]
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end application development from concept to deployment with modern development practices.",
      icon: Globe,
      color: "from-pastel-blush to-neon-teal",
      features: [
        "Frontend Development",
        "Backend API Development",
        "Database Design",
        "Cloud Deployment",
        "Version Control"
      ]
    },
    {
      title: "Technical Consulting",
      description: "Providing technical guidance and solutions for web development, data analysis, and digital transformation projects.",
      icon: Smartphone,
      color: "from-neon-teal to-pastel-mint",
      features: [
        "Technology Stack Selection",
        "Architecture Planning",
        "Code Review & Optimization",
        "Best Practices Implementation",
        "Technical Documentation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services <span className="gradient-text">I Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical services spanning web development, data science, and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card border-none hover:scale-105 transition-all duration-300 group"
            >
              <CardContent className="p-8 h-full flex flex-col">
                {/* Service Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Service Details */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-1.5 flex-shrink-0`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`mt-6 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <p className="text-sm text-center text-primary font-medium">
                    Available for Projects
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text-secondary">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project requirements and how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;