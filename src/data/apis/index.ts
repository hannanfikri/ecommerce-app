// Export API client
export { apiClient } from "./client";

// Export API services
export { productApi, categoryApi } from "./productApi";
export { authApi } from "./authApi";
export { cartApi } from "./cartApi";
export { wishlistApi } from "./wishlistApi";
export { orderApi } from "./orderApi";

// Export types
export type * from "./types";

// Import for the combined API object
import { productApi, categoryApi } from "./productApi";
import { authApi } from "./authApi";
import { cartApi } from "./cartApi";
import { wishlistApi } from "./wishlistApi";
import { orderApi } from "./orderApi";

// API helper functions
export const api = {
  products: productApi,
  categories: categoryApi,
  auth: authApi,
  cart: cartApi,
  wishlist: wishlistApi,
  orders: orderApi,
} as const;
