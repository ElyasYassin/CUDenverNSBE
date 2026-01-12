import type { Route } from "./+types/sponsors";
import TrimbleLogo from "../images/sponsors/trimble.png";
import MedtronicLogo from "../images/sponsors/medtronic.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sponsors - NSBE UC Denver" },
    { name: "description", content: "Meet our valued sponsors who support NSBE CU Denver's mission to empower Black engineers." },
  ];
}

export default function Sponsors() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-display font-light text-gray-900 dark:text-white mb-16 text-center">
            Our Sponsors
          </h1>

          <section className="mb-20">
            <h2 className="text-2xl font-display font-light text-[#FFD100] mb-8 text-center">
              Gold Sponsors
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
              <div className="h-32 w-auto max-w-[280px] flex items-center justify-center">
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
                <div className="fallback-text text-xl font-bold text-gray-400 hidden items-center justify-center h-full">
                  Trimble
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-display font-light text-gray-400 mb-8 text-center">
              Silver Sponsors
            </h2>
            <div className="grid md:grid-cols-3 gap-8 items-center justify-items-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm italic col-span-full">
                No silver sponsors at this time
              </p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-display font-light text-[#EF3340] mb-8 text-center">
              Bronze Sponsors
            </h2>
            <div className="grid md:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="h-24 w-auto max-w-[200px] flex items-center justify-center">
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
                <div className="fallback-text text-lg font-bold text-gray-400 hidden items-center justify-center h-full">
                  Medtronic
                </div>
              </div>
            </div>
          </section>

          <div className="text-center pt-12 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-display font-light text-gray-900 dark:text-white mb-6">
              Become a Sponsor
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Partner with NSBE CU Denver to support the next generation of Black engineers
              and gain access to top talent.
            </p>
            <a
              href="mailto:nsbe.cudenver@gmail.com"
              className="inline-block bg-[#FFD100] text-black px-8 py-4 font-display font-semibold hover:scale-105 transition-transform"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
