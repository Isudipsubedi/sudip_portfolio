
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Database, BrainCircuit, Layout, Cpu, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const projectCategories = [
    {
      id: "all",
      label: "All Projects",
      icon: <Layout className="h-4 w-4 mr-2" />,
    },
    {
      id: "web",
      label: "Web Development",
      icon: <Code className="h-4 w-4 mr-2" />,
    },
    {
      id: "data",
      label: "Data Science",
      icon: <Database className="h-4 w-4 mr-2" />,
    },
    {
      id: "ml",
      label: "Machine Learning",
      icon: <BrainCircuit className="h-4 w-4 mr-2" />,
    },
    {
      id: "other",
      label: "Other",
      icon: <Cpu className="h-4 w-4 mr-2" />,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Office Management System",
      description: "An office management system using C++ and Qt framework with MySQL Database",
      category: "other",
      technologies: ["C++", "Qt", "MySQL"],
      githubUrl: "https://github.com/isudipsubedi",
      liveUrl: null,
      demoUrl: "/demo/office-management"
    },
    {
      id: 2,
      title: "E-Commerce Web App",
      description: "Cloth rental platform built with HTML, CSS, JavaScript, React, Node.js, a database, and payment gateways.",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      githubUrl: "https://github.com/isudipsubedi",
      liveUrl: null,
      demoUrl: "/demo/e-commerce"
    },
    {
      id: 3,
      title: "Stock Market Prediction (NEPSE)",
      description: "LSTM-based system (TensorFlow/Keras/PyTorch) predicting NEPSE prices using Python, data analysis libraries, and financial data.",
      category: "ml",
      technologies: ["Python", "TensorFlow", "Keras", "PyTorch"],
      githubUrl: "https://github.com/isudipsubedi",
      liveUrl: null,
      demoUrl: "/demo/stock-prediction"
    },
    {
      id: 4,
      title: "PDF Answer Retriever",
      description: "System extracting info from PDFs and answering questions using Python, PDF/NLP libraries, and information retrieval tools.",
      category: "data",
      technologies: ["Python", "NLP", "PDF Libraries"],
      githubUrl: "https://github.com/isudipsubedi",
      liveUrl: null,
      demoUrl: "/demo/pdf-retriever"
    },
    {
      id: 5,
      title: "Virtual Trial Room",
      description: "Using OpenCV, CVZone, PyTorch, and BLIP2 for pose detection, image processing, and garment overlay.",
      category: "ml",
      technologies: ["OpenCV", "PyTorch", "BLIP2"],
      githubUrl: "https://github.com/isudipsubedi",
      liveUrl: null,
      demoUrl: "/demo/virtual-trial"
    },
    {
      id: 6,
      title: "OpenEdit",
      description: "Web-based image editor using OpenCV (Python) and frontend technologies for image manipulation.",
      category: "web",
      technologies: ["OpenCV", "Python", "Web Technologies"],
      githubUrl: "https://github.com/isudipsubedi",
      liveUrl: null,
      demoUrl: "/demo/open-edit"
    },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 animate-slide-in-up">Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary/60 via-primary to-primary/60 mx-auto rounded animate-slide-in-up"></div>
          </div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8 animate-slide-in-up" style={{animationDelay: "0.1s"}}>
              <TabsList className="grid grid-flow-col auto-cols-max gap-2 bg-transparent h-auto p-1 overflow-x-auto max-w-full scrollbar-hide">
                {projectCategories.map((category, index) => (
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

            <TabsContent value={activeTab} className="mt-0 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, idx) => (
                  <Card 
                    key={project.id} 
                    className="card-hover overflow-hidden bg-background/70 backdrop-blur-sm h-full flex flex-col"
                    style={{animationDelay: `${0.1 + idx * 0.1}s`}}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-gradient">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-4 flex-grow">
                      <CardDescription className="text-muted-foreground mb-4">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, index) => (
                          <Badge 
                            key={index} 
                            className="tech-chip"
                            variant="outline"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between gap-2 pt-2">
                      <Button variant="outline" size="sm" asChild className="flex-1 animated-border">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.demoUrl && (
                        <Button variant="default" size="sm" asChild className="flex-1 glow-primary">
                          <a href={project.demoUrl} className="flex items-center gap-1">
                            <Play className="h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="secondary" size="sm" asChild className="flex-1 glow">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Live
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
