import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation("home");
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

      {/* Featured Products Section Placeholder */}
      <section>
        <h2 className="text-2xl font-bold mb-6">{t("featuredProducts")}</h2>
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
      </section>
    </div>
  );
};
