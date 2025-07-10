export const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      description: "Latest gadgets and tech accessories",
      productCount: 150,
      image: "📱",
    },
    {
      name: "Fashion",
      description: "Trendy clothing and accessories",
      productCount: 230,
      image: "👗",
    },
    {
      name: "Home & Garden",
      description: "Beautiful items for your space",
      productCount: 180,
      image: "🏠",
    },
    {
      name: "Sports & Fitness",
      description: "Equipment for active lifestyle",
      productCount: 95,
      image: "⚽",
    },
    {
      name: "Books",
      description: "Educational and entertainment books",
      productCount: 320,
      image: "📚",
    },
    {
      name: "Beauty & Health",
      description: "Personal care and wellness products",
      productCount: 140,
      image: "💄",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shop by Category</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">{category.image}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                {category.productCount} products
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Browse Category
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Collections */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Summer Sale</h3>
            <p className="mb-6">Up to 50% off on selected items</p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Sale
            </button>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">New Arrivals</h3>
            <p className="mb-6">Check out the latest products</p>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              See New Items
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
