import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About NSBE - National Society of Black Engineers" },
    { name: "description", content: "Learn about the National Society of Black Engineers, our mission, and our commitment to increasing the number of culturally responsible Black engineers." },
  ];
}

export default function About() {
  return (
    <main className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <img 
            src="/app/images/NSBE_Logo.png" 
            alt="NSBE Logo" 
            className="h-20 w-auto mx-auto mb-8"
          />
          <h1 className="text-5xl font-display font-light text-gray-900 dark:text-white">
            About NSBE
          </h1>
        </div>
        
        <div className="space-y-24">
          <section>
            <h2 className="text-3xl font-display font-light text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              To increase the number of culturally responsible Black engineers who excel academically,
              succeed professionally, and positively impact the community.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-light text-gray-900 dark:text-white mb-6">
              CU Denver Chapter
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Founded to empower underrepresented engineers through mentorship, community, and excellence.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-light text-gray-900 dark:text-white mb-12">
              Executive Board
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-l-4 border-[#009639] pl-6">
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                  Elyas Larfi
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  President
                </p>
                <a
                  href="https://linkedin.com/in/elyaslarfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#009639] hover:underline underline-offset-4 text-sm"
                >
                  LinkedIn →
                </a>
              </div>
              <div className="border-l-4 border-[#FFD100] pl-6">
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                  Maab Ali
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Literacy Strategist
                </p>
                <a
                  href="#"
                  className="text-[#009639] hover:underline underline-offset-4 text-sm"
                >
                  LinkedIn →
                </a>
              </div>
              <div className="border-l-4 border-[#EF3340] pl-6">
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                  Michael Garioto
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Programs Chair
                </p>
                <a
                  href="#"
                  className="text-[#009639] hover:underline underline-offset-4 text-sm"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
