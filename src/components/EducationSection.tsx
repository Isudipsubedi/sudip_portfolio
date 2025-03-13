
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function EducationSection() {
  const educations = [
    {
      id: 1,
      institution: "Kathmandu University",
      degree: "Bachelor of Engineering in Computer Engineering",
      location: "Dhulikhel, Kavre",
      period: "Feb 2021 - Present",
      courses: "Data Structures & Algorithms, Database Management Systems, Cloud Computing, Artificial Intelligence, C, C++, Operating Systems, Software Engineering, System Analysis & Design, Communication & Networking, Information System Ethics",
    },
    {
      id: 2,
      institution: "SOS Herman Gmeiner School",
      degree: "+2 Science",
      location: "Bharatpur, Chitwan",
      period: "2019 - 2021",
      courses: "",
    },
  ];

  const achievementsAndCompetitions = [
    {
      id: 1,
      title: "IT Meet 2024 AI Competition: Winner",
      description: "Designed and implemented an AI-driven system for real-time face tracking and dynamic head movement prioritization, leveraging computer vision and Raspberry Pi for seamless multi-user engagement.",
    },
    {
      id: 2,
      title: "KU HackFest 2024",
      description: "We digitalized a concept of microloan services in the form of SapatiSewa and were selected in the category \"Best UI design\".",
    },
    {
      id: 3,
      title: "KU HackFest 2023",
      description: "Our team built a mobile application SmartKagaj aimed to simplify paperless contract signing and authentication and won the \"Best Use of Redis\" award.",
    },
    {
      id: 4,
      title: "Virtual Internship",
      description: "Completed Data Science Job Simulation by British Airways / Forage which included Web scraping to gain company insights and Predicting customer buying behavior.",
    },
  ];

  const certifications = [
    "Associate Data Analyst, Datacamp",
    "AWS Cloud Practitioner (CLF_C02), KodeKloud",
    "DevOps Pre-Requisite Course, KodeKloud",
    "Linux Basic Course, KodeKloud",
    "AI Associate, Salesforce",
    "PCAP - Python Certification Course, KodeKloud",
    "Introduction to Python OpenCV, Simplilearn",
    "Professional Diploma in Agile and Project Management, Udemy",
  ];

  const leadership = [
    {
      role: "President",
      organization: "Geetanagar Junior Jaycees",
      year: "2022",
    },
    {
      role: "Event Manager",
      organization: "IT MEET Mock Placement",
      year: "",
    },
    {
      role: "College Ambassador",
      organization: "Idea Studio Nepal",
      organization2: "KU",
      year: "",
    },
  ];

  return (
    <section id="education" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Education & Achievements</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {educations.map((education) => (
                  <Card key={education.id} className="bg-background/60 backdrop-blur-sm card-hover border border-border/50">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <CardTitle className="text-xl">{education.institution}</CardTitle>
                          <CardDescription className="text-lg font-medium mt-1">{education.degree}</CardDescription>
                        </div>
                        <div className="text-sm md:text-right whitespace-nowrap">
                          <div className="text-muted-foreground">{education.location}</div>
                          <div className="font-medium">{education.period}</div>
                        </div>
                      </div>
                    </CardHeader>
                    {education.courses && (
                      <CardContent>
                        <div>
                          <h4 className="font-semibold mb-2">Relevant Coursework</h4>
                          <p className="text-muted-foreground">{education.courses}</p>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Achievements & Competitions</h3>
              <Card className="bg-background/60 backdrop-blur-sm border border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {achievementsAndCompetitions.map((item) => (
                      <div key={item.id} className="timeline-item">
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                <Card className="bg-background/60 backdrop-blur-sm h-full border border-border/50">
                  <CardContent className="p-6">
                    <ul className="list-disc pl-5 space-y-2">
                      {certifications.map((cert, index) => (
                        <li key={index} className="text-muted-foreground">{cert}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Leadership</h3>
                <Card className="bg-background/60 backdrop-blur-sm h-full border border-border/50">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {leadership.map((item, index) => (
                        <div key={index} className="flex flex-col">
                          <h4 className="font-semibold">{item.role}</h4>
                          <p className="text-muted-foreground">
                            {item.organization}
                            {item.organization2 && <span> • {item.organization2}</span>}
                            {item.year && <span> • {item.year}</span>}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
