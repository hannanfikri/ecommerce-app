import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// Types
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  addedAt: Date;
}

interface User {
  id: string;
  email: string;
  name: string;
}

// Combined Store Interface
interface AppStore {
  // Cart slice
  cart: {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
  };

  // Wishlist slice
  wishlist: {
    items: WishlistItem[];
    totalItems: number;
  };

  // Auth slice
  auth: {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
  };

  // UI slice
  ui: {
    isMobileMenuOpen: boolean;
    theme: "light" | "dark";
    notifications: Array<{
      id: string;
      message: string;
      type: "success" | "error";
    }>;
  };

  // Cart actions
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;

  // Wishlist actions
  addToWishlist: (item: Omit<WishlistItem, "addedAt">) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (item: Omit<WishlistItem, "addedAt">) => void;

  // Auth actions
  login: (user: User) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;

  // UI actions
  toggleMobileMenu: () => void;
  setTheme: (theme: "light" | "dark") => void;
  addNotification: (message: string, type: "success" | "error") => void;
  removeNotification: (id: string) => void;
}

// Helper functions
const calculateCartTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return { totalItems, totalPrice };
};

export const useAppStore = create<AppStore>()(
  persist(
    subscribeWithSelector(
      immer((set, get) => ({
        // Initial state
        cart: {
          items: [],
          totalItems: 0,
          totalPrice: 0,
        },

        wishlist: {
          items: [],
          totalItems: 0,
        },

        auth: {
          user: null,
          isAuthenticated: false,
          loading: false,
        },

        ui: {
          isMobileMenuOpen: false,
          theme: "light",
          notifications: [],
        },

        // Cart actions
        addToCart: (newItem) => {
          set((state) => {
            const existingItem = state.cart.items.find(
              (item) => item.id === newItem.id
            );

            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.cart.items.push({ ...newItem, quantity: 1 });
            }

            const totals = calculateCartTotals(state.cart.items);
            state.cart.totalItems = totals.totalItems;
            state.cart.totalPrice = totals.totalPrice;
          });
        },

        removeFromCart: (id) => {
          set((state) => {
            state.cart.items = state.cart.items.filter(
              (item) => item.id !== id
            );
            const totals = calculateCartTotals(state.cart.items);
            state.cart.totalItems = totals.totalItems;
            state.cart.totalPrice = totals.totalPrice;
          });
        },

        updateCartQuantity: (id, quantity) => {
          set((state) => {
            const item = state.cart.items.find((item) => item.id === id);
            if (item) {
              item.quantity = quantity;
              const totals = calculateCartTotals(state.cart.items);
              state.cart.totalItems = totals.totalItems;
              state.cart.totalPrice = totals.totalPrice;
            }
          });
        },

        clearCart: () => {
          set((state) => {
            state.cart.items = [];
            state.cart.totalItems = 0;
            state.cart.totalPrice = 0;
          });
        },

        // Wishlist actions
        addToWishlist: (newItem) => {
          set((state) => {
            const exists = state.wishlist.items.some(
              (item) => item.id === newItem.id
            );
            if (!exists) {
              state.wishlist.items.push({ ...newItem, addedAt: new Date() });
              state.wishlist.totalItems = state.wishlist.items.length;
            }
          });
        },

        removeFromWishlist: (id) => {
          set((state) => {
            state.wishlist.items = state.wishlist.items.filter(
              (item) => item.id !== id
            );
            state.wishlist.totalItems = state.wishlist.items.length;
          });
        },

        toggleWishlist: (item) => {
          const isInWishlist = get().wishlist.items.some(
            (w) => w.id === item.id
          );
          if (isInWishlist) {
            get().removeFromWishlist(item.id);
          } else {
            get().addToWishlist(item);
          }
        },

        // Auth actions
        login: (user) => {
          set((state) => {
            state.auth.user = user;
            state.auth.isAuthenticated = true;
            state.auth.loading = false;
          });
        },

        logout: () => {
          set((state) => {
            state.auth.user = null;
            state.auth.isAuthenticated = false;
          });
        },

        setLoading: (loading) => {
          set((state) => {
            state.auth.loading = loading;
          });
        },

        // UI actions
        toggleMobileMenu: () => {
          set((state) => {
            state.ui.isMobileMenuOpen = !state.ui.isMobileMenuOpen;
          });
        },

        setTheme: (theme) => {
          set((state) => {
            state.ui.theme = theme;
          });
        },

        addNotification: (message, type) => {
          set((state) => {
            const notification = {
              id: Math.random().toString(36).substr(2, 9),
              message,
              type,
            };
            state.ui.notifications.push(notification);
          });
        },

        removeNotification: (id) => {
          set((state) => {
            state.ui.notifications = state.ui.notifications.filter(
              (n) => n.id !== id
            );
          });
        },
      }))
    ),
    {
      name: "app-storage",
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        auth: {
          user: state.auth.user,
          isAuthenticated: state.auth.isAuthenticated,
        },
        // Don't persist UI state
      }),
    }
  )
);

// Selectors for better performance
export const useCartItems = () => useAppStore((state) => state.cart.items);
export const useWishlistItems = () =>
  useAppStore((state) => state.wishlist.items);
export const useAuthUser = () => useAppStore((state) => state.auth.user);
export const useUITheme = () => useAppStore((state) => state.ui.theme);
