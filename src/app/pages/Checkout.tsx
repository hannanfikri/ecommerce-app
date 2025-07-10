import { useState } from "react";

export const Checkout = () => {
  const [step, setStep] = useState(1);

  const orderSummary = {
    subtotal: 325.97,
    shipping: 9.99,
    tax: 26.08,
    total: 361.04,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 1 ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            1
          </div>
          <span
            className={
              step >= 1 ? "text-blue-600 font-medium" : "text-gray-500"
            }
          >
            Shipping
          </span>
          <div className="w-8 h-0.5 bg-gray-300"></div>
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 2 ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            2
          </div>
          <span
            className={
              step >= 2 ? "text-blue-600 font-medium" : "text-gray-500"
            }
          >
            Payment
          </span>
          <div className="w-8 h-0.5 bg-gray-300"></div>
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 3 ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            3
          </div>
          <span
            className={
              step >= 3 ? "text-blue-600 font-medium" : "text-gray-500"
            }
          >
            Review
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          {step === 1 && (
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">
                Shipping Information
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      State
                    </label>
                    <select className="w-full border rounded-lg px-3 py-2">
                      <option>Select State</option>
                      <option>California</option>
                      <option>New York</option>
                      <option>Texas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">
                Payment Information
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Order Review</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Shipping Address</h3>
                  <p className="text-gray-600">
                    John Doe
                    <br />
                    123 Main Street
                    <br />
                    New York, NY 10001
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Payment Method</h3>
                  <p className="text-gray-600">**** **** **** 3456</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Items</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Wireless Headphones (2x)</span>
                      <span>$159.98</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Smart Watch (1x)</span>
                      <span>$199.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Laptop Stand (1x)</span>
                      <span>$45.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="px-6 py-3 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Place Order
              </button>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white border rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${orderSummary.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${orderSummary.shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${orderSummary.tax.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${orderSummary.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Security Info */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">🔒</span>
              Your payment information is secure and encrypted
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
