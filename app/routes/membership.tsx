import type { Route } from "./+types/membership";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Membership - Join NSBE" },
    { name: "description", content: "Join NSBE and become part of a community of Black engineers making a difference in STEM fields." },
  ];
}

export default function Membership() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join NSBE
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Become part of the largest student-governed organization dedicated to increasing 
            the number of culturally responsible Black engineers who excel academically, 
            succeed professionally, and positively impact the community.
          </p>
        </div>

        {/* Membership Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Why Join NSBE?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-3">
                Academic Support
              </h3>
              <ul className="text-blue-800 dark:text-blue-300 space-y-2 text-sm">
                <li>• Study groups and tutoring</li>
                <li>• Academic mentorship programs</li>
                <li>• Scholarship opportunities</li>
                <li>• Research collaboration</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-200 mb-3">
                Professional Development
              </h3>
              <ul className="text-green-800 dark:text-green-300 space-y-2 text-sm">
                <li>• Career workshops and seminars</li>
                <li>• Industry networking events</li>
                <li>• Internship opportunities</li>
                <li>• Resume and interview prep</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-200 mb-3">
                Community & Leadership
              </h3>
              <ul className="text-purple-800 dark:text-purple-300 space-y-2 text-sm">
                <li>• Leadership development programs</li>
                <li>• Community outreach initiatives</li>
                <li>• Peer mentorship opportunities</li>
                <li>• Social events and activities</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-200 mb-3">
                National Network
              </h3>
              <ul className="text-orange-800 dark:text-orange-300 space-y-2 text-sm">
                <li>• Access to 500+ chapters nationwide</li>
                <li>• National and regional conferences</li>
                <li>• Alumni network connections</li>
                <li>• Industry partnerships</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-red-900 dark:text-red-200 mb-3">
                Recognition & Awards
              </h3>
              <ul className="text-red-800 dark:text-red-300 space-y-2 text-sm">
                <li>• Academic achievement recognition</li>
                <li>• Leadership awards</li>
                <li>• Conference presentation opportunities</li>
                <li>• National competitions</li>
              </ul>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-200 mb-3">
                Resources & Tools
              </h3>
              <ul className="text-indigo-800 dark:text-indigo-300 space-y-2 text-sm">
                <li>• Exclusive member portal</li>
                <li>• Industry publications access</li>
                <li>• Technical workshops</li>
                <li>• Project collaboration tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Membership Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Membership Types
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Student Membership
                </h3>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  $30/year
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  For current undergraduate and graduate students
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Full access to all chapter events</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Academic support and tutoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Career development workshops</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Networking opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Scholarship eligibility</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">National conference access</span>
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Join as Student
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Professional Membership
                </h3>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  $50/year
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  For working professionals and alumni
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Mentorship opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Professional networking events</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Industry insights and updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Recruitment opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Leadership development</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Community impact projects</span>
                </li>
              </ul>
              
              <button className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
                Join as Professional
              </button>
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
            How to Join
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Complete Application
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Fill out the membership application form with your basic information and academic/professional details.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Pay Membership Fee
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Submit your annual membership fee through our secure payment system.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Start Participating
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Receive your welcome packet and start attending events and accessing member resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Questions About Membership?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our membership team is here to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Membership Team
            </a>
            <a 
              href="/events" 
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Attend an Info Session
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
