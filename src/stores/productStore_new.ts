import { create } from "zustand";
import { api } from "../data";
import type { Product as ApiProduct, Category, SearchParams } from "../data";

// Use the API types
export type Product = ApiProduct;

export interface ProductFilters {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  inStock?: boolean;
  brands?: string[];
  search?: string;
}

export interface ProductSort {
  field: "name" | "price" | "rating" | "createdAt";
  direction: "asc" | "desc";
}

interface ProductStore {
  products: Product[];
  filteredProducts: Product[];
  currentProduct: Product | null;
  categories: Category[];
  featuredProducts: Product[];
  loading: boolean;
  error: string | null;
  filters: ProductFilters;
  sort: ProductSort;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };

  // API Actions
  fetchProducts: (params?: SearchParams) => Promise<void>;
  fetchProduct: (id: string) => Promise<void>;
  fetchFeaturedProducts: (limit?: number) => Promise<void>;
  fetchCategories: () => Promise<void>;
  searchProducts: (query: string, params?: SearchParams) => Promise<void>;
  fetchProductsByCategory: (
    categoryId: string,
    params?: SearchParams
  ) => Promise<void>;

  // Local Actions
  setCurrentProduct: (product: Product | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilters: (filters: Partial<ProductFilters>) => void;
  setSort: (sort: ProductSort) => void;
  setPagination: (pagination: Partial<ProductStore["pagination"]>) => void;
  applyFilters: () => void;
  getProductById: (id: string) => Product | undefined;
  clearError: () => void;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  filteredProducts: [],
  currentProduct: null,
  categories: [],
  featuredProducts: [],
  loading: false,
  error: null,
  filters: {},
  sort: { field: "name", direction: "asc" },
  pagination: {
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0,
  },

  // API Actions
  fetchProducts: async (params) => {
    try {
      set({ loading: true, error: null });
      const response = await api.products.getProducts(params);
      set({
        products: response.data,
        filteredProducts: response.data,
        pagination: response.pagination,
      });
      get().applyFilters();
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to fetch products",
      });
    } finally {
      set({ loading: false });
    }
  },

  fetchProduct: async (id) => {
    try {
      set({ loading: true, error: null });
      const response = await api.products.getProduct(id);
      set({ currentProduct: response.data });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to fetch product",
      });
    } finally {
      set({ loading: false });
    }
  },

  fetchFeaturedProducts: async (limit = 8) => {
    try {
      set({ loading: true, error: null });
      const response = await api.products.getFeaturedProducts(limit);
      set({ featuredProducts: response.data });
    } catch (error) {
      set({
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch featured products",
      });
    } finally {
      set({ loading: false });
    }
  },

  fetchCategories: async () => {
    try {
      set({ loading: true, error: null });
      const response = await api.categories.getCategories();
      set({ categories: response.data });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to fetch categories",
      });
    } finally {
      set({ loading: false });
    }
  },

  searchProducts: async (query, params) => {
    try {
      set({ loading: true, error: null });
      const response = await api.products.searchProducts(query, params);
      set({
        products: response.data,
        filteredProducts: response.data,
        pagination: response.pagination,
      });
      get().applyFilters();
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to search products",
      });
    } finally {
      set({ loading: false });
    }
  },

  fetchProductsByCategory: async (categoryId, params) => {
    try {
      set({ loading: true, error: null });
      const response = await api.products.getProductsByCategory(
        categoryId,
        params
      );
      set({
        products: response.data,
        filteredProducts: response.data,
        pagination: response.pagination,
      });
      get().applyFilters();
    } catch (error) {
      set({
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch products by category",
      });
    } finally {
      set({ loading: false });
    }
  },

  // Local Actions
  setCurrentProduct: (product) => set({ currentProduct: product }),

  setLoading: (loading) => set({ loading }),

  setError: (error) => set({ error }),

  clearError: () => set({ error: null }),

  setFilters: (newFilters) => {
    const filters = { ...get().filters, ...newFilters };
    set({ filters });
    get().applyFilters();
  },

  setSort: (sort) => {
    set({ sort });
    get().applyFilters();
  },

  setPagination: (newPagination) => {
    const pagination = { ...get().pagination, ...newPagination };
    set({ pagination });
  },

  applyFilters: () => {
    const { products, filters, sort } = get();
    let filtered = [...products];

    // Apply filters
    if (filters.category) {
      filtered = filtered.filter(
        (product) =>
          product.category.id === filters.category ||
          product.category.slug === filters.category
      );
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      );
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (product) =>
          product.price >= filters.priceRange!.min &&
          product.price <= filters.priceRange!.max
      );
    }

    if (filters.rating) {
      filtered = filtered.filter(
        (product) => product.rating >= filters.rating!
      );
    }

    if (filters.inStock !== undefined) {
      filtered = filtered.filter(
        (product) => product.inStock === filters.inStock
      );
    }

    if (filters.brands && filters.brands.length > 0) {
      filtered = filtered.filter((product) =>
        filters.brands!.includes(product.brand)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;

      switch (sort.field) {
        case "createdAt":
          aValue = new Date(a.createdAt).getTime();
          bValue = new Date(b.createdAt).getTime();
          break;
        default:
          aValue = a[sort.field];
          bValue = b[sort.field];
      }

      if (sort.direction === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    set({
      filteredProducts: filtered,
      pagination: {
        ...get().pagination,
        total: filtered.length,
        totalPages: Math.ceil(filtered.length / get().pagination.limit),
      },
    });
  },

  getProductById: (id) => {
    return get().products.find((product) => product.id === id);
  },
}));
