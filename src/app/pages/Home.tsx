export const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to Our Store
      </h1>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Discover Amazing Products</h2>
          <p className="text-lg mb-6">
            Find the perfect items for your lifestyle with our curated
            collection of premium products.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Electronics</h3>
            <p className="text-gray-600">Latest gadgets and tech</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Fashion</h3>
            <p className="text-gray-600">Trendy clothing and accessories</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Home & Garden</h3>
            <p className="text-gray-600">Beautiful items for your space</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section Placeholder */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white border rounded-lg p-4 shadow-sm"
            >
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">Product {item}</h3>
              <p className="text-gray-600 text-sm mb-2">
                Product description...
              </p>
              <p className="text-lg font-bold text-blue-600">$99.99</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
