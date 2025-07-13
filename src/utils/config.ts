// Environment configuration utilities
interface AppConfig {
  // API Configuration
  apiBaseUrl: string;
  apiTimeout: number;
  apiRetryAttempts: number;

  // App Information
  appName: string;
  appVersion: string;
  environment: string;

  // Feature Flags
  enableAnalytics: boolean;
  enableDebug: boolean;
  enableMockData: boolean;

  // Authentication
  authTokenKey: string;
  authRefreshTokenKey: string;

  // UI Configuration
  defaultLanguage: string;
  supportedLanguages: string[];
  currency: string;
  currencySymbol: string;

  // Development
  devServerPort: number;
  devServerHost: string;
}

// Parse environment variables with defaults
export const config: AppConfig = {
  // API Configuration
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "https://fakestoreapi.com",
  apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
  apiRetryAttempts: Number(import.meta.env.VITE_API_RETRY_ATTEMPTS) || 3,

  // App Information
  appName: import.meta.env.VITE_APP_NAME || "E-Commerce App",
  appVersion: import.meta.env.VITE_APP_VERSION || "1.0.0",
  environment: import.meta.env.VITE_NODE_ENV || "development",

  // Feature Flags
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
  enableDebug: import.meta.env.VITE_ENABLE_DEBUG === "true",
  enableMockData: import.meta.env.VITE_ENABLE_MOCK_DATA === "true",

  // Authentication
  authTokenKey: import.meta.env.VITE_AUTH_TOKEN_KEY || "auth_token",
  authRefreshTokenKey:
    import.meta.env.VITE_AUTH_REFRESH_TOKEN_KEY || "refresh_token",

  // UI Configuration
  defaultLanguage: import.meta.env.VITE_DEFAULT_LANGUAGE || "en",
  supportedLanguages: (
    import.meta.env.VITE_SUPPORTED_LANGUAGES || "en,my"
  ).split(","),
  currency: import.meta.env.VITE_CURRENCY || "USD",
  currencySymbol: import.meta.env.VITE_CURRENCY_SYMBOL || "$",

  // Development
  devServerPort: Number(import.meta.env.VITE_DEV_SERVER_PORT) || 5173,
  devServerHost: import.meta.env.VITE_DEV_SERVER_HOST || "localhost",
};

// Helper functions
export const isDevelopment = () => config.environment === "development";
export const isProduction = () => config.environment === "production";
export const isDebugEnabled = () => config.enableDebug;

// Debug logger that only logs in development
export const debugLog = (...args: any[]) => {
  if (isDevelopment() && isDebugEnabled()) {
    console.log("[DEBUG]", ...args);
  }
};

// Get auth token from localStorage
export const getAuthToken = (): string | null => {
  return localStorage.getItem(config.authTokenKey);
};

// Set auth token in localStorage
export const setAuthToken = (token: string): void => {
  localStorage.setItem(config.authTokenKey, token);
};

// Remove auth token from localStorage
export const removeAuthToken = (): void => {
  localStorage.removeItem(config.authTokenKey);
  localStorage.removeItem(config.authRefreshTokenKey);
};

// Format currency
export const formatCurrency = (amount: number): string => {
  return `${config.currencySymbol}${amount.toFixed(2)}`;
};

// Get supported languages for i18n
export const getSupportedLanguages = (): string[] => {
  return config.supportedLanguages;
};

export default config;
