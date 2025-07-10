import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItem: (id: string) => CartItem | undefined;
}

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return { totalItems, totalPrice };
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (newItem) => {
        const items = get().items;
        const existingItem = items.find((item) => item.id === newItem.id);

        if (existingItem) {
          // Update quantity if item already exists
          const updatedItems = items.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          const totals = calculateTotals(updatedItems);
          set({ items: updatedItems, ...totals });
        } else {
          // Add new item
          const updatedItems = [...items, { ...newItem, quantity: 1 }];
          const totals = calculateTotals(updatedItems);
          set({ items: updatedItems, ...totals });
        }
      },

      removeItem: (id) => {
        const items = get().items;
        const updatedItems = items.filter((item) => item.id !== id);
        const totals = calculateTotals(updatedItems);
        set({ items: updatedItems, ...totals });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        const items = get().items;
        const updatedItems = items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        const totals = calculateTotals(updatedItems);
        set({ items: updatedItems, ...totals });
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
      },

      getItem: (id) => {
        return get().items.find((item) => item.id === id);
      },
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        items: state.items,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice,
      }),
    }
  )
);
