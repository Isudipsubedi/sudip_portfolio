
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Import our dummy blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with TensorFlow for Machine Learning",
    excerpt: "Learn how to set up TensorFlow and build your first neural network model for image classification.",
    date: "June 10, 2023",
    readTime: "8 min read",
    category: "Machine Learning",
    slug: "getting-started-with-tensorflow",
    content: `
      <p>Machine learning has revolutionized the way we approach problem-solving in the digital age. TensorFlow, developed by Google, has emerged as one of the most powerful and versatile frameworks for building machine learning models.</p>
      
      <h3>What is TensorFlow?</h3>
      <p>TensorFlow is an open-source library for numerical computation and machine learning. Originally developed by researchers and engineers from the Google Brain team, it has grown to become one of the most popular frameworks for machine learning tasks.</p>
      
      <h3>Setting Up Your Environment</h3>
      <p>Before diving into TensorFlow, you need to set up your development environment. Here's a step-by-step guide:</p>
      
      <ol>
        <li>Install Python 3.6 or later</li>
        <li>Create a virtual environment</li>
        <li>Install TensorFlow using pip: <code>pip install tensorflow</code></li>
        <li>Verify the installation</li>
      </ol>
      
      <h3>Building Your First Neural Network</h3>
      <p>Let's build a simple neural network for image classification using the MNIST dataset, which contains images of handwritten digits.</p>
      
      <p>First, import the necessary libraries:</p>
      <pre><code>
import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.datasets import mnist
      </code></pre>
      
      <p>Now, let's load and preprocess the data:</p>
      <pre><code>
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()

# Normalize pixel values to be between 0 and 1
train_images = train_images / 255.0
test_images = test_images / 255.0

# Reshape for the model
train_images = train_images.reshape((60000, 28, 28, 1))
test_images = test_images.reshape((10000, 28, 28, 1))
      </code></pre>
      
      <p>Next, build the convolutional neural network:</p>
      <pre><code>
model = models.Sequential()
model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.Flatten())
model.add(layers.Dense(64, activation='relu'))
model.add(layers.Dense(10, activation='softmax'))
      </code></pre>
      
      <p>Compile and train the model:</p>
      <pre><code>
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.fit(train_images, train_labels, epochs=5, batch_size=64,
          validation_data=(test_images, test_labels))
      </code></pre>
      
      <h3>Conclusion</h3>
      <p>In this tutorial, we've only scratched the surface of what TensorFlow can do. As you continue your machine learning journey, you'll discover more advanced features and techniques. Stay curious and keep experimenting!</p>
    `
  },
  {
    id: 2,
    title: "Data Visualization Techniques for Data Scientists",
    excerpt: "Explore advanced visualization techniques to effectively communicate insights from complex datasets.",
    date: "July 25, 2023",
    readTime: "6 min read",
    category: "Data Science",
    slug: "data-visualization-techniques",
    content: `
      <p>Data visualization is an essential skill for any data scientist. It transforms complex data into accessible insights that can drive decision-making. In this article, we'll explore some advanced visualization techniques to effectively communicate findings from your data analysis.</p>
      
      <h3>The Importance of Data Visualization</h3>
      <p>Humans are visual creatures. We process visual information much faster than text or numbers. A well-crafted visualization can reveal patterns, trends, and outliers that might otherwise remain hidden in rows of data.</p>
      
      <h3>Beyond Basic Charts: Advanced Visualization Techniques</h3>
      
      <h4>1. Heatmaps for Correlation Analysis</h4>
      <p>Heatmaps provide an intuitive way to visualize correlation matrices, making it easy to identify relationships between variables.</p>
      
      <h4>2. Network Graphs for Relationship Mapping</h4>
      <p>Network graphs are perfect for visualizing connections between entities, such as social networks or citation relationships.</p>
      
      <h4>3. Geospatial Visualizations</h4>
      <p>Maps and geospatial plots help to visualize data with geographic components, like customer distributions or regional trends.</p>
      
      <h4>4. Interactive Dashboards</h4>
      <p>Interactive dashboards allow users to explore data dynamically, filtering and drilling down to discover insights relevant to their specific questions.</p>
      
      <h3>Tools of the Trade</h3>
      <p>Several powerful libraries and tools can help you create compelling visualizations:</p>
      
      <ul>
        <li><strong>Matplotlib</strong>: The foundation of Python visualization</li>
        <li><strong>Seaborn</strong>: Built on Matplotlib, offering higher-level abstractions for common statistical plots</li>
        <li><strong>Plotly</strong>: For interactive, web-based visualizations</li>
        <li><strong>Tableau</strong>: A powerful dedicated visualization platform</li>
        <li><strong>D3.js</strong>: For custom, web-based visualizations</li>
      </ul>
      
      <h3>Best Practices for Effective Visualization</h3>
      
      <ol>
        <li><strong>Know your audience</strong>: Tailor your visualizations to your viewers' technical proficiency</li>
        <li><strong>Choose the right visualization</strong>: Select chart types that best represent your data and the story you want to tell</li>
        <li><strong>Focus on clarity</strong>: Avoid clutter and unnecessary embellishments</li>
        <li><strong>Use color effectively</strong>: Choose appropriate color schemes and ensure accessibility</li>
        <li><strong>Label properly</strong>: Include clear titles, axis labels, and legends</li>
      </ol>
      
      <h3>Conclusion</h3>
      <p>Mastering data visualization is an ongoing journey. As you develop your skills, remember that the goal is always to communicate insights clearly and effectively. The most beautiful visualization is the one that helps your audience understand the data and make informed decisions.</p>
    `
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
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
              <p className="mb-6 text-muted-foreground">The blog post you're looking for doesn't exist.</p>
              <Button asChild variant="outline">
                <Link to="/blog">Back to Blog</Link>
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <article className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 animate-fade-in">
                <Button variant="ghost" size="sm" asChild className="mb-4 -ml-2">
                  <Link to="/blog" className="flex items-center gap-1">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>
              
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="tech-chip">
                    {post.category}
                  </Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                
                <div className="flex items-center text-sm text-muted-foreground mb-8">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <div className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none mb-8">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
                
                <div className="border-t border-border pt-6 mt-10">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">Share this article</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default BlogPost;
