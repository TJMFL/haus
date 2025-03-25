import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Check, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { CarIcon, ShieldIcon } from '@/components/icons/ServiceIcons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const formSchema = z.object({
  service: z.string({
    required_error: "Please select a service.",
  }),
  date: z.date({
    required_error: "Please select a date.",
  }),
});

const BookingForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "",
      date: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Service</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <ServiceOption value="transportation" label="Transportation" icon={<CarIcon size={36} />} />
                  <ServiceOption value="security" label="Security" icon={<ShieldIcon size={36} />} />
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of travel</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date()
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

interface ServiceOptionProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const ServiceOption: React.FC<ServiceOptionProps> = ({ value, label, icon }) => (
  <FormItem className="flex items-center space-x-3 space-y-0">
    <FormControl>
      <RadioGroupItem value={value} id={value} className="peer sr-only" />
    </FormControl>
    <FormLabel
      htmlFor={value}
      className="flex cursor-pointer items-center p-4 rounded-lg border border-secondary
                 peer-checked:bg-accent peer-checked:text-accent-foreground"
    >
      <div className="mr-4 text-red-500">
        {icon}
      </div>
      {label}
    </FormLabel>
  </FormItem>
);

const Booking = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex items-start justify-start">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />
          <img
            src="/lovable-uploads/97ae4719-5b6e-4975-8783-098ea1b3c482.png"
            alt="Luxury Mercedes SUV"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="container relative z-20 px-2 md:px-4 pt-40 md:pt-56 lg:pt-72">
          <div className="max-w-3xl">
            <p className="text-red-500 uppercase tracking-widest text-sm mb-2 font-medium">
              Book Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Schedule Your Elite Transportation & Security
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              Select your service and preferred date to book your premium transportation and security solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-black relative">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Booking Form</h2>
            <BookingForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
