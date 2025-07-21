import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Award, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import engineeringImage from '@/assets/engineering.jpg';

const Engineering = () => {
  const branches = [
    {
      title: "Electronics & Communication Engineering",
      description: "Master circuits, communication systems, signal processing, and embedded systems",
      duration: "4 Years",
      modules: 24,
      students: "2.5K+"
    },
    {
      title: "Electrical & Power Engineering", 
      description: "Learn power systems, electrical machines, control systems, and renewable energy",
      duration: "4 Years",
      modules: 26,
      students: "1.8K+"
    },
    {
      title: "Mechanical & Production Engineering",
      description: "Understand thermodynamics, manufacturing, design, and industrial automation",
      duration: "4 Years", 
      modules: 28,
      students: "3.2K+"
    },
    {
      title: "Computer Science and Engineering",
      description: "Comprehensive programming, algorithms, databases, and software engineering",
      duration: "4 Years",
      modules: 32,
      students: "4.5K+"
    }
  ];

  const features = [
    "Live Interactive Labs",
    "Industry Expert Mentorship", 
    "Real-world Project Portfolio",
    "Placement Preparation",
    "Free Certification",
    "24/7 Support Community"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={engineeringImage} 
          alt="Engineering Education"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Engineering Education
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Free comprehensive engineering courses for marginalized students across India
            </p>
            <Link to="/">
              <Button variant="secondary" size="lg" className="mb-4">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Engineering Program?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Branches */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Engineering Branches</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{branch.title}</CardTitle>
                      <CardDescription className="text-base">{branch.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-4">Free</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-sm font-medium">{branch.duration}</div>
                    </div>
                    <div className="text-center">
                      <BookOpen className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-sm font-medium">{branch.modules} Modules</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-sm font-medium">{branch.students} Students</div>
                    </div>
                  </div>
                  <Button className="w-full">
                    Start Learning
                    <Award className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Engineering Journey?</h3>
          <p className="text-lg mb-6 text-white/90">
            Join thousands of students already learning with SoftGogy's free engineering courses
          </p>
          <Link to="/enroll">
            <Button size="lg" variant="secondary">
              Enroll Now - It's Free!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Engineering;