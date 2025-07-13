import { apiClient } from "./client";
import type { Order, Address, ApiResponse, PaginatedResponse } from "./types";

export const orderApi = {
  // Create new order
  createOrder: async (orderData: {
    items: { productId: string; quantity: number; variants?: any }[];
    shippingAddress: Address;
    billingAddress: Address;
    paymentMethod: string;
  }): Promise<ApiResponse<Order>> => {
    const response = await apiClient.post("/orders", orderData);
    return response.data;
  },

  // Get user's orders
  getOrders: async (
    page = 1,
    limit = 10
  ): Promise<PaginatedResponse<Order>> => {
    const response = await apiClient.get("/orders", {
      params: { page, limit },
    });
    return response.data;
  },

  // Get single order by ID
  getOrder: async (orderId: string): Promise<ApiResponse<Order>> => {
    const response = await apiClient.get(`/orders/${orderId}`);
    return response.data;
  },

  // Cancel order
  cancelOrder: async (
    orderId: string,
    reason?: string
  ): Promise<ApiResponse<Order>> => {
    const response = await apiClient.put(`/orders/${orderId}/cancel`, {
      reason,
    });
    return response.data;
  },

  // Track order
  trackOrder: async (
    orderId: string
  ): Promise<
    ApiResponse<{
      order: Order;
      tracking: {
        status: string;
        location: string;
        timestamp: string;
        description: string;
      }[];
    }>
  > => {
    const response = await apiClient.get(`/orders/${orderId}/tracking`);
    return response.data;
  },

  // Request return/refund
  requestReturn: async (
    orderId: string,
    items: {
      itemId: string;
      quantity: number;
      reason: string;
    }[]
  ): Promise<ApiResponse<any>> => {
    const response = await apiClient.post(`/orders/${orderId}/return`, {
      items,
    });
    return response.data;
  },
};
