import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - NSBE Chapter" },
    { name: "description", content: "Get in touch with the NSBE chapter. Find officer contact information, meeting locations, and social media links." },
  ];
}

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get in touch with our NSBE chapter leadership, join our community, 
            and stay connected with upcoming events and opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Send us a Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="events">Event Information</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Get in Touch
            </h2>
            
            {/* Chapter Officers */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Chapter Leadership
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">P</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">President</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">president@nsbe-ucdenver.edu</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 font-semibold">VP</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Vice President</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">vp@nsbe-ucdenver.edu</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">S</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Secretary</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">secretary@nsbe-ucdenver.edu</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 dark:text-orange-400 font-semibold">T</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Treasurer</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">treasurer@nsbe-ucdenver.edu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Meeting Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Meeting Information
              </h3>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600 dark:text-blue-400 text-lg">📅</span>
                    <div>
                      <p className="font-medium text-blue-900 dark:text-blue-200">When</p>
                      <p className="text-sm text-blue-800 dark:text-blue-300">Every 2nd Monday of the month</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600 dark:text-blue-400 text-lg">⏰</span>
                    <div>
                      <p className="font-medium text-blue-900 dark:text-blue-200">Time</p>
                      <p className="text-sm text-blue-800 dark:text-blue-300">6:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600 dark:text-blue-400 text-lg">📍</span>
                    <div>
                      <p className="font-medium text-blue-900 dark:text-blue-200">Where</p>
                      <p className="text-sm text-blue-800 dark:text-blue-300">
                        Engineering Building<br />
                        Room 101<br />
                        University of Colorado Denver
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Us
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <span className="text-2xl">📘</span>
                  <div>
                    <p className="font-medium text-blue-900 dark:text-blue-200">Facebook</p>
                    <p className="text-xs text-blue-800 dark:text-blue-300">@NSBEUCDenver</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <span className="text-2xl">📷</span>
                  <div>
                    <p className="font-medium text-blue-900 dark:text-blue-200">Instagram</p>
                    <p className="text-xs text-blue-800 dark:text-blue-300">@nsbe_ucdenver</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <span className="text-2xl">🐦</span>
                  <div>
                    <p className="font-medium text-blue-900 dark:text-blue-200">Twitter</p>
                    <p className="text-xs text-blue-800 dark:text-blue-300">@NSBEUCDenver</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <span className="text-2xl">💼</span>
                  <div>
                    <p className="font-medium text-blue-900 dark:text-blue-200">LinkedIn</p>
                    <p className="text-xs text-blue-800 dark:text-blue-300">NSBE UC Denver</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
