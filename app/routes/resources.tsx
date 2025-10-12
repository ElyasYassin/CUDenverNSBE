import type { Route } from "./+types/resources";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resources - NSBE Chapter" },
    { name: "description", content: "Access academic resources, career development tools, scholarships, and study materials for NSBE members." },
  ];
}

export default function Resources() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Access academic support, career development tools, scholarships, 
            and exclusive resources designed to help you succeed in engineering.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Academic Resources */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
              <span className="text-3xl">📚</span>
              Academic Resources
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Study Groups & Tutoring
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                  Join peer-led study groups for core engineering courses including Calculus, Physics, and major-specific classes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs">
                    Calculus I-III
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs">
                    Physics I-II
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs">
                    Statics & Dynamics
                  </span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Academic Mentorship
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                  Connect with upperclassmen and graduate students for academic guidance and course planning.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  Find a Mentor →
                </a>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Research Opportunities
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                  Explore undergraduate research positions and collaborative projects with faculty members.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  View Opportunities →
                </a>
              </div>
            </div>
          </section>

          {/* Career Development */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
              <span className="text-3xl">💼</span>
              Career Development
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Resume & Interview Prep
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                  Get personalized feedback on your resume and practice interview skills with industry professionals.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  Schedule Session →
                </a>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Internship Database
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                  Access exclusive internship opportunities from our corporate partners and alumni network.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs">
                    Summer 2024
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs">
                    Co-op Programs
                  </span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Professional Networking
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                  Connect with alumni and industry professionals through our mentorship program and networking events.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  Join Network →
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Scholarships & Financial Aid */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center flex items-center justify-center gap-3">
            <span className="text-3xl">🎓</span>
            Scholarships & Financial Aid
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
                NSBE National Scholarships
              </h3>
              <p className="text-blue-800 dark:text-blue-300 text-sm mb-4">
                Apply for national NSBE scholarships ranging from $1,000 to $10,000.
              </p>
              <div className="text-blue-700 dark:text-blue-400 font-medium text-sm">
                Deadline: March 15, 2024
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-200 mb-2">
                Corporate Scholarships
              </h3>
              <p className="text-green-800 dark:text-green-300 text-sm mb-4">
                Exclusive scholarship opportunities from our corporate partners.
              </p>
              <div className="text-green-700 dark:text-green-400 font-medium text-sm">
                Rolling Applications
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-200 mb-2">
                Conference Travel Grants
              </h3>
              <p className="text-purple-800 dark:text-purple-300 text-sm mb-4">
                Financial assistance for attending NSBE regional and national conferences.
              </p>
              <div className="text-purple-700 dark:text-purple-400 font-medium text-sm">
                Apply Early
              </div>
            </div>
          </div>
        </section>

        {/* Technical Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center flex items-center justify-center gap-3">
            <span className="text-3xl">⚙️</span>
            Technical Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Software & Tools
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">MATLAB License</span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">AutoCAD Access</span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">SolidWorks License</span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Microsoft Office</span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                      Available
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Study Materials
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Engineering textbooks (digital copies)</li>
                  <li>• Past exam solutions and study guides</li>
                  <li>• Formula sheets and reference materials</li>
                  <li>• Video tutorials and recorded lectures</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Lab & Equipment Access
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• 3D Printing Lab (free filament)</li>
                  <li>• Electronics Lab Equipment</li>
                  <li>• Computer Lab with Engineering Software</li>
                  <li>• Study Rooms & Group Spaces</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Industry Publications
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• IEEE Digital Library Access</li>
                  <li>• Engineering News & Journals</li>
                  <li>• Industry Reports & Whitepapers</li>
                  <li>• Technical Standards Library</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Links */}
        <section className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Quick Access
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="#" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-2">📖</span>
              <span className="font-medium text-gray-900 dark:text-white text-sm text-center">Study Guides</span>
            </a>
            
            <a href="#" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-2">💻</span>
              <span className="font-medium text-gray-900 dark:text-white text-sm text-center">Software Downloads</span>
            </a>
            
            <a href="#" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-2">📋</span>
              <span className="font-medium text-gray-900 dark:text-white text-sm text-center">Application Forms</span>
            </a>
            
            <a href="#" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-2">📞</span>
              <span className="font-medium text-gray-900 dark:text-white text-sm text-center">Support</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
