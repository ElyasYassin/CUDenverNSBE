import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About NSBE - National Society of Black Engineers" },
    { name: "description", content: "Learn about the National Society of Black Engineers, our mission, and our commitment to increasing the number of culturally responsible Black engineers." },
  ];
}

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About NSBE
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              The National Society of Black Engineers (NSBE) is one of the largest student-governed 
              organizations in the United States. NSBE's mission is to increase the number of culturally 
              responsible Black engineers who excel academically, succeed professionally, and positively 
              impact the community.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Through our programs and initiatives, we work to support and advance students in 
              engineering and technology fields while promoting diversity and inclusion in STEM.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Our History
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Founded in 1975 at Purdue University, NSBE was created by six African-American engineering 
              students who recognized the need for a support system for Black engineering students. 
              What started as a small group has grown into a global organization with over 500 chapters 
              and more than 20,000 active members worldwide.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Today, NSBE continues to be a driving force in the engineering community, providing 
              academic support, professional development, and community outreach programs that make 
              a lasting impact on students and the engineering profession.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-3">
                  Excellence
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We strive for excellence in all our endeavors, both academic and professional.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-200 mb-3">
                  Community
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We build strong communities that support and uplift one another.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-200 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We embrace innovation and cutting-edge technology in engineering.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-200 mb-3">
                  Leadership
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We develop leaders who will shape the future of engineering.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Get Involved
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Whether you're a current student, recent graduate, or industry professional, 
              there are many ways to get involved with NSBE and make a difference in the 
              engineering community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/membership" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Join NSBE
              </a>
              <a 
                href="/events" 
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Attend Events
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
