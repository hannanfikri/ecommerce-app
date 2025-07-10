export const Cart = () => {
  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      quantity: 2,
      image: "🎧",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      quantity: 1,
      image: "⌚",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 45.99,
      quantity: 1,
      image: "💻",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to get started</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border rounded-lg">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-6 ${
                    index !== cartItems.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{item.image}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600">In Stock</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border rounded-lg">
                        <button className="px-3 py-1 hover:bg-gray-100">
                          -
                        </button>
                        <span className="px-4 py-1 border-x">
                          {item.quantity}
                        </span>
                        <button className="px-3 py-1 hover:bg-gray-100">
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                      <button className="text-red-500 hover:text-red-700 p-2">
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <button className="text-blue-600 hover:text-blue-800">
                ← Continue Shopping
              </button>
              <button className="text-red-600 hover:text-red-800">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-6">
              Proceed to Checkout
            </button>

            {/* Promo Code */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                Promo Code
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 border rounded-lg px-3 py-2"
                />
                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
