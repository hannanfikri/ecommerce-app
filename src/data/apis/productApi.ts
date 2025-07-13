import { apiClient } from "./client";
import type {
  Product,
  ApiResponse,
  PaginatedResponse,
  SearchParams,
  Category,
} from "./types";

export const productApi = {
  // Get all products with pagination and filters
  getProducts: async (
    params?: SearchParams
  ): Promise<PaginatedResponse<Product>> => {
    const response = await apiClient.get("/products", { params });
    return response.data;
  },

  // Get single product by ID
  getProduct: async (id: string): Promise<ApiResponse<Product>> => {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  },

  // Search products
  searchProducts: async (
    query: string,
    params?: SearchParams
  ): Promise<PaginatedResponse<Product>> => {
    const response = await apiClient.get("/products/search", {
      params: { ...params, query },
    });
    return response.data;
  },

  // Get featured products
  getFeaturedProducts: async (limit = 8): Promise<ApiResponse<Product[]>> => {
    const response = await apiClient.get("/products/featured", {
      params: { limit },
    });
    return response.data;
  },

  // Get products by category
  getProductsByCategory: async (
    categoryId: string,
    params?: SearchParams
  ): Promise<PaginatedResponse<Product>> => {
    const response = await apiClient.get(`/products/category/${categoryId}`, {
      params,
    });
    return response.data;
  },

  // Get product recommendations
  getRecommendations: async (
    productId: string,
    limit = 4
  ): Promise<ApiResponse<Product[]>> => {
    const response = await apiClient.get(
      `/products/${productId}/recommendations`,
      {
        params: { limit },
      }
    );
    return response.data;
  },
};

export const categoryApi = {
  // Get all categories
  getCategories: async (): Promise<ApiResponse<Category[]>> => {
    const response = await apiClient.get("/categories");
    return response.data;
  },

  // Get category by ID
  getCategory: async (id: string): Promise<ApiResponse<Category>> => {
    const response = await apiClient.get(`/categories/${id}`);
    return response.data;
  },

  // Get featured categories
  getFeaturedCategories: async (
    limit = 6
  ): Promise<ApiResponse<Category[]>> => {
    const response = await apiClient.get("/categories/featured", {
      params: { limit },
    });
    return response.data;
  },
};
