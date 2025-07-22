import { GraduationCap, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Engineering Education', href: '#engineering' },
    { name: 'Software Development', href: '#software' },
    { name: 'Trading & Finance', href: '#trading' },
    { name: 'Android Apps', href: '#apps' },
    { name: 'Admission Prep', href: '#prep' },
    { name: 'About Us', href: '#about' }
  ];

  const courses = [
    'Electronics & Communication',
    'Computer Science',
    'Mechanical Engineering', 
    'Electrical Engineering',
    'Web Development',
    'Mobile Development'
  ];

  const support = [
    'Help Center',
    'Community Forum',
    'Contact Support',
    'Free Resources',
    'Student Success Stories',
    'Career Guidance'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">SoftGogy</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering marginalized students across India with completely free access to 
              quality technical education and career opportunities.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium">Education for All, Free for Everyone</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Free Courses</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course}>
                  <span className="text-primary-foreground/80 text-sm">
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 mb-6">
              {support.map((item) => (
                <li key={item}>
                  <span className="text-primary-foreground/80 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="space-y-2">
               <div className="flex items-center space-x-2 text-sm">
                 <Mail className="h-4 w-4 text-accent" />
                 <span className="text-primary-foreground/80">biswajit@softgogy.com</span>
               </div>
               <div className="flex items-center space-x-2 text-sm">
                 <Phone className="h-4 w-4 text-accent" />
                 <span className="text-primary-foreground/80">+91 98300 46647</span>
               </div>
               <div className="flex items-center space-x-2 text-sm">
                 <MapPin className="h-4 w-4 text-accent" />
                 <span className="text-primary-foreground/80">Kolkata, India</span>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 SoftGogy. All rights reserved. Proudly serving marginalized students across India.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-primary-foreground/60">
              <span className="text-accent font-medium">100% Free Education</span> • 
              <span className="text-accent font-medium ml-1">No Hidden Costs</span> • 
              <span className="text-accent font-medium ml-1">Lifetime Access</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;