import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/authStore';

// Public Components
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AboutUs } from './components/AboutUs';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Navbar } from './components/Navbar';
import { FloatingCTA } from './components/FloatingCTA';
import { ScrollReveal } from './components/ScrollReveal';
import { ParallaxSection } from './components/ParallaxSection';

// Admin Components
import { AdminLayout } from './components/admin/AdminLayout';
import { LoginPage } from './pages/admin/LoginPage';

function PublicLayout() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative">
      <Navbar />
      
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
      >
        <Hero />
      </ParallaxSection>

      <ScrollReveal>
        <AboutUs />
      </ScrollReveal>

      <ScrollReveal>
        <Features />
      </ScrollReveal>

      <ScrollReveal>
        <Portfolio />
      </ScrollReveal>

      <ScrollReveal>
        <Pricing />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <Blog />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal>
        <ContactForm />
      </ScrollReveal>

      <FloatingCTA />
    </div>
  );
}

function App() {
  const checkUser = useAuthStore((state) => state.checkUser);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<PublicLayout />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;