import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import { LoadScript } from "@react-google-maps/api"; // Import LoadScript

// Existing pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// New Risk Assessment page/component
import RiskForm from "./components/RiskForm"; // Adjust the import path as needed

const queryClient = new QueryClient();

// Google Maps API key from .env.local (with VITE_ prefix as per Vite convention)
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

if (!googleMapsApiKey) {
  console.error('VITE_GOOGLE_MAPS_API_KEY not found in .env.local');
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LazyMotion features={domAnimation}>
        <Toaster />
        <Sonner />
        {/* Wrap the app with LoadScript to load Google Maps API */}
        <LoadScript
          googleMapsApiKey={googleMapsApiKey || 'missing-api-key'} // Fallback for demo
          loadingElement={<div>Loading...</div>} // Optional: Customize loading state
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              {/* Add new route for Risk Assessment */}
              <Route path="/risk-assessment" element={<RiskForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LoadScript>
      </LazyMotion>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;