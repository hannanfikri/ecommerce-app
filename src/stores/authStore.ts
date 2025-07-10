import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "customer" | "admin";
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

interface AuthStore extends AuthState {
  // Actions
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      login: async (email, password) => {
        set({ loading: true, error: null });

        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock user data
          const user: User = {
            id: "1",
            email,
            name: email.split("@")[0],
            role: "customer",
            createdAt: new Date(),
          };

          set({
            user,
            isAuthenticated: true,
            loading: false,
            error: null,
          });
        } catch (error) {
          set({
            error: "Login failed. Please check your credentials.",
            loading: false,
          });
        }
      },

      register: async (email, password, name) => {
        set({ loading: true, error: null });

        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock user creation
          const user: User = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            name,
            role: "customer",
            createdAt: new Date(),
          };

          set({
            user,
            isAuthenticated: true,
            loading: false,
            error: null,
          });
        } catch (error) {
          set({
            error: "Registration failed. Please try again.",
            loading: false,
          });
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null,
        });
      },

      setUser: (user) => {
        set({
          user,
          isAuthenticated: !!user,
        });
      },

      setLoading: (loading) => set({ loading }),

      setError: (error) => set({ error }),

      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
