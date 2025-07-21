import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  Globe
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'biswajit@softgogy.com',
      subtitle: 'Get answers within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98300 46647',
      subtitle: 'Mon-Fri: 9 AM - 6 PM IST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Kolkata, India',
      subtitle: 'Serving students across India'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      details: '24/7 Online Support',
      subtitle: 'Community help always available'
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with fellow students and mentors',
      action: 'Join Community'
    },
    {
      icon: Globe,
      title: 'Help Center',
      description: 'Browse FAQs and learning resources',
      action: 'Visit Help Center'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get <span className="text-primary">In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our free courses? Need help getting started? 
            We're here to support your educational journey every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="hover:shadow-float transition-all duration-300 hover:-translate-y-1 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-primary font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-6">
          {supportChannels.map((channel, index) => (
            <Card 
              key={channel.title}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 text-center"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                  <channel.icon className="h-8 w-8 text-secondary-foreground group-hover:text-accent-foreground transition-colors" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {channel.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {channel.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  {channel.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-hero">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Free Learning Journey?
              </h3>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Join thousands of students who are already transforming their lives with our free courses. 
                No hidden fees, no barriers - just quality education for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/enrollment">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Enroll Now - It's Free!
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Explore All Courses
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;