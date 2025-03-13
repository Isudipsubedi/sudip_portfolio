
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <Avatar className="h-48 w-48 border-4 border-background shadow-lg">
                <AvatarImage src="https://github.com/tsudipsubedi.png" alt="Sudip Subedi" />
                <AvatarFallback className="text-4xl">SS</AvatarFallback>
              </Avatar>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-4">
                <Card className="bg-background/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <p className="text-lg leading-relaxed">
                      Computer engineering undergraduate at Kathmandu University, skilled in SQL, Python, JavaScript and cloud technologies.
                      Experienced in Data Analytics, Databases and full-stack web development, working with multiple innovative projects.
                      Strong team player with attention to detail, looking to apply technical expertise in real life projects.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="font-medium mb-2">Contact Information</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="font-semibold mr-2">Email:</span>
                        <a href="mailto:subedisudip01@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                          subedisudip01@gmail.com
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="font-semibold mr-2">Phone:</span>
                        <a href="tel:+9779866361005" className="hover:underline">
                          +977 9866361005
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="font-semibold mr-2">Location:</span>
                        <span>Kathmandu, Nepal</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Current Position</h4>
                    <p className="mb-2">
                      <span className="font-semibold">Data Science Fellow</span> at Fellowship.ai
                    </p>
                    <p className="text-muted-foreground">
                      San Francisco (Remote) 
                      <p> 
                      Jan 2024 - Present
                      </p>    
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
