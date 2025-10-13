import { Link, useLocation } from "react-router";

export function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-gray-900 dark:text-white font-light text-lg">
            NSBE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm transition-colors ${
                isActive("/")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm transition-colors ${
                isActive("/about")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              to="/events"
              className={`text-sm transition-colors ${
                isActive("/events")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Events
            </Link>
            <Link
              to="/membership"
              className={`text-sm transition-colors ${
                isActive("/membership")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Membership
            </Link>
            <Link
              to="/resources"
              className={`text-sm transition-colors ${
                isActive("/resources")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className={`text-sm transition-colors ${
                isActive("/contact")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-900 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-4 pb-4 space-y-4">
            <Link
              to="/"
              className={`block text-sm transition-colors ${
                isActive("/")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block text-sm transition-colors ${
                isActive("/about")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              to="/events"
              className={`block text-sm transition-colors ${
                isActive("/events")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Events
            </Link>
            <Link
              to="/membership"
              className={`block text-sm transition-colors ${
                isActive("/membership")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Membership
            </Link>
            <Link
              to="/resources"
              className={`block text-sm transition-colors ${
                isActive("/resources")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className={`block text-sm transition-colors ${
                isActive("/contact")
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
