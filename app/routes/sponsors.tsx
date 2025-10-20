import type { Route } from "./+types/sponsors";

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
              <div className="w-64 h-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400 font-display">Company Logo</span>
              </div>
              <div className="w-64 h-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400 font-display">Company Logo</span>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-display font-light text-gray-400 mb-8 text-center">
              Silver Sponsors
            </h2>
            <div className="grid md:grid-cols-3 gap-8 items-center justify-items-center">
              <div className="w-48 h-24 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400 font-display text-sm">Company Logo</span>
              </div>
              <div className="w-48 h-24 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400 font-display text-sm">Company Logo</span>
              </div>
              <div className="w-48 h-24 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400 font-display text-sm">Company Logo</span>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-display font-light text-[#EF3340] mb-8 text-center">
              Bronze Sponsors
            </h2>
            <div className="grid md:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="w-40 h-20 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400 font-display text-xs">Logo</span>
              </div>
              <div className="w-40 h-20 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400 font-display text-xs">Logo</span>
              </div>
              <div className="w-40 h-20 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400 font-display text-xs">Logo</span>
              </div>
              <div className="w-40 h-20 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400 font-display text-xs">Logo</span>
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
