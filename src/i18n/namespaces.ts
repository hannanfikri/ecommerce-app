// Namespace constants for better type safety and consistency
export const NS_HEADER = "header";
export const NS_FOOTER = "footer";
export const NS_HOME = "home";
export const NS_PRODUCTS = "products";
export const NS_CART = "cart";
export const NS_COMMON = "common";

// Export all namespaces as an array
export const ALL_NAMESPACES = [
  NS_HEADER,
  NS_FOOTER,
  NS_HOME,
  NS_PRODUCTS,
  NS_CART,
  NS_COMMON,
] as const;

// Type for namespace keys
export type Namespace = (typeof ALL_NAMESPACES)[number];
