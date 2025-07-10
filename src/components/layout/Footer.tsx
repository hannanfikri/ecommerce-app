import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">🛒 ShopEase</h3>
            <p className="text-gray-300 mb-4">
              Your trusted online marketplace for quality products at great
              prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                📘
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                🐦
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                📷
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                💼
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-gray-300 hover:text-white"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-300 hover:text-white">
                  Sale
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className="text-gray-300 hover:text-white"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-white">
                  Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  to="/track-order"
                  className="text-gray-300 hover:text-white"
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 ShopEase. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">We Accept:</span>
              <div className="flex space-x-2">
                <span className="text-blue-500">💳</span>
                <span className="text-yellow-500">💳</span>
                <span className="text-red-500">💳</span>
                <span className="text-green-500">💳</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="mr-2">🔒</span>
              <span>Secure Shopping</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🚚</span>
              <span>Free Shipping Over $50</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">↩️</span>
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🎧</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
