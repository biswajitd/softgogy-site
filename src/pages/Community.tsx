import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Trophy, 
  BookOpen,
  Share2,
  UserPlus,
  ArrowLeft,
  Star,
  Calendar,
  Video,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Community = () => {
  const communityStats = [
    { number: "5,000+", label: "Active Members", icon: Users },
    { number: "500+", label: "Daily Discussions", icon: MessageCircle },
    { number: "200+", label: "Study Groups", icon: BookOpen },
    { number: "50+", label: "Expert Mentors", icon: Trophy }
  ];

  const upcomingEvents = [
    {
      title: "Python Bootcamp - Live Session",
      date: "Every Saturday 7 PM IST",
      type: "Online Workshop",
      participants: 150
    },
    {
      title: "Engineering Career Guidance",
      date: "Every Sunday 6 PM IST",
      type: "Mentorship Session",
      participants: 80
    },
    {
      title: "Trading Strategy Discussion",
      date: "Every Wednesday 8 PM IST",
      type: "Expert Talk",
      participants: 120
    }
  ];

  const communityChannels = [
    {
      name: "💻 Software Development",
      description: "Share code, get help, discuss latest technologies",
      members: "1,200+ members"
    },
    {
      name: "⚡ Engineering Hub",
      description: "Circuit designs, project ideas, technical discussions",
      members: "900+ members"
    },
    {
      name: "📈 Trading & Finance",
      description: "Market analysis, trading strategies, financial insights",
      members: "800+ members"
    },
    {
      name: "📱 Android Development",
      description: "App development, UI/UX tips, Google Play discussions",
      members: "600+ members"
    },
    {
      name: "🎯 Career Guidance",
      description: "Job opportunities, interview prep, career advice",
      members: "1,500+ members"
    },
    {
      name: "🎓 Study Groups",
      description: "Form study groups, share notes, exam preparation",
      members: "700+ members"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/">
              <Button variant="outline" size="sm" className="mb-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-accent">Community</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Connect with thousands of students, mentors, and professionals in our vibrant learning community. 
              Share knowledge, get help, and grow together!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={stat.label} className="text-center hover:shadow-float transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Community Channels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityChannels.map((channel, index) => (
              <Card key={channel.name} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>{channel.name}</span>
                    <UserPlus className="h-5 w-5 text-primary" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{channel.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">{channel.members}</Badge>
                    <Link to="/channel-details">
                      <Button size="sm">Join Channel</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Community Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={event.title} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                    <Video className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-medium mb-2">{event.date}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {event.participants} participants expected
                  </p>
                  <Link to="/event-details">
                    <Button className="w-full">Join Event</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Community Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Heart className="mr-3 h-6 w-6 text-primary" />
                Join Our Community
              </CardTitle>
              <p className="text-muted-foreground">
                Become part of India's largest free education community. Connect, learn, and grow with us!
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interests">Areas of Interest</Label>
                <Input id="interests" placeholder="e.g., Software Development, Engineering, Trading" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Current Experience Level</Label>
                <Input id="experience" placeholder="e.g., Beginner, Intermediate, Advanced" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goals">Your Learning Goals</Label>
                <Textarea 
                  id="goals" 
                  placeholder="Tell us what you hope to achieve through our community..."
                  className="min-h-[100px]"
                />
              </div>
              
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => {
                  alert("Succeeded, we will contact you soon.");
                }}
              >
                Join Community Now
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-gradient-card border-0">
              <CardContent className="p-8 text-center">
                <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Global Learning Network</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with learners from across India and around the world. Share experiences, 
                  collaborate on projects, and build lasting professional relationships.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">States Represented</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Countries Joined</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Star className="h-5 w-5 text-accent mr-2" />
                  Community Benefits
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Share2 className="h-4 w-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                    Share projects and get feedback from experts
                  </li>
                  <li className="flex items-start">
                    <MessageCircle className="h-4 w-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                    24/7 help and support from community members
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-4 w-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                    Access to exclusive study materials and resources
                  </li>
                  <li className="flex items-start">
                    <Trophy className="h-4 w-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                    Participate in coding challenges and competitions
                  </li>
                  <li className="flex items-start">
                    <Users className="h-4 w-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                    Network with industry professionals and mentors
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;