
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowUpRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with TensorFlow for Machine Learning",
    excerpt: "Learn how to set up TensorFlow and build your first neural network model for image classification.",
    date: "June 10, 2023",
    readTime: "8 min read",
    category: "Machine Learning",
    slug: "getting-started-with-tensorflow",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in purus velit. Donec molestie arcu vel nisi bibendum vulputate. Cras et ante vel tellus luctus aliquam non non enim. Quisque non quam sed dolor elementum suscipit. Duis vitae ipsum eget est vestibulum pretium ac in lorem. Proin non scelerisque turpis. Duis luctus mauris at enim euismod tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac fermentum enim, id aliquet tellus."
  },
  {
    id: 2,
    title: "Data Visualization Techniques for Data Scientists",
    excerpt: "Explore advanced visualization techniques to effectively communicate insights from complex datasets.",
    date: "July 25, 2023",
    readTime: "6 min read",
    category: "Data Science",
    slug: "data-visualization-techniques",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in purus velit. Donec molestie arcu vel nisi bibendum vulputate. Cras et ante vel tellus luctus aliquam non non enim. Quisque non quam sed dolor elementum suscipit. Duis vitae ipsum eget est vestibulum pretium ac in lorem. Proin non scelerisque turpis. Duis luctus mauris at enim euismod tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac fermentum enim, id aliquet tellus."
  },
  {
    id: 3,
    title: "Building Responsive UIs with React and Tailwind CSS",
    excerpt: "A comprehensive guide to creating beautiful and responsive web interfaces using React and Tailwind CSS.",
    date: "August 15, 2023",
    readTime: "10 min read",
    category: "Web Development",
    slug: "responsive-ui-with-react-tailwind",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in purus velit. Donec molestie arcu vel nisi bibendum vulputate. Cras et ante vel tellus luctus aliquam non non enim. Quisque non quam sed dolor elementum suscipit. Duis vitae ipsum eget est vestibulum pretium ac in lorem. Proin non scelerisque turpis. Duis luctus mauris at enim euismod tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac fermentum enim, id aliquet tellus."
  },
  {
    id: 4,
    title: "Optimizing SQL Queries for Performance",
    excerpt: "Learn advanced techniques to improve the performance of your database queries in production environments.",
    date: "September 5, 2023",
    readTime: "7 min read",
    category: "Database",
    slug: "optimizing-sql-queries",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in purus velit. Donec molestie arcu vel nisi bibendum vulputate. Cras et ante vel tellus luctus aliquam non non enim. Quisque non quam sed dolor elementum suscipit. Duis vitae ipsum eget est vestibulum pretium ac in lorem. Proin non scelerisque turpis. Duis luctus mauris at enim euismod tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac fermentum enim, id aliquet tellus."
  },
  {
    id: 5,
    title: "My Journey as a Computer Engineer",
    excerpt: "Personal reflections on my path through computer engineering education and professional growth.",
    date: "October 20, 2023",
    readTime: "5 min read",
    category: "Personal",
    slug: "journey-as-computer-engineer",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in purus velit. Donec molestie arcu vel nisi bibendum vulputate. Cras et ante vel tellus luctus aliquam non non enim. Quisque non quam sed dolor elementum suscipit. Duis vitae ipsum eget est vestibulum pretium ac in lorem. Proin non scelerisque turpis. Duis luctus mauris at enim euismod tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac fermentum enim, id aliquet tellus."
  },
  {
    id: 6,
    title: "Ethical Considerations in AI Development",
    excerpt: "Exploring the ethical implications and responsibilities when developing artificial intelligence systems.",
    date: "November 12, 2023",
    readTime: "9 min read",
    category: "AI Ethics",
    slug: "ethical-considerations-in-ai",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in purus velit. Donec molestie arcu vel nisi bibendum vulputate. Cras et ante vel tellus luctus aliquam non non enim. Quisque non quam sed dolor elementum suscipit. Duis vitae ipsum eget est vestibulum pretium ac in lorem. Proin non scelerisque turpis. Duis luctus mauris at enim euismod tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac fermentum enim, id aliquet tellus."
  },
  {
    id: 7,
    title: "The Future of Cloud Computing",
    excerpt: "Predictions and trends that will shape the future of cloud infrastructure and services.",
    date: "December 5, 2023",
    readTime: "7 min read",
    category: "Cloud",
    slug: "future-of-cloud-computing",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in purus velit. Donec molestie arcu vel nisi bibendum vulputate. Cras et ante vel tellus luctus aliquam non non enim. Quisque non quam sed dolor elementum suscipit. Duis vitae ipsum eget est vestibulum pretium ac in lorem. Proin non scelerisque turpis. Duis luctus mauris at enim euismod tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac fermentum enim, id aliquet tellus."
  },
  {
    id: 8,
    title: "Mastering Git and GitHub for Teams",
    excerpt: "Best practices for using Git and GitHub in collaborative development environments.",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "DevOps",
    slug: "mastering-git-and-github",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in purus velit. Donec molestie arcu vel nisi bibendum vulputate. Cras et ante vel tellus luctus aliquam non non enim. Quisque non quam sed dolor elementum suscipit. Duis vitae ipsum eget est vestibulum pretium ac in lorem. Proin non scelerisque turpis. Duis luctus mauris at enim euismod tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac fermentum enim, id aliquet tellus."
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">My Blog</h1>
                <div className="h-1 w-20 bg-gradient-to-r from-primary/60 via-primary to-primary/60 mx-auto mb-6 rounded animate-slide-in-up"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-in-up" style={{animationDelay: "0.1s"}}>
                  Thoughts, insights, and experiences from my journey in technology and engineering
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-10">
                <div className="w-full md:w-2/3 relative animate-slide-in-up" style={{animationDelay: "0.15s"}}>
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="pl-10 rounded-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/3 flex flex-wrap gap-2 animate-slide-in-up" style={{animationDelay: "0.2s"}}>
                  <Button 
                    variant={selectedCategory === null ? "default" : "outline"} 
                    size="sm" 
                    className="rounded-full"
                    onClick={() => setSelectedCategory(null)}
                  >
                    All
                  </Button>
                  {categories.map(category => (
                    <Button 
                      key={category} 
                      variant={selectedCategory === category ? "default" : "outline"} 
                      size="sm" 
                      className="rounded-full"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post, idx) => (
                    <Card 
                      key={post.id} 
                      className="card-hover overflow-hidden h-full flex flex-col bg-background/80 backdrop-blur-sm border border-border/50 animate-scale-in"
                      style={{animationDelay: `${0.1 + idx * 0.05}s`}}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="tech-chip">
                            {post.category}
                          </Badge>
                        </div>
                        <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="py-2 flex-grow">
                        <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="pt-0 flex justify-between items-center">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <CalendarDays className="h-3.5 w-3.5 mr-1" />
                          <span className="mr-3">{post.date}</span>
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                          <Link to={`/blog/${post.slug}`} className="flex items-center gap-1 text-primary hover:underline">
                            <span className="text-sm">Read</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 animate-fade-in">
                  <p className="text-lg text-muted-foreground">No posts found matching your search criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Blog;
