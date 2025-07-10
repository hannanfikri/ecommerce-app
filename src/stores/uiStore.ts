import { create } from "zustand";

export interface UIState {
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
  theme: "light" | "dark";
  notifications: Notification[];
  loading: {
    global: boolean;
    products: boolean;
    auth: boolean;
  };
}

export interface Notification {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  duration?: number;
  createdAt: Date;
}

interface UIStore extends UIState {
  // Actions
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleSearch: () => void;
  setSearchOpen: (open: boolean) => void;
  setTheme: (theme: "light" | "dark") => void;
  addNotification: (
    notification: Omit<Notification, "id" | "createdAt">
  ) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
  setLoading: (key: keyof UIState["loading"], loading: boolean) => void;
}

export const useUIStore = create<UIStore>((set, get) => ({
  isMobileMenuOpen: false,
  isSearchOpen: false,
  theme: "light",
  notifications: [],
  loading: {
    global: false,
    products: false,
    auth: false,
  },

  toggleMobileMenu: () => {
    set({ isMobileMenuOpen: !get().isMobileMenuOpen });
  },

  setMobileMenuOpen: (open) => {
    set({ isMobileMenuOpen: open });
  },

  toggleSearch: () => {
    set({ isSearchOpen: !get().isSearchOpen });
  },

  setSearchOpen: (open) => {
    set({ isSearchOpen: open });
  },

  setTheme: (theme) => {
    set({ theme });
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme);
  },

  addNotification: (notificationData) => {
    const notification: Notification = {
      ...notificationData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
    };

    set({
      notifications: [...get().notifications, notification],
    });

    // Auto-remove notification after duration
    if (notification.duration && notification.duration > 0) {
      setTimeout(() => {
        get().removeNotification(notification.id);
      }, notification.duration);
    }
  },

  removeNotification: (id) => {
    set({
      notifications: get().notifications.filter((n) => n.id !== id),
    });
  },

  clearNotifications: () => {
    set({ notifications: [] });
  },

  setLoading: (key, loading) => {
    set({
      loading: {
        ...get().loading,
        [key]: loading,
      },
    });
  },
}));
