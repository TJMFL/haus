
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message is too short').max(500, 'Message is too long'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });
  
  const onSubmit = async (data: ContactFormData) => {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success notification
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will respond shortly.",
      duration: 5000,
    });
    
    console.log('Form data:', data);
    reset();
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            placeholder="Enter your full name" 
            {...register('name')} 
            className="bg-haus-800 border-haus-700"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Enter your email" 
            {...register('email')} 
            className="bg-haus-800 border-haus-700"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            placeholder="Enter your phone number" 
            {...register('phone')} 
            className="bg-haus-800 border-haus-700"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Select onValueChange={(value) => setValue('subject', value)}>
            <SelectTrigger id="subject" className="bg-haus-800 border-haus-700">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent className="bg-haus-800 border-haus-700">
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="transportation">Transportation Services</SelectItem>
              <SelectItem value="security">Security Services</SelectItem>
              <SelectItem value="quote">Request a Quote</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          placeholder="Enter your message" 
          {...register('message')} 
          className="bg-haus-800 border-haus-700 min-h-[150px]"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-haus-burgundy hover:bg-haus-burgundy/90 text-white rounded-none px-8 py-6 w-full md:w-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
