
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      role: "Data Science Fellow",
      company: "Fellowship.ai",
      location: "San Francisco (Remote)",
      period: "Jan 2023 - Present",
      description: [
        "Developing and deploying LLM-powered web agents using Python (BeautifulSoup, Scrapy) and UI-TARS for real-time, automated data scraping and UI interaction, with data efficiently stored in SQL databases.",
        "Building and optimizing data pipelines for cleaning, structuring, and analyzing extracted information, leveraging techniques like sentence embeddings to enhance retrieval accuracy and streamline data flow."
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Professional Experience</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((experience) => (
              <Card key={experience.id} className="bg-background/60 backdrop-blur-sm card-hover border border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <CardTitle className="text-xl md:text-2xl">{experience.role}</CardTitle>
                      <CardDescription className="text-lg font-medium mt-1">{experience.company}</CardDescription>
                    </div>
                    <div className="text-sm md:text-right">
                      <div className="text-muted-foreground">{experience.location}</div>
                      <div className="font-medium">{experience.period}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {experience.description.map((item, index) => (
                      <li key={index} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
