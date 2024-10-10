import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import ExploreStrategy from "./pages/ExploreStrategy";
import TravelTools from "./pages/TravelTools";
import SportsHospitality from "./pages/SportsHospitality";
import OnlineEducation from "./pages/OnlineEducation";
import Entrepreneurship from "./pages/Entrepreneurship";
import NewsletterForm from './NewsletterForm';

function App() {
  useEffect(() => {
    // Call API to track page hits
    axios.post('http://localhost:3000/api/hits/hit')
      .then(response => {
        console.log('Page hits updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating page hits:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Jetset Genius</h1>
      {/* Rest of your main page content */}
    </div>
  );
}

export default App;

function App() {
  // The page hit logic remains as is

  return (
    <div className="App">
      <h1>Welcome to Jetset Genius</h1>
      <NewsletterForm />
      {/* Rest of your main page content */}
    </div>
  );
}

export default App;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/explore-strategy" element={<ExploreStrategy />} />
              <Route path="/travel-tools" element={<TravelTools />} />
              <Route path="/sports-hospitality" element={<SportsHospitality />} />
              <Route path="/online-education" element={<OnlineEducation />} />
              <Route path="/entrepreneurship" element={<Entrepreneurship />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;