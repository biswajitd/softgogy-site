import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Code, Database, Globe, Smartphone, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import softwareImage from '@/assets/software-dev.jpg';

const SoftwareDevelopment = () => {
  const tracks = [
    {
      title: "Full Stack Web Development",
      description: "Master React, Node.js, databases, and modern web technologies",
      icon: Globe,
      level: "Beginner to Advanced",
      duration: "6 Months",
      projects: 8,
      skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Mobile App Development",
      description: "Build native Android applications with Java and Kotlin",
      icon: Smartphone,
      level: "Intermediate",
      duration: "4 Months", 
      projects: 6,
      skills: ["Android Studio", "Java", "Kotlin", "XML", "SQLite", "REST APIs"]
    },
    {
      title: "Data Structures & Algorithms",
      description: "Master problem-solving and competitive programming concepts",
      icon: Code,
      level: "All Levels",
      duration: "3 Months",
      projects: 12,
      skills: ["Problem Solving", "Time Complexity", "Dynamic Programming", "Graphs", "Trees"]
    },
    {
      title: "Database Management",
      description: "Learn SQL, NoSQL, database design, and optimization techniques",
      icon: Database,
      level: "Beginner to Advanced", 
      duration: "2 Months",
      projects: 4,
      skills: ["MySQL", "MongoDB", "Database Design", "Optimization", "Indexing", "Queries"]
    }
  ];

  const benefits = [
    "Industry-standard curriculum",
    "Hands-on project portfolio",
    "Live coding sessions",
    "Code review by experts",
    "GitHub integration",
    "Job placement assistance"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={softwareImage} 
          alt="Software Development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-accent/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Software Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Learn modern programming and build real-world applications
            </p>
            <Link to="/">
              <Button variant="outline" size="lg" className="mb-4 border-white text-white hover:bg-white hover:text-secondary">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Learn Software Development With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Tracks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Learning Tracks</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center">
                        <track.icon className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{track.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">{track.level}</Badge>
                      </div>
                    </div>
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <CardDescription className="text-base mt-2">{track.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-sm">
                      <span className="font-medium text-muted-foreground">Duration:</span>
                      <div className="font-semibold">{track.duration}</div>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-muted-foreground">Projects:</span>
                      <div className="font-semibold">{track.projects} Hands-on</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {track.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/enrollment">
                    <Button className="w-full">
                      Enroll Now - It's Free!
                      <Code className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Your Learning Journey</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Foundation", desc: "Learn programming basics and concepts" },
              { step: "2", title: "Practice", desc: "Build projects and solve challenges" },
              { step: "3", title: "Portfolio", desc: "Create impressive project portfolio" },
              { step: "4", title: "Career", desc: "Get job-ready with interview prep" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-secondary to-accent p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Start Your Programming Journey Today</h3>
          <p className="text-lg mb-6 text-white/90">
            Join our community of developers and build the future with code
          </p>
          <Link to="/enrollment">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
              Enroll Now - It's Free!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;