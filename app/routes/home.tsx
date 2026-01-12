import type { Route } from "./+types/home";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import NSBE_Officers from "../images/NSBE_Officers-min.webp";
import NSBE_Logo from "../images/NSBE_Logo.png";
import TrimbleLogo from "../images/sponsors/trimble.png";
import MedtronicLogo from "../images/sponsors/medtronic.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NSBE UC Denver - National Society of Black Engineers" },
    { name: "description", content: "Join the NSBE chapter at UC Denver. Connect with Black engineers, access academic resources, and advance your career in STEM." },
    { name: "theme-color", content: "#009639" },
    { name: "color-scheme", content: "light dark" },
  ];
}

// Scroll Popup Component
function ScrollPopup({ isVisible, onScrollToTop }: { isVisible: boolean; onScrollToTop: () => void }) {
  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
    >
      <button
        onClick={onScrollToTop}
        className="group bg-[#009639] hover:bg-[#007a2f] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20"
        aria-label="Scroll to top"
      >
        <div className="flex flex-col items-center">
          <svg 
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="text-xs font-medium mt-1 opacity-90">Top</span>
        </div>
      </button>
    </div>
  );
}

export default function Home() {
  const [showScrollPopup, setShowScrollPopup] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollPopup(scrollTop > 300);
      
      // Calculate overlay opacity based on scroll position
      // Fade in from 0 to 1 over 300px of scrolling
      const scrollProgress = Math.min(scrollTop / 300, 1); // 0 to 1 over 300px
      setOverlayOpacity(scrollProgress);
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add preload link for the hero image
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = NSBE_Officers;
    preloadLink.type = 'image/webp';
    document.head.appendChild(preloadLink);

    // Preload the hero image with error handling
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      console.warn('Hero image failed to load, using fallback');
      setImageLoaded(true); // Still show content with fallback
    };
    img.src = NSBE_Officers;
    
    // Cleanup function
    return () => {
      img.onload = null;
      img.onerror = null;
      document.head.removeChild(preloadLink);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <ScrollPopup isVisible={showScrollPopup} onScrollToTop={scrollToTop} />
      {/* Hero Section */}
      <section 
        className={`relative min-h-[150vh] flex items-center justify-center hero-section ${
          imageLoaded ? 'image-loaded' : 'image-loading'
        }`}
        style={{
          backgroundImage: imageLoaded ? `url(${NSBE_Officers})` : 'none',
          '--hero-bg': `url(${NSBE_Officers})`
        } as React.CSSProperties}
        data-bg-image={NSBE_Officers}
      >
        {/* Fallback background color while image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 to-black/60 z-10"></div>
        <div 
          className="relative z-20 container mx-auto px-6 text-center max-w-6xl transition-all duration-700 ease-out"
          style={{ 
            opacity: overlayOpacity,
            transform: `translateY(${20 * (1 - overlayOpacity)}px)`
          }}
        >
          <div className="mb-8 flex justify-center" style={{ width: '100%', maxWidth: '200px', margin: '0 auto' }}>
            <img 
              src={NSBE_Logo} 
              alt="NSBE Logo" 
              className="h-24 md:h-32 w-full max-w-full object-contain drop-shadow-2xl"
              loading="eager"
              decoding="sync"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light text-white mb-6 tracking-tight drop-shadow-2xl max-w-full">
            NSBE
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-light text-[#FFD100] mb-4 drop-shadow-lg max-w-full px-4">
            Excellence. Impact. Leadership.
          </p>
          <p className="text-base sm:text-lg text-gray-200 mb-12 max-w-2xl mx-auto drop-shadow-md px-4">
            University of Colorado Denver Chapter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/membership"
              className="bg-[#FFD100] text-black px-8 py-4 font-display font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
            >
              Join NSBE
            </Link>
            <Link
              to="/events"
              className="border-2 border-white text-white px-8 py-4 font-display font-semibold hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-xl backdrop-blur-sm bg-white/10"
            >
              View Events
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-500"
          style={{ opacity: 1 - overlayOpacity }}
        >
          <div className="flex flex-col items-center text-white/80 animate-bounce">
            <span className="text-sm mb-2 font-light">Scroll to explore</span>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-display font-light text-gray-900 dark:text-white mb-8 leading-relaxed">
              NSBE CU Denver empowers Black engineers through leadership, community, and innovation.
            </p>
            <Link
              to="/about"
              className="text-[#009639] font-semibold hover:underline underline-offset-4 transition-all"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="bg-gray-50 dark:bg-gray-900 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-light text-gray-900 dark:text-white mb-12 text-center">
            Upcoming Events - Coming Soon!
          </h2>
          {/* <div className="text-center mt-12">
            <Link
              to="/events"
              className="text-[#009639] font-semibold hover:underline underline-offset-4 transition-all"
            >
              View All Events →
            </Link>
          </div> */}
        </div>
      </section>

      {/* Sponsors Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-light text-gray-900 dark:text-white mb-12 text-center">
            Our Sponsors
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {/* Medtronic Logo */}
            <div className="h-20 w-auto max-w-[220px] flex items-center justify-center">
              <img 
                src={MedtronicLogo} 
                alt="Medtronic" 
                className="h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.fallback-text') as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="fallback-text text-2xl font-bold text-gray-400 hidden items-center justify-center h-full">
                Medtronic
              </div>
            </div>
            {/* Trimble Logo */}
            <div className="h-20 w-auto max-w-[220px] flex items-center justify-center">
              <img 
                src={TrimbleLogo} 
                alt="Trimble" 
                className="h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.fallback-text') as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="fallback-text text-2xl font-bold text-gray-400 hidden items-center justify-center h-full">
                Trimble
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="text-[#009639] font-semibold hover:underline underline-offset-4 transition-all"
            >
              Become a Sponsor →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
