import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">🛒 ShopEase</h3>
            <p className="text-gray-300 mb-4">{t("description")}</p>
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
            <h4 className="text-lg font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  {t("allProducts")}
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-gray-300 hover:text-white"
                >
                  {t("categories")}
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-300 hover:text-white">
                  {t("sale")}
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className="text-gray-300 hover:text-white"
                >
                  {t("newArrivals")}
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-white">
                  {t("brands")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("customerService")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-white">
                  {t("helpCenter")}
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white">
                  {t("returns")}
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white">
                  {t("shippingInfo")}
                </Link>
              </li>
              <li>
                <Link
                  to="/track-order"
                  className="text-gray-300 hover:text-white"
                >
                  {t("trackOrder")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("stayUpdated")}</h4>
            <p className="text-gray-300 mb-4">{t("subscribeText")}</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                {t("subscribe")}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">{t("copyright")}</p>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  {t("privacyPolicy")}
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  {t("termsOfService")}
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white">
                  {t("cookiePolicy")}
                </Link>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">{t("weAccept")}</span>
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
              <span>{t("secureShopping")}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🚚</span>
              <span>{t("freeShipping")}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">↩️</span>
              <span>{t("returns30Day")}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🎧</span>
              <span>{t("support24_7")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
