
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const bookingFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  date: z.date({
    required_error: 'Please select a date',
  }),
  serviceType: z.enum(['transportation', 'security', 'both'], {
    required_error: 'Please select a service type',
  }),
  bookingType: z.enum(['single', 'daily', 'weekly', 'monthly'], {
    required_error: 'Please select a booking frequency',
  }),
  pickupLocation: z.string().min(5, 'Pickup location is required'),
  dropoffLocation: z.string().optional(),
  specialRequests: z.string().optional(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      serviceType: 'transportation',
      bookingType: 'single',
      termsAccepted: false,
    },
  });
  
  const serviceType = watch('serviceType');
  const bookingType = watch('bookingType');
  
  const onSubmit = async (data: BookingFormData) => {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success notification
    toast({
      title: "Booking Request Submitted",
      description: "We will contact you shortly to confirm your booking details.",
      duration: 5000,
    });
    
    console.log('Form data:', data);
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
          <Label>Select Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-haus-800 border-haus-700",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-haus-800 border-haus-700" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => {
                  setDate(date);
                  setValue('date', date as Date);
                }}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message as string}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Service Type</Label>
          <RadioGroup 
            defaultValue="transportation" 
            onValueChange={(value) => setValue('serviceType', value as 'transportation' | 'security' | 'both')}
            className="flex flex-col md:flex-row gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="transportation" id="transportation" />
              <Label htmlFor="transportation" className="cursor-pointer">Transportation Only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="security" id="security" />
              <Label htmlFor="security" className="cursor-pointer">Security Only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="both" id="both" />
              <Label htmlFor="both" className="cursor-pointer">Transportation & Security</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label>Booking Frequency</Label>
          <RadioGroup 
            defaultValue="single" 
            onValueChange={(value) => setValue('bookingType', value as 'single' | 'daily' | 'weekly' | 'monthly')}
            className="flex flex-col md:flex-row gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="single" id="single" />
              <Label htmlFor="single" className="cursor-pointer">Single Ride</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="daily" id="daily" />
              <Label htmlFor="daily" className="cursor-pointer">Daily Schedule</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="weekly" />
              <Label htmlFor="weekly" className="cursor-pointer">Weekly Schedule</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="monthly" id="monthly" />
              <Label htmlFor="monthly" className="cursor-pointer">Monthly Schedule</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      
      {serviceType === 'transportation' || serviceType === 'both' ? (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="pickupLocation">Pickup Location</Label>
            <Input 
              id="pickupLocation" 
              placeholder="Enter pickup address" 
              {...register('pickupLocation')} 
              className="bg-haus-800 border-haus-700"
            />
            {errors.pickupLocation && (
              <p className="text-red-500 text-sm">{errors.pickupLocation.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dropoffLocation">Dropoff Location</Label>
            <Input 
              id="dropoffLocation" 
              placeholder="Enter dropoff address (optional)" 
              {...register('dropoffLocation')} 
              className="bg-haus-800 border-haus-700"
            />
          </div>
        </div>
      ) : null}
      
      <div className="space-y-2">
        <Label htmlFor="specialRequests">Special Requests or Instructions</Label>
        <Textarea 
          id="specialRequests" 
          placeholder="Enter any special requests or instructions" 
          {...register('specialRequests')} 
          className="bg-haus-800 border-haus-700 min-h-[120px]"
        />
      </div>
      
      <div className="flex items-start space-x-2">
        <Checkbox 
          id="termsAccepted" 
          onCheckedChange={(checked) => setValue('termsAccepted', !!checked)} 
        />
        <Label htmlFor="termsAccepted" className="text-sm leading-tight">
          I agree to the <a href="#" className="text-haus-gold hover:underline">terms and conditions</a> and understand that my booking is subject to confirmation
        </Label>
      </div>
      {errors.termsAccepted && (
        <p className="text-red-500 text-sm">{errors.termsAccepted.message}</p>
      )}
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full md:w-auto bg-haus-burgundy hover:bg-haus-burgundy/90 text-white rounded-none px-8 py-6"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
      </Button>
    </form>
  );
};

export default BookingForm;
