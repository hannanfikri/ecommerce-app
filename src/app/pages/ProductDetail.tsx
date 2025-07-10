import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-gray-200 h-96 rounded-lg"></div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((img) => (
              <div
                key={img}
                className="bg-gray-200 h-20 rounded-lg cursor-pointer hover:opacity-75"
              ></div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Product {id}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-lg">★★★★☆</div>
              <span className="text-gray-500 ml-2">(245 reviews)</span>
            </div>
            <p className="text-2xl font-bold text-blue-600 mb-4">$99.99</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              This is a detailed description of the product. It includes all the
              important features and specifications that customers need to know
              before making a purchase decision. The product is made with
              high-quality materials and comes with a satisfaction guarantee.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                High-quality materials
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Fast shipping
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                30-day return policy
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Customer support
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <select className="border rounded-lg px-4 py-2 w-20">
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
              <button className="w-full border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="border-t pt-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">SKU:</span> PRD-{id}
              </div>
              <div>
                <span className="font-medium">Category:</span> Electronics
              </div>
              <div>
                <span className="font-medium">Brand:</span> BrandName
              </div>
              <div>
                <span className="font-medium">Availability:</span> In Stock
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((review) => (
            <div key={review} className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">★★★★☆</div>
                  <span className="font-medium ml-3">Customer {review}</span>
                </div>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </div>
              <p className="text-gray-600">
                Great product! Really satisfied with the quality and fast
                delivery. Would definitely recommend to others.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
