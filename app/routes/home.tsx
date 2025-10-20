import type { Route } from "./+types/home";
import Board from "./board"
import { Link } from "react-router";
import { useState, useEffect } from "react";
import NSBE_Officers from "../images/NSBE_Officers-min.webp";
import NSBE_Logo from "../images/NSBE_Logo.png";

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollPopup(scrollTop > 300);
    };

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
        className={`relative min-h-[100vh] flex items-center justify-center hero-section ${
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
        <div className="relative z-20 container mx-auto px-6 text-center">
          <div className="mb-8">
            <img 
              src={NSBE_Logo} 
              alt="NSBE Logo" 
              className="h-24 md:h-32 mx-auto drop-shadow-2xl"
              loading="eager"
              decoding="sync"
            />
          </div>
          <h1 className="text-7xl md:text-8xl font-display font-light text-white mb-6 tracking-tight drop-shadow-2xl">
            NSBE
          </h1>
          <p className="text-2xl md:text-3xl font-display font-light text-[#FFD100] mb-4 drop-shadow-lg">
            Excellence. Impact. Leadership.
          </p>
          <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto drop-shadow-md">
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
            <Link
              to="/board"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
>
              Meet the Board
            </Link>

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
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 border-l-4 border-[#009639]">
              <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                AI in Industry Workshop
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Nov 5, 2025 • ACAD 2504
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Hands-on session exploring AI career paths.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 border-l-4 border-[#FFD100]">
              <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                Community STEM Fair
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Nov 20, 2025 • Student Commons
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Mentorship and STEM demos for high-schoolers.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/events"
              className="text-[#009639] font-semibold hover:underline underline-offset-4 transition-all"
            >
              View All Events →
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-light text-gray-900 dark:text-white mb-12 text-center">
            Our Sponsors
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            <div className="text-4xl font-bold text-gray-400">Company</div>
            <div className="text-4xl font-bold text-gray-400">Company</div>
            <div className="text-4xl font-bold text-gray-400">Company</div>
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
