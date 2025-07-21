import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Smartphone, Download, Code, Star, Users, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AndroidApps = () => {
  const apps = [
    {
      name: "SoftGogy Learning Hub",
      description: "Complete mobile learning platform with offline course access and progress tracking",
      category: "Education",
      downloads: "10K+",
      rating: 4.8,
      features: ["Offline Learning", "Progress Tracking", "Interactive Quizzes", "Video Lectures"],
      technologies: ["Java", "SQLite", "Material Design", "MVP Architecture"]
    },
    {
      name: "Trading Assistant Pro",
      description: "Real-time market monitoring and trading strategy alerts for algorithmic traders",
      category: "Finance", 
      downloads: "5K+",
      rating: 4.6,
      features: ["Real-time Alerts", "Portfolio Tracking", "Strategy Backtesting", "Market News"],
      technologies: ["Kotlin", "Retrofit", "Room Database", "Firebase"]
    },
    {
      name: "Engineering Calculator Pro",
      description: "Advanced scientific calculator with engineering formulas and unit conversions",
      category: "Productivity",
      downloads: "25K+", 
      rating: 4.9,
      features: ["Scientific Functions", "Unit Converter", "Formula Library", "History Tracking"],
      technologies: ["Java", "Custom Views", "Math Engine", "Material UI"]
    },
    {
      name: "Code Practice Arena",
      description: "Practice coding problems and algorithms on your mobile device with syntax highlighting",
      category: "Developer Tools",
      downloads: "8K+",
      rating: 4.7,
      features: ["Code Editor", "Syntax Highlighting", "Problem Sets", "Solution Tracking"],
      technologies: ["Kotlin", "CodeMirror", "Custom Keyboard", "Local Storage"]
    }
  ];

  const learningTopics = [
    {
      title: "Android Development Basics",
      description: "Learn Activities, Fragments, Layouts, and fundamental Android concepts",
      duration: "4 Weeks",
      difficulty: "Beginner"
    },
    {
      title: "Advanced Android Programming", 
      description: "Master Services, Broadcast Receivers, Content Providers, and Architecture patterns",
      duration: "6 Weeks",
      difficulty: "Advanced"
    },
    {
      title: "Kotlin for Android",
      description: "Modern Android development with Kotlin language features and best practices",
      duration: "3 Weeks", 
      difficulty: "Intermediate"
    },
    {
      title: "App Publishing & Monetization",
      description: "Learn to publish apps on Google Play Store and implement monetization strategies",
      duration: "2 Weeks",
      difficulty: "Intermediate"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-accent via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <Smartphone className="h-16 w-16 mx-auto mb-4 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Android App Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Learn to build professional Android apps and explore our featured applications
            </p>
            <Link to="/">
              <Button variant="outline" size="lg" className="mb-4 border-white text-white hover:bg-white hover:text-accent">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Apps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Our Featured Android Apps</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Explore our collection of educational and productivity apps designed specifically for students and professionals
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CardTitle className="text-xl">{app.name}</CardTitle>
                        <Badge variant="secondary">{app.category}</Badge>
                      </div>
                      <CardDescription className="text-base">{app.description}</CardDescription>
                    </div>
                    <div className="text-right ml-4">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{app.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Download className="h-4 w-4" />
                        <span>{app.downloads}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {app.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Built With:</h4>
                    <div className="flex flex-wrap gap-1">
                      {app.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/enrollment">
                    <Button className="w-full">
                      Enroll Now - It's Free!
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Android Development Learning Path</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {learningTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                      <CardDescription className="mt-2">{topic.description}</CardDescription>
                    </div>
                    <Badge variant={topic.difficulty === 'Beginner' ? 'secondary' : topic.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                      {topic.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Duration: {topic.duration}</span>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Free Access</span>
                    </div>
                  </div>
                  <Link to="/enrollment">
                    <Button className="w-full">
                      Enroll Now - It's Free!
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Development Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Android Studio Setup", desc: "Complete IDE setup guide and configuration", icon: Code },
              { title: "Project Templates", desc: "Ready-to-use project templates and boilerplates", icon: Smartphone },
              { title: "Code Examples", desc: "Comprehensive code samples and best practices", icon: PlayCircle }
            ].map((resource, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all">
                <resource.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{resource.desc}</p>
                <Link to="/enrollment">
                  <Button variant="outline" size="sm">Enroll Now - It's Free!</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-accent to-secondary p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Your First Android App?</h3>
          <p className="text-lg mb-6 text-white/90">
            Join our comprehensive Android development course and create amazing mobile applications
          </p>
          <Link to="/enrollment">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
              Enroll Now - It's Free!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AndroidApps;