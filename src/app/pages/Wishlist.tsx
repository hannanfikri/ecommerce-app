export const Wishlist = () => {
  // Mock wishlist items
  const wishlistItems = [
    {
      id: "1",
      name: "Premium Wireless Earbuds",
      price: 149.99,
      originalPrice: 199.99,
      image: "🎧",
      inStock: true,
      rating: 4.5,
    },
    {
      id: "2",
      name: "Smart Fitness Tracker",
      price: 89.99,
      originalPrice: 119.99,
      image: "⌚",
      inStock: true,
      rating: 4.2,
    },
    {
      id: "3",
      name: "Portable Bluetooth Speaker",
      price: 79.99,
      originalPrice: 99.99,
      image: "🔊",
      inStock: false,
      rating: 4.7,
    },
    {
      id: "4",
      name: "Wireless Charging Pad",
      price: 29.99,
      originalPrice: 39.99,
      image: "🔋",
      inStock: true,
      rating: 4.0,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">💝</div>
          <h2 className="text-2xl font-semibold mb-4">
            Your wishlist is empty
          </h2>
          <p className="text-gray-600 mb-8">Save items you love for later</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              {wishlistItems.length} items in your wishlist
            </p>
            <button className="text-red-600 hover:text-red-800 text-sm">
              Clear Wishlist
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-lg p-4 shadow-sm relative group"
              >
                {/* Remove from Wishlist Button */}
                <button className="absolute top-2 right-2 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  ❌
                </button>

                {/* Product Image */}
                <div className="text-6xl text-center mb-4">{item.image}</div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg line-clamp-2">
                    {item.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(Math.floor(item.rating))}
                      {"☆".repeat(5 - Math.floor(item.rating))}
                    </div>
                    <span className="text-gray-500 text-xs ml-2">
                      ({item.rating})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">
                      ${item.price}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-green-600 font-medium">
                        Save ${(item.originalPrice - item.price).toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Stock Status */}
                  <div className="text-sm">
                    {item.inStock ? (
                      <span className="text-green-600">✓ In Stock</span>
                    ) : (
                      <span className="text-red-600">⚠️ Out of Stock</span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <button
                      className={`w-full py-2 rounded-lg font-medium transition-colors ${
                        item.inStock
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!item.inStock}
                    >
                      {item.inStock ? "Add to Cart" : "Notify When Available"}
                    </button>
                    <button className="w-full py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Sale Badge */}
                {item.originalPrice > item.price && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Continue Shopping */}
          <div className="text-center mt-12">
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* Recently Viewed */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You might also like</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white border rounded-lg p-4 shadow-sm"
            >
              <div className="bg-gray-200 h-32 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">Recommended Product {item}</h3>
              <p className="text-lg font-bold text-blue-600">$59.99</p>
              <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
