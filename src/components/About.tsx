import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  Globe,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const achievements = [
    { number: '1000+', label: 'Students Empowered', icon: Users },
    { number: '50+', label: 'Free Courses', icon: BookOpen },
    { number: '15+', label: 'Engineering Topics', icon: Award },
    { number: '24/7', label: 'Learning Support', icon: Globe }
  ];

  const values = [
    {
      title: 'Free Education for All',
      description: 'We believe education should never be a privilege. Every marginalized student deserves access to quality learning.',
      icon: Heart
    },
    {
      title: 'Practical Learning',
      description: 'Our courses focus on hands-on experience with real-world projects and industry-relevant skills.',
      icon: Target
    },
    {
      title: 'Community Support',
      description: 'Join a supportive community of learners, mentors, and professionals who believe in your success.',
      icon: Users
    },
    {
      title: 'Industry Recognition',
      description: 'Our certificates and training programs are recognized by leading companies and educational institutions.',
      icon: Award
    }
  ];

  const features = [
    'Completely free access to all courses and materials',
    'Live mentorship sessions with industry experts',
    'Hands-on projects and real-world applications',
    'Career guidance and placement assistance',
    'Certification upon course completion',
    'Access to exclusive job opportunities',
    'Lifetime access to course materials',
    '24/7 community support and help'
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">SoftGogy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering marginalized students across India with free, world-class education in engineering, 
            software development, and financial technology.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-hero">
            <CardContent className="p-8 md:p-12 text-center">
              <Heart className="h-16 w-16 mx-auto mb-6 text-accent animate-float" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                At SoftGogy, we are dedicated to breaking down educational barriers and providing 
                completely free access to high-quality technical education. We specifically focus on 
                empowering marginalized students in India, helping them build successful careers in 
                engineering, software development, and trading.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.label}
              className="text-center hover:shadow-float transition-all duration-300 hover:-translate-y-2 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <achievement.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features & Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">SoftGogy?</span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We understand the challenges faced by marginalized students in accessing quality education. 
              That's why we've created a platform that not only provides free learning but also ensures 
              comprehensive support throughout your educational journey.
            </p>
            
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/community">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join Our Community
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="animate-fade-in">
            <h4 className="text-xl font-bold text-foreground mb-6 text-center">Student Success Stories</h4>
            <div className="space-y-6">
              {[
                {
                  name: "Priya Sharma",
                  role: "Software Developer, Bangalore",
                  quote: "SoftGogy transformed my life. Coming from a small village, I never thought I could learn software development for free. Today, I'm working as a full-stack developer at a leading tech company."
                },
                {
                  name: "Rajesh Kumar",
                  role: "Data Analyst, Mumbai",
                  quote: "The Python and data science courses at SoftGogy opened doors I never knew existed. From being unemployed to landing my dream job in 6 months!"
                },
                {
                  name: "Anita Devi",
                  role: "Mobile App Developer, Pune",
                  quote: "As a single mother from a rural area, free education seemed impossible. SoftGogy's Android development course changed everything for my family."
                },
                {
                  name: "Vikram Singh",
                  role: "Algorithmic Trader, Delhi",
                  quote: "The trading strategies I learned here helped me achieve consistent profits. From losing savings to making money - incredible transformation!"
                },
                {
                  name: "Sneha Patel",
                  role: "Electrical Engineer, Ahmedabad",
                  quote: "SoftGogy's electrical engineering courses helped me crack my GATE exam and secure admission in IIT. Free quality education that actually works!"
                },
                {
                  name: "Mohammed Rafi",
                  role: "Mechanical Design Engineer, Chennai",
                  quote: "The CAD and mechanical design courses were exactly what I needed. Now working at a top automotive company thanks to SoftGogy!"
                }
              ].map((story, index) => (
                <Card key={story.name} className="bg-gradient-card border-0 shadow-float">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <Star className="h-8 w-8 text-accent mx-auto mb-2" />
                    </div>
                    
                    <blockquote className="text-muted-foreground italic mb-4 text-center text-sm">
                      "{story.quote}"
                    </blockquote>
                    
                    <div className="text-center">
                      <div className="font-semibold text-foreground">{story.name}</div>
                      <div className="text-sm text-muted-foreground">{story.role}</div>
                      <div className="flex justify-center space-x-1 mt-2">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="h-3 w-3 text-accent fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;