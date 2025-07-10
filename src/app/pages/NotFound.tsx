export const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-8xl mb-8">🔍</div>
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Go to Homepage
          </button>
          <button className="w-full border border-gray-300 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
            Browse Categories
          </button>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8">
          <p className="text-gray-600 mb-4">Or search for what you need:</p>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 border rounded-lg px-4 py-2"
            />
            <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gray-100 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Electronics
            </button>
            <button className="bg-gray-100 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Fashion
            </button>
            <button className="bg-gray-100 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Home & Garden
            </button>
            <button className="bg-gray-100 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Sports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
