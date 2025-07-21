import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, TrendingUp, BarChart3, Brain, Shield, DollarSign, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import tradingImage from '@/assets/trading.jpg';

const Trading = () => {
  const courses = [
    {
      title: "Algorithmic Trading Fundamentals",
      description: "Learn the basics of automated trading strategies and algorithm development",
      icon: Brain,
      difficulty: "Beginner",
      duration: "6 Weeks",
      modules: 12,
      features: ["Strategy Basics", "Market Analysis", "Backtesting", "Risk Assessment"]
    },
    {
      title: "Advanced Trading Strategies", 
      description: "Master complex trading algorithms and quantitative analysis techniques",
      icon: TrendingUp,
      difficulty: "Advanced",
      duration: "10 Weeks", 
      modules: 20,
      features: ["Quantitative Models", "Machine Learning", "Options Strategies", "Portfolio Optimization"]
    },
    {
      title: "Risk Management & Psychology",
      description: "Understand trading psychology, risk management, and behavioral finance",
      icon: Shield,
      difficulty: "Intermediate",
      duration: "4 Weeks",
      modules: 8,
      features: ["Psychology", "Risk Control", "Money Management", "Discipline Training"]
    },
    {
      title: "Market Analysis & Research",
      description: "Technical and fundamental analysis for informed trading decisions",
      icon: BarChart3,
      difficulty: "Beginner",
      duration: "8 Weeks",
      modules: 16,
      features: ["Technical Analysis", "Fundamental Analysis", "Market Research", "News Impact"]
    }
  ];

  const tools = [
    "Custom Algorithmic Trading Software",
    "Real-time Market Data Access", 
    "Backtesting Environment",
    "Risk Management Tools",
    "Strategy Performance Analytics",
    "Paper Trading Simulator"
  ];

  const achievements = [
    { number: "95%", label: "Success Rate in Paper Trading" },
    { number: "500+", label: "Students Trained" },
    { number: "50+", label: "Proven Strategies" },
    { number: "24/7", label: "Market Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={tradingImage} 
          alt="Trading & Finance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-trust/80 to-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Trading & Finance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Master algorithmic trading and financial technology with our proven strategies
            </p>
            <Link to="/">
              <Button variant="outline" size="lg" className="mb-4 border-white text-white hover:bg-white hover:text-trust">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Trading Performance</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trading Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Professional Trading Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">{tool}</h3>
              </Card>
            ))}
          </div>
        </div>

        {/* Trading Courses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Trading Education Programs</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
                        <course.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">{course.difficulty}</Badge>
                      </div>
                    </div>
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <CardDescription className="text-base mt-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-sm">
                      <span className="font-medium text-muted-foreground">Duration:</span>
                      <div className="font-semibold">{course.duration}</div>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-muted-foreground">Modules:</span>
                      <div className="font-semibold">{course.modules} Lessons</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">What You'll Learn:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/enrollment">
                    <Button className="w-full">
                      Enroll Now - It's Free!
                      <TrendingUp className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trading Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Your Trading Journey</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "Learn", desc: "Master trading fundamentals and strategies", icon: Brain },
              { step: "Practice", desc: "Use our simulator for risk-free learning", icon: Target },
              { step: "Analyze", desc: "Study market patterns and refine strategies", icon: BarChart3 },
              { step: "Trade", desc: "Apply knowledge with our algo trading tools", icon: TrendingUp }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-trust-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.step}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Notice */}
        <div className="mb-8 p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
          <h3 className="font-semibold text-destructive mb-2">⚠️ Important Trading Disclaimer</h3>
          <p className="text-sm text-muted-foreground">
            Trading involves substantial risk of loss and is not suitable for all investors. 
            Past performance does not guarantee future results. Please trade responsibly and only with funds you can afford to lose.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-trust to-primary p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Master Trading?</h3>
          <p className="text-lg mb-6 text-white/90">
            Start with our free trading simulator and educational resources
          </p>
          <Link to="/enrollment">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Enroll Now - It's Free!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trading;