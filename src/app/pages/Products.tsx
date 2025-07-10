import { useParams, useSearchParams } from "react-router-dom";

export const Products = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-1/4">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {[
                  "Electronics",
                  "Fashion",
                  "Home & Garden",
                  "Sports",
                  "Books",
                ].map((cat) => (
                  <label key={cat} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="price" className="mr-2" />
                  <span className="text-sm">Under $25</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="price" className="mr-2" />
                  <span className="text-sm">$25 - $50</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="price" className="mr-2" />
                  <span className="text-sm">$50 - $100</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="price" className="mr-2" />
                  <span className="text-sm">Over $100</span>
                </label>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Rating</h4>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{rating}+ Stars</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">
                {category ? `${category} Products` : "All Products"}
              </h1>
              {search && (
                <p className="text-gray-600 mt-1">
                  Search results for: "{search}"
                </p>
              )}
            </div>

            <select className="border rounded-lg px-4 py-2">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
              <option>Newest</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <h3 className="font-semibold mb-2">Product {i + 1}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Short product description here...
                </p>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 text-sm">★★★★☆</div>
                  <span className="text-gray-500 text-xs ml-2">
                    (124 reviews)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-blue-600">
                    ${(Math.random() * 100 + 10).toFixed(2)}
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <button className="px-3 py-2 border rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">
                1
              </button>
              <button className="px-3 py-2 border rounded-lg hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 border rounded-lg hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-2 border rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
