import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cpu, 
  Code, 
  TrendingUp, 
  Smartphone, 
  GraduationCap, 
  BookOpen,
  ArrowRight,
  Zap,
  Settings,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import softwareImage from '@/assets/software-dev.jpg';
import engineeringImage from '@/assets/engineering.jpg';
import tradingImage from '@/assets/trading.jpg';

const Services = () => {
  const services = [
    {
      id: 'engineering',
      title: 'Engineering Education',
      description: 'Comprehensive courses for all engineering branches with practical labs and project guidance.',
      icon: Cpu,
      image: engineeringImage,
      branches: [
        'Electronics & Communication Engineering',
        'Electrical & Power Engineering', 
        'Mechanical & Production Engineering',
        'Computer Science and Engineering'
      ],
      features: ['Live Labs', 'Project Guidance', 'Industry Mentors', 'Placement Prep']
    },
    {
      id: 'software',
      title: 'Software Development',
      description: 'Learn modern programming languages, frameworks, and development methodologies.',
      icon: Code,
      image: softwareImage,
      branches: [
        'Web Development (React, Node.js)',
        'Mobile App Development (Android)', 
        'Data Structures & Algorithms',
        'System Design & Architecture'
      ],
      features: ['Hands-on Projects', 'Code Reviews', 'Industry Tools', 'Portfolio Building']
    },
    {
      id: 'trading',
      title: 'Trading & Finance',
      description: 'Master algorithmic trading, market analysis, and financial technology.',
      icon: TrendingUp,
      image: tradingImage,
      branches: [
        'Algorithmic Trading Strategies',
        'Market Analysis & Research',
        'Risk Management Techniques',
        'Trading Psychology & Discipline'
      ],
      features: ['Live Trading', 'Market Simulators', 'Expert Mentorship', 'Strategy Testing']
    }
  ];

  const additionalServices = [
    {
      title: 'Android Apps Development',
      description: 'Learn to build native Android applications with Java and Kotlin',
      icon: Smartphone,
      color: 'secondary'
    },
    {
      title: 'Engineering Admission Prep',
      description: 'Comprehensive preparation for JEE, GATE, and other entrance exams',
      icon: GraduationCap,
      color: 'trust'
    },
    {
      title: 'Online Tutorials',
      description: 'Interactive video lessons and hands-on coding exercises',
      icon: BookOpen,
      color: 'accent'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Free</span> Educational Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive learning paths designed specifically for marginalized students in India. 
            All courses are completely free and include certification.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-float transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                <div className="absolute top-4 right-4">
                  <div className="h-12 w-12 bg-card rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-2">Course Branches:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.branches.map((branch, idx) => (
                      <li key={idx} className="flex items-center">
                        <Zap className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                        {branch}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link to="/enrollment">
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Enroll Now - It's Free!
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border border-border"
              style={{ animationDelay: `${(index + 3) * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className={`h-16 w-16 mx-auto rounded-xl flex items-center justify-center mb-4 bg-${service.color}`}>
                  <service.icon className={`h-8 w-8 text-${service.color}-foreground`} />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/enrollment">
                  <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                    Enroll Now - It's Free!
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;