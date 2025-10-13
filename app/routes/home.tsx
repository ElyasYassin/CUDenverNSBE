import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NSBE UC Denver - National Society of Black Engineers" },
    { name: "description", content: "Join the NSBE chapter at UC Denver. Connect with Black engineers, access academic resources, and advance your career in STEM." },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 dark:text-white mb-8 tracking-tight">
            NSBE
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16">
            University of Colorado Denver
          </p>
          <div className="flex gap-6 mb-24">
            <Link
              to="/membership"
              className="text-gray-900 dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              Join
            </Link>
            <Link
              to="/events"
              className="text-gray-900 dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              Events
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-t border-gray-200 dark:border-gray-800 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">
              Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Increase the number of culturally responsible Black engineers who excel academically,
              succeed professionally, and positively impact the community.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gray-200 dark:border-gray-800 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-16">
              <div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">
                  Academic Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Study groups, tutoring, mentorship programs, and scholarship opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">
                  Career Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Industry connections, career workshops, internship and job opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">
                  Community
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Network of over 500 chapters nationwide with access to national conferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-gray-200 dark:border-gray-800 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/contact"
              className="text-gray-900 dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
