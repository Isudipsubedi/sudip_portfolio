
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with TensorFlow for Machine Learning",
      excerpt: "Learn how to set up TensorFlow and build your first neural network model for image classification.",
      date: "June 10, 2023",
      readTime: "8 min read",
      category: "Machine Learning",
      slug: "getting-started-with-tensorflow"
    },
    {
      id: 2,
      title: "Data Visualization Techniques for Data Scientists",
      excerpt: "Explore advanced visualization techniques to effectively communicate insights from complex datasets.",
      date: "July 25, 2023",
      readTime: "6 min read",
      category: "Data Science",
      slug: "data-visualization-techniques"
    },
    {
      id: 3,
      title: "Building Responsive UIs with React and Tailwind CSS",
      excerpt: "A comprehensive guide to creating beautiful and responsive web interfaces using React and Tailwind CSS.",
      date: "August 15, 2023",
      readTime: "10 min read",
      category: "Web Development",
      slug: "responsive-ui-with-react-tailwind"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 animate-slide-in-up">My Blog</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary/60 via-primary to-primary/60 mx-auto mb-6 rounded animate-slide-in-up"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-in-up" style={{animationDelay: "0.1s"}}>
              Thoughts, insights, and experiences from my journey in technology and engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <Card 
                key={post.id} 
                className="card-hover overflow-hidden h-full flex flex-col bg-background/80 backdrop-blur-sm border border-border/50"
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

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full animated-border">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
