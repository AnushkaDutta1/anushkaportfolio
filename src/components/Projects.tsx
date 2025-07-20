import { ExternalLink, Github, Heart, BarChart3, FileSpreadsheet } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Prediction Web App",
      description: "Interactive machine learning application that predicts heart disease risk based on user input parameters. Built with Python and Streamlit for real-time predictions.",
      icon: Heart,
      color: "from-red-400 to-pink-500",
      technologies: ["Python", "Streamlit", "Machine Learning", "Pandas", "Scikit-learn"],
      features: [
        "Real-time prediction based on medical parameters",
        "Interactive user interface with Streamlit",
        "Multiple ML algorithms for accurate predictions",
        "Data visualization of prediction results"
      ],
      category: "Machine Learning",
      status: "Completed"
    },
    {
      title: "Retail Sales Data Analysis & Visualization",
      description: "Comprehensive data analysis dashboard providing insights across different regions and customer segments using Tableau for business intelligence.",
      icon: BarChart3,
      color: "from-blue-400 to-indigo-500",
      technologies: ["Tableau", "Data Analysis", "Business Intelligence", "SQL"],
      features: [
        "Interactive Tableau dashboard",
        "Regional sales analysis and trends",
        "Customer segmentation insights",
        "Performance metrics visualization"
      ],
      category: "Data Visualization",
      status: "Completed"
    },
    {
      title: "Excel Analytical Platform",
      description: "Full-stack web application enabling users to upload, analyze, and visualize Excel datasets with dynamic charts and filtering capabilities.",
      icon: FileSpreadsheet,
      color: "from-green-400 to-emerald-500",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      features: [
        "Excel file upload and processing",
        "Dynamic data visualization with charts",
        "Real-time filtering and sorting",
        "Responsive web interface"
      ],
      category: "Web Development",
      status: "In Development"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400";
      case "In Development":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects spanning web development, machine learning, and data analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card border-none hover:scale-105 transition-all duration-300 group"
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-accent/20 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 rounded text-xs bg-primary/20 text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;