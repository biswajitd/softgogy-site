import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-education.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning together"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <Heart className="h-6 w-6 text-accent animate-float" />
              <span className="text-accent font-semibold">Empowering Marginalized Students</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary-foreground">Free Education</span>
              <br />
              <span className="text-accent">For Everyone</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              SoftGogy provides completely free access to engineering education, software development training, 
              trading insights, and career guidance for marginalized students across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/enrollment">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-float">
                  Enroll Now - It's Free!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => alert("Under development")}
              >
                Start Chart
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Users className="h-8 w-8 text-secondary" />
                  <span className="text-3xl font-bold text-primary-foreground">1000+</span>
                </div>
                <p className="text-primary-foreground/80">Students Helped</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <BookOpen className="h-8 w-8 text-secondary" />
                  <span className="text-3xl font-bold text-primary-foreground">50+</span>
                </div>
                <p className="text-primary-foreground/80">Free Courses</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-2">
              <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Engineering Education</h3>
              <p className="text-muted-foreground text-sm">Complete courses for ECE, EEE, Mechanical, and CSE branches</p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-2">
              <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Software Development</h3>
              <p className="text-muted-foreground text-sm">Learn coding, app development, and modern technologies</p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-2">
              <div className="h-12 w-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Trading Insights</h3>
              <p className="text-muted-foreground text-sm">Master algorithmic trading and financial markets</p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-2">
              <div className="h-12 w-12 bg-trust rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-trust-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Admission Prep</h3>
              <p className="text-muted-foreground text-sm">Crack engineering entrance exams with our guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;