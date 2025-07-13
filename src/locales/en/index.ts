// English translations exports
import header from "./header.json";
import footer from "./footer.json";
import home from "./home.json";
import products from "./products.json";
import cart from "./cart.json";
import common from "./common.json";

// Export individual namespace translations
export { header, footer, home, products, cart, common };

// Export all translations as a single object
export const enTranslations = {
  header,
  footer,
  home,
  products,
  cart,
  common,
};

// Export default as all translations
export default enTranslations;
