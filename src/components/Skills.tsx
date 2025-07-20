import { Code, Database, Palette, Cloud, GitBranch, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-neon-teal to-electric-blue",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "R", level: 75 },
      ]
    },
    {
      title: "Web Development",
      icon: Palette,
      color: "from-pastel-lavender to-pastel-blush",
      skills: [
        { name: "React JS", level: 88 },
        { name: "Node JS", level: 82 },
        { name: "HTML/CSS", level: 95 },
        { name: "MongoDB", level: 78 },
        { name: "MySQL", level: 80 },
      ]
    },
    {
      title: "Data Science & ML",
      icon: BarChart3,
      color: "from-pastel-mint to-neon-teal",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Data Analysis", level: 88 },
        { name: "Tableau", level: 82 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Cloud,
      color: "from-electric-blue to-pastel-lavender",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Docker", level: 65 },
        { name: "Linux", level: 80 },
        { name: "Git", level: 88 },
        { name: "Figma", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card border-none hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 gradient-text-secondary">
            Other Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Streamlit", "Scikit-learn", "Express.js", "REST APIs", "Responsive Design",
              "Data Visualization", "Statistical Analysis", "Problem Solving", "Team Collaboration",
              "Agile Development", "UI/UX Principles", "Version Control"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full glass-card text-sm font-medium text-foreground hover:scale-105 transition-transform duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;