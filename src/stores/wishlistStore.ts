import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  inStock: boolean;
  rating: number;
  addedAt: Date;
}

interface WishlistStore {
  items: WishlistItem[];
  totalItems: number;
  addItem: (item: Omit<WishlistItem, "addedAt">) => void;
  removeItem: (id: string) => void;
  clearWishlist: () => void;
  isInWishlist: (id: string) => boolean;
  toggleItem: (item: Omit<WishlistItem, "addedAt">) => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,

      addItem: (newItem) => {
        const items = get().items;
        const exists = items.find((item) => item.id === newItem.id);

        if (!exists) {
          const updatedItems = [...items, { ...newItem, addedAt: new Date() }];
          set({
            items: updatedItems,
            totalItems: updatedItems.length,
          });
        }
      },

      removeItem: (id) => {
        const items = get().items;
        const updatedItems = items.filter((item) => item.id !== id);
        set({
          items: updatedItems,
          totalItems: updatedItems.length,
        });
      },

      clearWishlist: () => {
        set({ items: [], totalItems: 0 });
      },

      isInWishlist: (id) => {
        return get().items.some((item) => item.id === id);
      },

      toggleItem: (item) => {
        const isInWishlist = get().isInWishlist(item.id);
        if (isInWishlist) {
          get().removeItem(item.id);
        } else {
          get().addItem(item);
        }
      },
    }),
    {
      name: "wishlist-storage",
      partialize: (state) => ({
        items: state.items,
        totalItems: state.totalItems,
      }),
    }
  )
);
