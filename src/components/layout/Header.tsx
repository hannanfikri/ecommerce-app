import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b">
          <div>
            <span>Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/help" className="hover:text-blue-600">
              Help
            </Link>
            <Link to="/account" className="hover:text-blue-600">
              My Account
            </Link>
            <span>📞 1-800-123-4567</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            🛒 ShopEase
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600">
                🔍
              </button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <Link
              to="/wishlist"
              className="flex items-center hover:text-blue-600"
            >
              <span className="text-xl mr-1">💝</span>
              <span className="hidden md:block">Wishlist</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center hover:text-blue-600 relative"
            >
              <span className="text-xl mr-1">🛒</span>
              <span className="hidden md:block">Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <div className="hidden md:block">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Sign In
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="py-3 border-t">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/categories"
                className="hover:text-blue-600 font-medium"
              >
                All Categories
              </Link>
              <Link
                to="/categories/electronics"
                className="hover:text-blue-600"
              >
                Electronics
              </Link>
              <Link to="/categories/fashion" className="hover:text-blue-600">
                Fashion
              </Link>
              <Link
                to="/categories/home-garden"
                className="hover:text-blue-600"
              >
                Home & Garden
              </Link>
              <Link to="/categories/sports" className="hover:text-blue-600">
                Sports
              </Link>
              <Link to="/categories/books" className="hover:text-blue-600">
                Books
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <span className="text-red-600 font-medium">🔥 Sale</span>
              <span className="text-green-600 font-medium">
                ✨ New Arrivals
              </span>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-3">
                <Link
                  to="/categories"
                  className="hover:text-blue-600 font-medium"
                >
                  All Categories
                </Link>
                <Link
                  to="/categories/electronics"
                  className="hover:text-blue-600"
                >
                  Electronics
                </Link>
                <Link to="/categories/fashion" className="hover:text-blue-600">
                  Fashion
                </Link>
                <Link
                  to="/categories/home-garden"
                  className="hover:text-blue-600"
                >
                  Home & Garden
                </Link>
                <Link to="/categories/sports" className="hover:text-blue-600">
                  Sports
                </Link>
                <Link to="/categories/books" className="hover:text-blue-600">
                  Books
                </Link>
                <div className="pt-3 border-t">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
