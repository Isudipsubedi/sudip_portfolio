import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Code, Database, Globe, ServerIcon, Cpu } from "lucide-react";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    {
      id: "all",
      label: "All Skills",
      icon: <Cpu className="h-4 w-4 mr-2" />,
    },
    {
      id: "languages",
      label: "Languages",
      icon: <Code className="h-4 w-4 mr-2" />,
    },
    {
      id: "frameworks",
      label: "Frameworks & Libraries",
      icon: <Globe className="h-4 w-4 mr-2" />,
    },
    {
      id: "databases",
      label: "Database Tools",
      icon: <Database className="h-4 w-4 mr-2" />,
    },
    {
      id: "others",
      label: "Others",
      icon: <ServerIcon className="h-4 w-4 mr-2" />,
    },
  ];

  const skills = [
    // Languages
    { name: "HTML", category: "languages" },
    { name: "CSS", category: "languages" },
    { name: "JavaScript", category: "languages" },
    { name: "Python", category: "languages" },
    { name: "SQL", category: "languages" },
    { name: "C++", category: "languages" },
    
    // Frameworks & Libraries
    { name: "React.js", category: "frameworks" },
    { name: "Node.js", category: "frameworks" },
    { name: "Express.js", category: "frameworks" },
    { name: "Flask", category: "frameworks" },
    { name: "OpenCV", category: "frameworks" },
    { name: "Matplotlib", category: "frameworks" },
    { name: "Pandas", category: "frameworks" },
    { name: "NumPy", category: "frameworks" },
    
    // Database Tools
    { name: "MySQL", category: "databases" },
    { name: "PostgreSQL", category: "databases" },
    { name: "Snowflake", category: "databases" },
    { name: "Excel", category: "databases" },
    { name: "Power BI", category: "databases" },
    { name: "ETL Processes", category: "databases" },
    
    // Others
    { name: "Git", category: "others" },
    { name: "GitHub", category: "others" },
    { name: "Cloud Computing", category: "others" },
    { name: "Machine Learning", category: "others" },
    { name: "Data Analysis", category: "others" },
    { name: "Agile Methodologies", category: "others" },
  ];

  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 animate-slide-in-up">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded animate-slide-in-up"></div>
          </div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8 animate-slide-in-up" style={{animationDelay: "0.1s"}}>
              <TabsList className="grid grid-flow-col auto-cols-max gap-2 bg-transparent h-auto p-1 overflow-x-auto max-w-full scrollbar-hide">
                {skillCategories.map((category, index) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all rounded-full px-4 py-2 flex items-center"
                    style={{animationDelay: `${0.1 + index * 0.05}s`}}
                  >
                    {category.icon}
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0 animate-fade-in">
                <Card className="bg-background/60 backdrop-blur-sm border border-border/50 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {filteredSkills.map((skill, index) => (
                        <Badge 
                          key={index} 
                          variant="outline"
                          className="py-2 px-3 text-base bg-secondary/40 hover:bg-secondary transition-all duration-300 animate-scale-in card-hover"
                          style={{animationDelay: `${0.1 + index * 0.02}s`}}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
