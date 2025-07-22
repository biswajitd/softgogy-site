import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  MessageCircle, 
  ArrowLeft,
  Hash,
  Pin,
  Star,
  Calendar,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ChannelDetails = () => {
  const channelInfo = {
    name: "💻 Software Development",
    description: "Share code, get help, discuss latest technologies, and collaborate on projects",
    members: "1,200+ members",
    category: "Technical Discussion",
    tags: ["Programming", "Web Development", "Mobile Apps", "DevOps", "AI/ML"]
  };

  const pinnedPosts = [
    {
      title: "Welcome to Software Development Channel!",
      author: "Admin Team",
      content: "Rules and guidelines for productive discussions",
      reactions: 45
    },
    {
      title: "Weekly Coding Challenge #47",
      author: "Challenge Bot",
      content: "Build a responsive dashboard using React and Tailwind CSS",
      reactions: 89
    },
    {
      title: "Free Resources Collection",
      author: "Resource Team",
      content: "Curated list of free coding tutorials, books, and tools",
      reactions: 156
    }
  ];

  const recentDiscussions = [
    {
      title: "Best practices for React state management in 2024?",
      author: "Rahul K.",
      replies: 23,
      lastActivity: "2 hours ago"
    },
    {
      title: "Help needed: API integration in Node.js",
      author: "Priya S.",
      replies: 12,
      lastActivity: "4 hours ago"
    },
    {
      title: "Sharing my first full-stack project - feedback welcome!",
      author: "Amit J.",
      replies: 34,
      lastActivity: "6 hours ago"
    },
    {
      title: "Which database to choose for a social media app?",
      author: "Sneha M.",
      replies: 18,
      lastActivity: "8 hours ago"
    }
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
          
          <div className="flex items-center space-x-4 mb-4">
            <Hash className="h-8 w-8 text-accent" />
            <h1 className="text-3xl md:text-4xl font-bold">{channelInfo.name}</h1>
          </div>
          
          <p className="text-xl text-primary-foreground/90 mb-6 max-w-3xl">
            {channelInfo.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="secondary" className="text-sm">
              <Users className="mr-1 h-4 w-4" />
              {channelInfo.members}
            </Badge>
            <Badge variant="outline" className="text-sm border-primary-foreground text-primary-foreground">
              {channelInfo.category}
            </Badge>
            {channelInfo.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-accent text-accent">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pinned Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Pin className="mr-2 h-6 w-6 text-primary" />
                Pinned Posts
              </h2>
              <div className="space-y-4">
                {pinnedPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-card transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                        <Badge variant="outline" className="text-xs">Pinned</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{post.content}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">by {post.author}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-accent" />
                          <span className="text-sm">{post.reactions}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Discussions */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MessageCircle className="mr-2 h-6 w-6 text-primary" />
                Recent Discussions
              </h2>
              <div className="space-y-4">
                {recentDiscussions.map((discussion, index) => (
                  <Card key={index} className="hover:shadow-card transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Started by {discussion.author}</span>
                        <div className="flex items-center space-x-4">
                          <span>{discussion.replies} replies</span>
                          <div className="flex items-center space-x-1">
                            <Activity className="h-4 w-4" />
                            <span>{discussion.lastActivity}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Channel Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Members</h4>
                  <p className="text-2xl font-bold text-primary">{channelInfo.members}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Category</h4>
                  <Badge variant="secondary">{channelInfo.category}</Badge>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Channel Rules</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Be respectful and helpful</li>
                    <li>• Search before asking questions</li>
                    <li>• Share knowledge and resources</li>
                    <li>• No spam or self-promotion</li>
                  </ul>
                </div>
                <Button className="w-full">
                  Join Discussion
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-l-2 border-primary pl-3">
                    <h4 className="font-medium">Code Review Session</h4>
                    <p className="text-sm text-muted-foreground">Today, 8:00 PM IST</p>
                  </div>
                  <div className="border-l-2 border-secondary pl-3">
                    <h4 className="font-medium">React Workshop</h4>
                    <p className="text-sm text-muted-foreground">Tomorrow, 7:00 PM IST</p>
                  </div>
                  <div className="border-l-2 border-accent pl-3">
                    <h4 className="font-medium">Open Source Contribution</h4>
                    <p className="text-sm text-muted-foreground">This Weekend</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelDetails;