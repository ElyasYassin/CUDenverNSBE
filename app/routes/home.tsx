import type { Route } from "./+types/home";
import Board from "./board"
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NSBE UC Denver - National Society of Black Engineers" },
    { name: "description", content: "Join the NSBE chapter at UC Denver. Connect with Black engineers, access academic resources, and advance your career in STEM." },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
              <span className="text-white font-bold text-3xl">N</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to{" "}
              <span className="text-blue-600 dark:text-blue-400">NSBE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              University of Colorado Denver Chapter
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join the largest student-governed organization dedicated to increasing the number of 
              culturally responsible Black engineers who excel academically, succeed professionally, 
              and positively impact the community.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/membership"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Join NSBE Today
            </Link>
            <Link
              to="/events"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
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

      {/* Mission Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              NSBE's mission is to increase the number of culturally responsible Black engineers 
              who excel academically, succeed professionally, and positively impact the community. 
              Through our programs and initiatives, we support students in engineering and technology 
              fields while promoting diversity and inclusion in STEM.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Learn More About NSBE
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Why Join NSBE?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Academic Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Access study groups, tutoring, mentorship programs, and scholarship opportunities 
                  to support your academic journey.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Career Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connect with industry professionals, attend career workshops, and access 
                  exclusive internship and job opportunities.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Strong Community
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Build lasting friendships with like-minded students and professionals 
                  who share your passion for engineering.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  National Network
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Join a network of over 500 chapters nationwide with access to national 
                  conferences and industry partnerships.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Leadership Opportunities
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Develop leadership skills through chapter positions, community outreach, 
                  and national committee involvement.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Fun Activities
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Participate in social events, competitions, community service projects, 
                  and networking activities throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Don't miss out on our upcoming meetings, workshops, and networking events.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">15</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">General Body Meeting</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Jan 15, 2024 • 6:00 PM</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Join us for our monthly meeting to discuss upcoming events and connect with fellow engineers.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">22</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Career Workshop</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Jan 22, 2024 • 5:30 PM</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Learn essential skills for your engineering career including resume building and interview prep.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">28</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Networking Night</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Jan 28, 2024 • 7:00 PM</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Connect with industry professionals and alumni in an informal networking environment.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/events"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Events
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join NSBE today and become part of a community that's shaping the future of engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/membership"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Join NSBE
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
