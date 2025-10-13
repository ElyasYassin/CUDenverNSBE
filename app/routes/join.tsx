import type { Route } from "./+types/join";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Join NSBE - National Society of Black Engineers" },
    { name: "description", content: "Join NSBE CU Denver and become part of a community shaping the future of STEM." },
  ];
}

export default function Join() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <img 
              src="/app/images/NSBE_Logo.png" 
              alt="NSBE Logo" 
              className="h-20 w-auto mx-auto drop-shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-light mb-6">
            Join the Movement
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be part of a community shaping the future of STEM.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-light text-gray-900 dark:text-white mb-16 text-center">
            How to Join
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#009639] text-white rounded-full flex items-center justify-center text-2xl font-display font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                Register on NSBE.org
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create your account and become an official NSBE member.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD100] text-black rounded-full flex items-center justify-center text-2xl font-display font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                Attend Your First Meeting
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join us for a general body meeting and meet the chapter.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#EF3340] text-white rounded-full flex items-center justify-center text-2xl font-display font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-4">
                Get Involved
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Participate in committees, projects, and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-light text-gray-900 dark:text-white mb-16 text-center">
            Member Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-2">
                Mentorship
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Connect with experienced engineers
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-2">
                Networking
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Build professional connections
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-2">
                Career Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Access exclusive opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏗</div>
              <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-2">
                Community Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Give back and make a difference
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-light text-gray-900 dark:text-white mb-8">
            Ready to Join?
          </h2>
          <a
            href="https://nsbe.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD100] text-black px-8 py-4 font-display font-semibold hover:scale-105 transition-transform"
          >
            Join NSBE National
          </a>
        </div>
      </section>
    </main>
  );
}
