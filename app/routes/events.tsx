import type { Route } from "./+types/events";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Events - NSBE Chapter" },
    { name: "description", content: "Stay updated with upcoming NSBE events, meetings, workshops, and networking opportunities." },
  ];
}

export default function Events() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Upcoming Events
        </h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              This Month
            </h2>
            
            <div className="space-y-6">
              {/* Event 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">15</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Jan 2024</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      General Body Meeting
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Join us for our monthly general body meeting where we'll discuss upcoming events, 
                      share opportunities, and connect with fellow engineers.
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                        📅 6:00 PM - 8:00 PM
                      </span>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                        📍 Engineering Building Room 101
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">22</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Jan 2024</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Career Development Workshop
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Learn essential skills for your engineering career including resume building, 
                      interview preparation, and networking strategies.
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                        📅 5:30 PM - 7:30 PM
                      </span>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                        📍 Career Services Center
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">28</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Jan 2024</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Industry Networking Night
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Connect with industry professionals, alumni, and fellow students in an 
                      informal networking environment with food and refreshments.
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                        📅 7:00 PM - 9:00 PM
                      </span>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                        📍 Student Union Ballroom
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Event Categories
              </h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  <span className="text-lg">🎓</span>
                  Academic Support
                </a>
                <a href="#" className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  <span className="text-lg">💼</span>
                  Career Development
                </a>
                <a href="#" className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  <span className="text-lg">🤝</span>
                  Networking
                </a>
                <a href="#" className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  <span className="text-lg">🏆</span>
                  Competitions
                </a>
                <a href="#" className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  <span className="text-lg">🎉</span>
                  Social Events
                </a>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
                Stay Connected
              </h3>
              <p className="text-blue-800 dark:text-blue-300 text-sm mb-4">
                Don't miss out on upcoming events! Join our mailing list for updates.
              </p>
              <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>

        {/* Past Events Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Recent Events
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Fall 2023 Conference
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                December 2023 • 150 attendees
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Our annual fall conference featuring keynote speakers, workshops, and career fair.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Study Group Finals
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                December 2023 • 75 attendees
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Collaborative study sessions to help members prepare for final exams.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Alumni Panel
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                November 2023 • 90 attendees
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Panel discussion with NSBE alumni sharing their career journeys and advice.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
