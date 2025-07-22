import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Engineering from "./pages/Engineering";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import Trading from "./pages/Trading";
import AndroidApps from "./pages/AndroidApps";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EnrollmentForm from "./pages/EnrollmentForm";
import Community from "./pages/Community";
import Courses from "./pages/Courses";
import ChannelDetails from "./pages/ChannelDetails";
import EventDetails from "./pages/EventDetails";
import AndroidDevelopment from "./pages/AndroidDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/android-apps" element={<AndroidApps />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enroll" element={<EnrollmentForm />} />
          <Route path="/enrollment" element={<EnrollmentForm />} />
          <Route path="/community" element={<Community />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/channel-details" element={<ChannelDetails />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/android-development" element={<AndroidDevelopment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
