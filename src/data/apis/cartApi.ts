import { apiClient } from "./client";
import type { Cart, ApiResponse } from "./types";

export const cartApi = {
  // Get user's cart
  getCart: async (): Promise<ApiResponse<Cart>> => {
    const response = await apiClient.get("/cart");
    return response.data;
  },

  // Add item to cart
  addToCart: async (
    productId: string,
    quantity: number,
    variants?: { [key: string]: string }
  ): Promise<ApiResponse<Cart>> => {
    const response = await apiClient.post("/cart/items", {
      productId,
      quantity,
      variants,
    });
    return response.data;
  },

  // Update cart item quantity
  updateCartItem: async (
    itemId: string,
    quantity: number
  ): Promise<ApiResponse<Cart>> => {
    const response = await apiClient.put(`/cart/items/${itemId}`, { quantity });
    return response.data;
  },

  // Remove item from cart
  removeFromCart: async (itemId: string): Promise<ApiResponse<Cart>> => {
    const response = await apiClient.delete(`/cart/items/${itemId}`);
    return response.data;
  },

  // Clear entire cart
  clearCart: async (): Promise<ApiResponse<Cart>> => {
    const response = await apiClient.delete("/cart");
    return response.data;
  },

  // Apply coupon code
  applyCoupon: async (couponCode: string): Promise<ApiResponse<Cart>> => {
    const response = await apiClient.post("/cart/coupon", { couponCode });
    return response.data;
  },

  // Remove coupon
  removeCoupon: async (): Promise<ApiResponse<Cart>> => {
    const response = await apiClient.delete("/cart/coupon");
    return response.data;
  },

  // Calculate shipping
  calculateShipping: async (
    shippingAddress: any
  ): Promise<ApiResponse<{ shipping: number; options: any[] }>> => {
    const response = await apiClient.post("/cart/shipping", {
      shippingAddress,
    });
    return response.data;
  },
};
