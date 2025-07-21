import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award,
  ArrowLeft,
  Play,
  Download,
  CheckCircle,
  Star,
  Zap,
  Target,
  Cpu,
  Code,
  TrendingUp,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courseCategories = [
    {
      id: 'engineering',
      title: 'Engineering Courses',
      description: 'Comprehensive engineering education for all branches',
      icon: Cpu,
      color: 'primary',
      courses: [
        {
          title: 'Electronics & Communication Engineering',
          description: 'Digital circuits, communication systems, signal processing',
          duration: '6 Months',
          lessons: 48,
          level: 'Intermediate',
          enrolled: '1,200+ students'
        },
        {
          title: 'Electrical & Power Engineering',
          description: 'Power systems, control systems, electrical machines',
          duration: '5 Months',
          lessons: 40,
          level: 'Beginner',
          enrolled: '900+ students'
        },
        {
          title: 'Mechanical Engineering',
          description: 'Thermodynamics, fluid mechanics, machine design',
          duration: '6 Months',
          lessons: 45,
          level: 'Intermediate',
          enrolled: '800+ students'
        },
        {
          title: 'Computer Science Engineering',
          description: 'Data structures, algorithms, software engineering',
          duration: '8 Months',
          lessons: 60,
          level: 'Beginner',
          enrolled: '2,000+ students'
        }
      ]
    },
    {
      id: 'software',
      title: 'Software Development',
      description: 'Modern programming and development skills',
      icon: Code,
      color: 'secondary',
      courses: [
        {
          title: 'Full Stack Web Development',
          description: 'React, Node.js, databases, deployment',
          duration: '4 Months',
          lessons: 35,
          level: 'Intermediate',
          enrolled: '1,500+ students'
        },
        {
          title: 'Python Programming Masterclass',
          description: 'Python basics to advanced, data science, automation',
          duration: '3 Months',
          lessons: 30,
          level: 'Beginner',
          enrolled: '2,500+ students'
        },
        {
          title: 'Data Structures & Algorithms',
          description: 'Problem solving, coding interviews, competitive programming',
          duration: '5 Months',
          lessons: 50,
          level: 'Advanced',
          enrolled: '1,800+ students'
        },
        {
          title: 'Mobile App Development',
          description: 'Android development with Java and Kotlin',
          duration: '4 Months',
          lessons: 32,
          level: 'Intermediate',
          enrolled: '1,200+ students'
        }
      ]
    },
    {
      id: 'trading',
      title: 'Trading & Finance',
      description: 'Financial markets and trading strategies',
      icon: TrendingUp,
      color: 'accent',
      courses: [
        {
          title: 'Algorithmic Trading Fundamentals',
          description: 'Trading basics, market analysis, strategy development',
          duration: '6 Weeks',
          lessons: 24,
          level: 'Beginner',
          enrolled: '600+ students'
        },
        {
          title: 'Technical Analysis Mastery',
          description: 'Chart patterns, indicators, trading psychology',
          duration: '8 Weeks',
          lessons: 32,
          level: 'Intermediate',
          enrolled: '800+ students'
        },
        {
          title: 'Risk Management & Portfolio',
          description: 'Risk assessment, portfolio optimization, money management',
          duration: '4 Weeks',
          lessons: 16,
          level: 'Advanced',
          enrolled: '400+ students'
        }
      ]
    },
    {
      id: 'android',
      title: 'Android Development',
      description: 'Native Android app development',
      icon: Smartphone,
      color: 'trust',
      courses: [
        {
          title: 'Android Basics with Java',
          description: 'Activities, layouts, intents, basic app development',
          duration: '3 Months',
          lessons: 28,
          level: 'Beginner',
          enrolled: '1,000+ students'
        },
        {
          title: 'Advanced Android with Kotlin',
          description: 'Modern Android development, architecture patterns',
          duration: '4 Months',
          lessons: 36,
          level: 'Advanced',
          enrolled: '700+ students'
        },
        {
          title: 'Android UI/UX Design',
          description: 'Material design, user experience, interface design',
          duration: '2 Months',
          lessons: 20,
          level: 'Intermediate',
          enrolled: '500+ students'
        }
      ]
    }
  ];

  const courseFeatures = [
    'Completely free access to all content',
    'Live instructor-led sessions',
    'Hands-on projects and assignments',
    'Industry-recognized certificates',
    'Lifetime access to course materials',
    '24/7 community support',
    'Career guidance and placement assistance',
    'Regular assessments and feedback'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/">
              <Button variant="outline" size="sm" className="mb-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Free <span className="text-accent">Courses</span> for Everyone
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Explore our comprehensive collection of free courses designed specifically for 
              marginalized students. Quality education without barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enrollment">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Enroll Now - It's Free!
                  <Target className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Course Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What You Get With Every Course</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Course Categories */}
        {courseCategories.map((category) => (
          <div key={category.id} className="mb-16">
            <div className="text-center mb-8">
              <div className={`h-16 w-16 mx-auto rounded-xl flex items-center justify-center mb-4 bg-${category.color}`}>
                <category.icon className={`h-8 w-8 text-${category.color}-foreground`} />
              </div>
              <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
              <p className="text-xl text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
              {category.courses.map((course, index) => (
                <Card key={course.title} className="hover:shadow-float transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                        <Badge variant="outline" className="mb-2">{course.level}</Badge>
                      </div>
                      <Play className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm">{course.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div className="text-sm">
                        <Clock className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                        <div className="font-medium">{course.duration}</div>
                      </div>
                      <div className="text-sm">
                        <BookOpen className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                        <div className="font-medium">{course.lessons} Lessons</div>
                      </div>
                      <div className="text-sm">
                        <Users className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                        <div className="font-medium text-xs">{course.enrolled}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-accent fill-current" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">(4.8)</span>
                      </div>
                      <Badge className="bg-secondary text-secondary-foreground">FREE</Badge>
                    </div>

                    <div className="space-y-2">
                      <Link to="/enrollment">
                        <Button className="w-full">
                          Enroll in Course
                          <Zap className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="w-full" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download Syllabus
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to={`/${category.id === 'software' ? 'software-development' : category.id}`}>
                <Button variant="outline" size="lg">
                  View All {category.title}
                  <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="text-center bg-gradient-card p-8 rounded-2xl">
          <Award className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
          <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have already started their journey towards a successful career. 
            All courses are completely free and include industry-recognized certificates.
          </p>
          <Link to="/enrollment">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Learning Today - Free Forever!
              <Target className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;