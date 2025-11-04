import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaApple, FaMicrosoft, FaBook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Link to="/" className="text-xl font-bold mb-4 inline-flex items-center"><FaBook className="mr-2" />TangoTime</Link>
            <p className="text-gray-400 text-sm mb-4">
              Master Japanese vocabulary with our comprehensive learning platform. 
              Join thousands of students worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/start-learning" className="text-gray-400 hover:text-white transition-colors">Start Learning</Link>
              <Link to="/tutorial" className="text-gray-400 hover:text-white transition-colors">Tutorial</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Download Apps */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Apps</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-2 transition-colors"
              >
                <FaGooglePlay className="text-2xl" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">GET IT ON</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-2 transition-colors"
              >
                <FaApple className="text-2xl" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
              <a 
                href="https://microsoft.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-2 transition-colors"
              >
                <FaMicrosoft className="text-2xl" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Get it from</p>
                  <p className="text-sm font-semibold">Microsoft</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 TangoTime. All rights reserved. | Master Japanese vocabulary with confidence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

