// Custom hook for using products with API integration
import { useEffect } from "react";
import { useProductStore } from "../stores/productStore";

export const useProducts = () => {
  const {
    products,
    filteredProducts,
    loading,
    error,
    featuredProducts,
    fetchProducts,
    fetchFeaturedProducts,
    clearError,
  } = useProductStore();

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Fetch featured products on component mount
  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return {
    products,
    filteredProducts,
    featuredProducts,
    loading,
    error,
    clearError,
    // Expose store methods for manual refresh
    refetch: fetchProducts,
    refetchFeatured: fetchFeaturedProducts,
  };
};

export const useFeaturedProducts = (limit = 8) => {
  const { featuredProducts, loading, error, fetchFeaturedProducts } =
    useProductStore();

  useEffect(() => {
    fetchFeaturedProducts(limit);
  }, [fetchFeaturedProducts, limit]);

  return {
    products: featuredProducts,
    loading,
    error,
    refetch: () => fetchFeaturedProducts(limit),
  };
};
