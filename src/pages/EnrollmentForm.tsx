import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const enrollmentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  contact: z.string().min(10, 'Contact number must be at least 10 digits'),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  chosenCourse: z.string().min(1, 'Please select a course'),
  educationDetails: z.string().min(10, 'Education details must be at least 10 characters').max(2400, 'Education details must not exceed 400 words'),
});

type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

const EnrollmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      name: '',
      email: '',
      contact: '',
      address: '',
      chosenCourse: '',
      educationDetails: '',
    },
  });

  const onSubmit = async (data: EnrollmentFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate sending email - in real implementation, this would call your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      toast({
        title: "Enrollment Successful!",
        description: "We will contact you soon.",
        variant: "default",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enroll for Free Education
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Join our community of learners and start your journey today
          </p>
          <Link to="/">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center">
            <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Enrollment Form</CardTitle>
            <CardDescription>
              Fill out the form below to enroll in our free courses. We'll contact you with next steps.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your contact number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your complete address" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="chosenCourse"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chosen Course</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="engineering-ece">Engineering - Electronics & Communication</SelectItem>
                          <SelectItem value="engineering-epe">Engineering - Electrical & Power</SelectItem>
                          <SelectItem value="engineering-mpe">Engineering - Mechanical & Production</SelectItem>
                          <SelectItem value="engineering-cse">Engineering - Computer Science</SelectItem>
                          <SelectItem value="software-development">Software Development</SelectItem>
                          <SelectItem value="trading">Trading & Algo Trading</SelectItem>
                          <SelectItem value="android-apps">Android App Development</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="educationDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Education Details (Max 400 words)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe your educational background, current studies, qualifications, and any relevant experience..."
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
                  <UserPlus className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Form>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">What happens next?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• We'll review your enrollment request</li>
                <li>• Our team will contact you within 24-48 hours</li>
                <li>• You'll receive access to your chosen courses</li>
                <li>• Start learning immediately with our expert instructors</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnrollmentForm;