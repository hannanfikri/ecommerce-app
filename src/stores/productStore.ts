import { create } from "zustand";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  brand: string;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  features: string[];
  sku: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

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
  loading: boolean;
  error: string | null;
  filters: ProductFilters;
  sort: ProductSort;
  pagination: {
    page: number;
    limit: number;
    total: number;
  };

  // Actions
  setProducts: (products: Product[]) => void;
  setCurrentProduct: (product: Product | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilters: (filters: Partial<ProductFilters>) => void;
  setSort: (sort: ProductSort) => void;
  setPagination: (pagination: Partial<ProductStore["pagination"]>) => void;
  applyFilters: () => void;
  getProductById: (id: string) => Product | undefined;
  searchProducts: (query: string) => void;
  getProductsByCategory: (category: string) => Product[];
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  filteredProducts: [],
  currentProduct: null,
  loading: false,
  error: null,
  filters: {},
  sort: { field: "name", direction: "asc" },
  pagination: {
    page: 1,
    limit: 12,
    total: 0,
  },

  setProducts: (products) => {
    set({ products, filteredProducts: products });
    get().applyFilters();
  },

  setCurrentProduct: (product) => set({ currentProduct: product }),

  setLoading: (loading) => set({ loading }),

  setError: (error) => set({ error }),

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
          product.category.toLowerCase() === filters.category?.toLowerCase()
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
      const aValue = a[sort.field];
      const bValue = b[sort.field];

      if (sort.direction === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    set({
      filteredProducts: filtered,
      pagination: { ...get().pagination, total: filtered.length },
    });
  },

  getProductById: (id) => {
    return get().products.find((product) => product.id === id);
  },

  searchProducts: (query) => {
    get().setFilters({ search: query });
  },

  getProductsByCategory: (category) => {
    return get().products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  },
}));
