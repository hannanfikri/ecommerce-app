import { useTranslation } from "react-i18next";
import { useFeaturedProducts } from "../../hooks";

export const Home = () => {
  const { t } = useTranslation("home");
  const { products: featuredProducts, loading, error } = useFeaturedProducts(4);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">{t("welcome")}</h1>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">{t("heroTitle")}</h2>
          <p className="text-lg mb-6">{t("heroDescription")}</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t("shopNow")}
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{t("featuredCategories")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">{t("electronics")}</h3>
            <p className="text-gray-600">{t("electronicsDesc")}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">{t("fashion")}</h3>
            <p className="text-gray-600">{t("fashionDesc")}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">{t("homeGarden")}</h3>
            <p className="text-gray-600">{t("homeGardenDesc")}</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">{t("featuredProducts")}</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            Error loading products: {error}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white border rounded-lg p-4 shadow-sm animate-pulse"
              >
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  {product.images && product.images[0] ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const img = e.currentTarget;
                        const placeholder =
                          img.nextElementSibling as HTMLElement;
                        img.style.display = "none";
                        if (placeholder) placeholder.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500"
                    style={{ display: product.images?.[0] ? "none" : "flex" }}
                  >
                    No Image
                  </div>
                </div>
                <h3 className="font-semibold mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.rating > 0 && (
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="text-yellow-400 mr-1">★</span>
                      {product.rating.toFixed(1)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white border rounded-lg p-4 shadow-sm"
              >
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <h3 className="font-semibold mb-2">
                  {t("product")} {item}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {t("productDescription")}
                </p>
                <p className="text-lg font-bold text-blue-600">$99.99</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
