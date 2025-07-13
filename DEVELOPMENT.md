# Development Environment Setup

This document explains how to set up the development environment for the E-Commerce App.

## Quick Start

1. **Copy environment variables:**

   ```bash
   cp .env.example .env
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start development server:**
   ```bash
   pnpm dev
   ```

## Environment Configuration

### Required Environment Variables

The app uses the following environment variables (all prefixed with `VITE_` for Vite):

#### API Configuration

- `VITE_API_BASE_URL` - Base URL for API calls (default: https://fakestoreapi.com)
- `VITE_API_TIMEOUT` - API request timeout in milliseconds (default: 10000)
- `VITE_API_RETRY_ATTEMPTS` - Number of retry attempts for failed requests (default: 3)

#### App Configuration

- `VITE_APP_NAME` - Application name (default: E-Commerce App)
- `VITE_APP_VERSION` - Application version (default: 1.0.0)
- `VITE_NODE_ENV` - Environment mode (development/production)

#### Feature Flags

- `VITE_ENABLE_ANALYTICS` - Enable analytics tracking (default: false)
- `VITE_ENABLE_DEBUG` - Enable debug logging (default: true in development)
- `VITE_ENABLE_MOCK_DATA` - Use mock data instead of API (default: false)

#### Authentication

- `VITE_AUTH_TOKEN_KEY` - LocalStorage key for auth token (default: auth_token)
- `VITE_AUTH_REFRESH_TOKEN_KEY` - LocalStorage key for refresh token (default: refresh_token)

#### UI/Localization

- `VITE_DEFAULT_LANGUAGE` - Default language code (default: en)
- `VITE_SUPPORTED_LANGUAGES` - Comma-separated list of supported languages (default: en,my)
- `VITE_CURRENCY` - Currency code (default: USD)
- `VITE_CURRENCY_SYMBOL` - Currency symbol (default: $)

### Development vs Production

**Development Mode:**

- Debug logging enabled
- No redirects on 401 errors (for testing)
- Detailed error messages
- Hot module replacement

**Production Mode:**

- Debug logging disabled
- Automatic redirects on auth errors
- Optimized bundles
- Error tracking

## Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting
pnpm lint

# Run type checking
pnpm type-check
```

## API Integration

The app is configured to work with FakeStore API by default for development. You can switch to your own API by updating the `VITE_API_BASE_URL` environment variable.

### Using Different APIs

**FakeStore API (default):**

```env
VITE_API_BASE_URL=https://fakestoreapi.com
```

**DummyJSON API:**

```env
VITE_API_BASE_URL=https://dummyjson.com
```

**Local API:**

```env
VITE_API_BASE_URL=http://localhost:3001/api/v1
```

## Configuration Utilities

The app includes a centralized configuration system in `src/utils/config.ts` that:

- Parses all environment variables with sensible defaults
- Provides type-safe configuration access
- Includes helper functions for common operations
- Enables debug logging in development

### Usage Example

```typescript
import { config, formatCurrency, debugLog } from "../utils/config";

// Access configuration
console.log(config.apiBaseUrl);

// Format currency
const price = formatCurrency(29.99); // "$29.99"

// Debug logging (only in development)
debugLog("User action:", { action: "click", target: "button" });
```

## Internationalization

The app supports multiple languages configured via environment variables:

```env
VITE_DEFAULT_LANGUAGE=en
VITE_SUPPORTED_LANGUAGES=en,my
```

Currently supported:

- `en` - English
- `my` - Bahasa Malaysia

## Troubleshooting

### Common Issues

1. **API calls failing:**

   - Check `VITE_API_BASE_URL` is set correctly
   - Verify API server is running (if using local API)
   - Check browser network tab for CORS issues

2. **Environment variables not working:**

   - Ensure variables are prefixed with `VITE_`
   - Restart development server after changing `.env`
   - Check variables are not overridden in system environment

3. **TypeScript errors:**
   - Run `pnpm type-check` to see all type errors
   - Ensure all dependencies are installed
   - Check for missing type definitions

### Debug Mode

Enable debug mode to see detailed API requests/responses:

```env
VITE_ENABLE_DEBUG=true
```

This will log:

- API requests and responses
- Configuration values
- State changes (when implemented)

## Next Steps

1. **Set up your own API backend**
2. **Configure authentication flow**
3. **Add payment integration**
4. **Set up analytics tracking**
5. **Configure error monitoring**
