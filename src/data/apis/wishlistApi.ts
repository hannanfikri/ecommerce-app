import { apiClient } from "./client";
import type { Wishlist, ApiResponse } from "./types";

export const wishlistApi = {
  // Get user's wishlist
  getWishlist: async (): Promise<ApiResponse<Wishlist>> => {
    const response = await apiClient.get("/wishlist");
    return response.data;
  },

  // Add item to wishlist
  addToWishlist: async (productId: string): Promise<ApiResponse<Wishlist>> => {
    const response = await apiClient.post("/wishlist/items", { productId });
    return response.data;
  },

  // Remove item from wishlist
  removeFromWishlist: async (
    itemId: string
  ): Promise<ApiResponse<Wishlist>> => {
    const response = await apiClient.delete(`/wishlist/items/${itemId}`);
    return response.data;
  },

  // Clear entire wishlist
  clearWishlist: async (): Promise<ApiResponse<Wishlist>> => {
    const response = await apiClient.delete("/wishlist");
    return response.data;
  },

  // Check if product is in wishlist
  isInWishlist: async (productId: string): Promise<ApiResponse<boolean>> => {
    const response = await apiClient.get(`/wishlist/check/${productId}`);
    return response.data;
  },

  // Move item from wishlist to cart
  moveToCart: async (
    itemId: string,
    quantity = 1
  ): Promise<ApiResponse<{ wishlist: Wishlist; cart: any }>> => {
    const response = await apiClient.post(
      `/wishlist/items/${itemId}/move-to-cart`,
      { quantity }
    );
    return response.data;
  },
};
