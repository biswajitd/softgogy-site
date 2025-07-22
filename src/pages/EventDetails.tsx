import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin,
  ArrowLeft,
  Video,
  Star,
  Share2,
  Bell,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  const event = {
    title: "Python Bootcamp - Live Session",
    description: "Comprehensive Python programming bootcamp covering fundamentals to advanced concepts",
    date: "Every Saturday",
    time: "7:00 PM IST",
    duration: "2 hours",
    type: "Online Workshop",
    instructor: "Dr. Rajesh Kumar",
    participants: 150,
    maxParticipants: 200,
    difficulty: "Beginner to Intermediate",
    tags: ["Python", "Programming", "Bootcamp", "Live Session"]
  };

  const eventSchedule = [
    {
      time: "7:00 - 7:15 PM",
      topic: "Welcome & Introduction",
      description: "Introduction to the session and Q&A from previous week"
    },
    {
      time: "7:15 - 8:00 PM",
      topic: "Core Concepts",
      description: "Deep dive into Python fundamentals and practical examples"
    },
    {
      time: "8:00 - 8:30 PM",
      topic: "Hands-on Coding",
      description: "Live coding session with real-world projects"
    },
    {
      time: "8:30 - 9:00 PM",
      topic: "Q&A & Wrap-up",
      description: "Answer questions and assign homework for the week"
    }
  ];

  const upcomingTopics = [
    {
      week: "Week 1",
      topic: "Python Basics & Syntax",
      date: "Jan 13, 2024"
    },
    {
      week: "Week 2", 
      topic: "Data Structures & Functions",
      date: "Jan 20, 2024"
    },
    {
      week: "Week 3",
      topic: "Object-Oriented Programming",
      date: "Jan 27, 2024"
    },
    {
      week: "Week 4",
      topic: "Web Development with Flask",
      date: "Feb 3, 2024"
    }
  ];

  const prerequisites = [
    "Basic computer knowledge",
    "Enthusiasm to learn programming",
    "Internet connection for live session",
    "No prior programming experience required"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/community">
            <Button variant="outline" size="sm" className="mb-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Community
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Video className="h-6 w-6 text-accent" />
                <Badge variant="secondary" className="text-sm">{event.type}</Badge>
                <Badge variant="outline" className="text-sm border-accent text-accent">{event.difficulty}</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
              <p className="text-xl text-primary-foreground/90 mb-6">{event.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>{event.time} ({event.duration})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-accent" />
                  <span>{event.participants}/{event.maxParticipants} registered</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-primary-foreground text-primary-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Join Live Session</h3>
                  <p className="text-muted-foreground mb-4">
                    Interactive learning with live Q&A and hands-on coding
                  </p>
                  <Button className="w-full mb-3">
                    Register for Event
                    <Bell className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Event
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Schedule */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="mr-2 h-6 w-6 text-primary" />
                Event Schedule
              </h2>
              <div className="space-y-4">
                {eventSchedule.map((item, index) => (
                  <Card key={index} className="hover:shadow-card transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Badge variant="outline" className="font-mono">
                            {item.time}
                          </Badge>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{item.topic}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Topics */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="mr-2 h-6 w-6 text-primary" />
                Upcoming Topics
              </h2>
              <div className="space-y-3">
                {upcomingTopics.map((topic, index) => (
                  <Card key={index} className="hover:shadow-card transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Badge variant="secondary" className="mb-2">{topic.week}</Badge>
                          <h3 className="font-semibold">{topic.topic}</h3>
                        </div>
                        <span className="text-sm text-muted-foreground">{topic.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instructor Info */}
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Instructor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{event.instructor}</h3>
                    <p className="text-sm text-muted-foreground">Senior Python Developer</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  10+ years of experience in Python development and teaching. 
                  Former software engineer at top tech companies.
                </p>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-accent" />
                  <Star className="h-4 w-4 text-accent" />
                  <Star className="h-4 w-4 text-accent" />
                  <Star className="h-4 w-4 text-accent" />
                  <Star className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground ml-2">4.9/5 (200+ reviews)</span>
                </div>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Event Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Event Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Registered</span>
                  <span className="font-semibold">{event.participants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available Spots</span>
                  <span className="font-semibold text-primary">{event.maxParticipants - event.participants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold">{event.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Format</span>
                  <span className="font-semibold">{event.type}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;