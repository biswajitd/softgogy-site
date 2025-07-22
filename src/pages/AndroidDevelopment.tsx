import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  Smartphone,
  Code,
  Clock,
  Users,
  Star,
  Download,
  Play,
  BookOpen,
  Award,
  Zap,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AndroidDevelopment = () => {
  const courses = [
    {
      title: "Android Development Fundamentals",
      description: "Master the basics of Android app development with Java and Kotlin",
      duration: "8 weeks",
      level: "Beginner",
      students: "2,500+",
      rating: 4.8,
      modules: [
        "Android Studio Setup & Interface",
        "Activity & Fragment Lifecycle", 
        "UI Design with XML Layouts",
        "Event Handling & User Input",
        "Data Storage & SharedPreferences",
        "Networking & API Integration",
        "Testing & Debugging",
        "Publishing to Google Play Store"
      ],
      projects: [
        "Calculator App",
        "Weather Information App", 
        "To-Do List with Database",
        "Social Media Feed App"
      ]
    },
    {
      title: "Advanced Android Development", 
      description: "Build complex apps with advanced features and modern architecture",
      duration: "10 weeks",
      level: "Intermediate",
      students: "1,800+",
      rating: 4.9,
      modules: [
        "MVVM Architecture Pattern",
        "Room Database & LiveData",
        "Dependency Injection with Dagger",
        "Custom Views & Animations",
        "Background Processing & Services",
        "Push Notifications & Firebase",
        "Camera & Media Integration",
        "App Performance Optimization"
      ],
      projects: [
        "E-commerce Shopping App",
        "Real-time Chat Application",
        "Photo Sharing Social App",
        "Fitness Tracking App"
      ]
    },
    {
      title: "Kotlin for Android Development",
      description: "Learn modern Android development using Kotlin programming language",
      duration: "6 weeks", 
      level: "Beginner to Intermediate",
      students: "3,200+",
      rating: 4.7,
      modules: [
        "Kotlin Syntax & Fundamentals",
        "Object-Oriented Programming in Kotlin",
        "Kotlin Collections & Lambda Functions",
        "Coroutines for Asynchronous Programming",
        "Kotlin Android Extensions",
        "Interoperability with Java",
        "Modern Android Development with Jetpack",
        "Building Material Design Apps"
      ],
      projects: [
        "News Reader App",
        "Music Player Application",
        "Expense Tracker App", 
        "Recipe Sharing Platform"
      ]
    },
    {
      title: "Android UI/UX Design Mastery",
      description: "Create beautiful and intuitive user interfaces for Android apps",
      duration: "5 weeks",
      level: "Beginner",
      students: "1,900+", 
      rating: 4.6,
      modules: [
        "Material Design Principles",
        "Layout Design & Responsive UI",
        "Color Theory & Typography",
        "Navigation Patterns & User Flow",
        "Animations & Micro-interactions",
        "Accessibility Best Practices",
        "Design Tools & Prototyping",
        "User Testing & Feedback"
      ],
      projects: [
        "Travel Booking App UI",
        "Banking App Interface",
        "Food Delivery App Design",
        "Educational App Wireframes"
      ]
    }
  ];

  const careerPaths = [
    {
      title: "Android Developer",
      salary: "₹6-15 LPA",
      description: "Build mobile applications for Android platform",
      skills: ["Java/Kotlin", "Android SDK", "XML", "REST APIs"]
    },
    {
      title: "Mobile App Developer",
      salary: "₹8-20 LPA", 
      description: "Develop cross-platform and native mobile applications",
      skills: ["Android", "iOS", "React Native", "Flutter"]
    },
    {
      title: "Android Team Lead",
      salary: "₹15-30 LPA",
      description: "Lead development teams and architect mobile solutions",
      skills: ["Leadership", "Architecture", "Code Review", "Mentoring"]
    },
    {
      title: "Mobile App Architect",
      salary: "₹20-40 LPA",
      description: "Design scalable mobile application architectures",
      skills: ["System Design", "Microservices", "Cloud", "DevOps"]
    }
  ];

  const tools = [
    { name: "Android Studio", description: "Official IDE for Android development" },
    { name: "Kotlin", description: "Modern programming language for Android" },
    { name: "Firebase", description: "Backend services and analytics platform" },
    { name: "Git", description: "Version control and collaborative development" },
    { name: "Gradle", description: "Build automation and dependency management" },
    { name: "Material Design", description: "Google's design system for Android" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/android-apps">
            <Button variant="outline" size="sm" className="mb-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Android Apps
            </Button>
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Smartphone className="h-12 w-12 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold">Android Development Courses</h1>
            </div>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Master Android app development from beginner to advanced level. Learn to build 
              modern, scalable mobile applications with the latest tools and best practices.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users className="mr-1 h-4 w-4" />
                9,400+ Students Enrolled
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Star className="mr-1 h-4 w-4" />
                4.8/5 Average Rating
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Award className="mr-1 h-4 w-4" />
                Industry Recognized
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Course Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BookOpen className="mr-3 h-6 w-6 text-primary" />
                Complete Android Development Track
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive Android development program takes you from absolute beginner to 
                professional Android developer. You'll learn to build real-world applications using 
                modern development practices, industry-standard tools, and the latest Android features.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">29 Weeks</div>
                  <div className="text-sm text-muted-foreground">Total Duration</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Code className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold">15+ Projects</div>
                  <div className="text-sm text-muted-foreground">Hands-on Practice</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Target className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">Job Assistance</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">FREE</div>
                <div className="text-sm text-muted-foreground mb-4">Complete Access</div>
              </div>
              
              <Link to="/enrollment">
                <Button className="w-full mb-3">
                  Enroll Now - It's Free!
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Button variant="outline" className="w-full">
                <Play className="mr-2 h-4 w-4" />
                Preview Course
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                ✓ Lifetime Access<br />
                ✓ Certificate of Completion<br />
                ✓ Industry Mentorship<br />
                ✓ Job Placement Support
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Individual Courses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Course Modules</h2>
          <div className="space-y-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                          <p className="text-muted-foreground mb-4">{course.description}</p>
                        </div>
                        <Badge variant="outline" className="text-sm">{course.level}</Badge>
                      </div>
                      
                      <div className="flex items-center space-x-6 mb-6">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{course.students} enrolled</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-accent" />
                          <span className="text-sm">{course.rating}/5</span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                          <ul className="space-y-2">
                            {course.modules.slice(0, 4).map((module, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{module}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Projects You'll Build:</h4>
                          <ul className="space-y-2">
                            {course.projects.map((project, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="h-1.5 w-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center lg:text-left">
                      <div className="bg-muted rounded-lg p-6">
                        <div className="text-2xl font-bold text-primary mb-2">FREE</div>
                        <div className="text-sm text-muted-foreground mb-4">Complete Course</div>
                        
                        <Link to="/enrollment">
                          <Button className="w-full mb-3">
                            Start Learning
                          </Button>
                        </Link>
                        
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div>✓ {course.modules.length} Comprehensive Modules</div>
                          <div>✓ {course.projects.length} Real-world Projects</div>
                          <div>✓ Live Coding Sessions</div>
                          <div>✓ 1-on-1 Mentorship</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Tools & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Career Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {careerPaths.map((career, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{career.title}</CardTitle>
                    <Badge variant="secondary" className="text-sm">{career.salary}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{career.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidDevelopment;