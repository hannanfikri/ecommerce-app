import { apiClient } from "./client";
import type {
  User,
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  ApiResponse,
} from "./types";

export const authApi = {
  // User registration
  register: async (
    data: RegisterRequest
  ): Promise<ApiResponse<AuthResponse>> => {
    const response = await apiClient.post("/auth/register", data);
    return response.data;
  },

  // User login
  login: async (data: LoginRequest): Promise<ApiResponse<AuthResponse>> => {
    const response = await apiClient.post("/auth/login", data);
    return response.data;
  },

  // User logout
  logout: async (): Promise<ApiResponse<null>> => {
    const response = await apiClient.post("/auth/logout");
    return response.data;
  },

  // Refresh token
  refreshToken: async (
    refreshToken: string
  ): Promise<ApiResponse<AuthResponse>> => {
    const response = await apiClient.post("/auth/refresh", { refreshToken });
    return response.data;
  },

  // Get current user profile
  getProfile: async (): Promise<ApiResponse<User>> => {
    const response = await apiClient.get("/auth/profile");
    return response.data;
  },

  // Update user profile
  updateProfile: async (data: Partial<User>): Promise<ApiResponse<User>> => {
    const response = await apiClient.put("/auth/profile", data);
    return response.data;
  },

  // Change password
  changePassword: async (
    currentPassword: string,
    newPassword: string
  ): Promise<ApiResponse<null>> => {
    const response = await apiClient.put("/auth/change-password", {
      currentPassword,
      newPassword,
    });
    return response.data;
  },

  // Forgot password
  forgotPassword: async (email: string): Promise<ApiResponse<null>> => {
    const response = await apiClient.post("/auth/forgot-password", { email });
    return response.data;
  },

  // Reset password
  resetPassword: async (
    token: string,
    newPassword: string
  ): Promise<ApiResponse<null>> => {
    const response = await apiClient.post("/auth/reset-password", {
      token,
      newPassword,
    });
    return response.data;
  },

  // Verify email
  verifyEmail: async (token: string): Promise<ApiResponse<null>> => {
    const response = await apiClient.post("/auth/verify-email", { token });
    return response.data;
  },

  // Resend verification email
  resendVerification: async (email: string): Promise<ApiResponse<null>> => {
    const response = await apiClient.post("/auth/resend-verification", {
      email,
    });
    return response.data;
  },
};
