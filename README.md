# E-Commerce Frontend

A modern, responsive e-commerce application built with React, TypeScript, and Vite. This project demonstrates advanced frontend concepts including state management, routing, payment integration, and modern UI design.

## 🚀 Features

### Core E-Commerce Features

- **Product Catalog**: Browse products with filtering and search capabilities
- **Shopping Cart**: Add, remove, and manage items with persistent state
- **Wishlist**: Save favorite products for later
- **Checkout Flow**: Complete purchase process with payment integration
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience

- **Search Bar**: Real-time product search with filters
- **Category Navigation**: Browse products by categories
- **Product Grid**: Responsive grid layout with product cards
- **Product Details**: Detailed product pages with images and descriptions
- **State Persistence**: Cart and wishlist data persists across sessions

## 🛠️ Tech Stack

### Frontend Framework

- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server

### State Management & Routing

- **Zustand** - Lightweight state management
- **React Router** - Client-side routing and navigation

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach

### Payment Integration

- **Stripe** (Test Mode) - Secure payment processing

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Basic UI components (buttons, inputs, etc.)
│   ├── layout/        # Layout components (header, footer, nav)
│   └── features/      # Feature-specific components
├── pages/             # Page components
├── store/             # Zustand store configurations
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── hooks/             # Custom React hooks
└── assets/            # Static assets (images, icons)
```

## 🎯 Key Features Breakdown

### Product Listing & Filtering

- Dynamic product grid with responsive design
- Filter by category, price range, and ratings
- Sort by price, popularity, and date added
- Pagination for large product sets

### Shopping Cart & Wishlist

- Persistent cart state using localStorage
- Add/remove items with quantity management
- Wishlist functionality for saving favorite products
- Real-time cart total calculation

### Checkout Flow

- Multi-step checkout process
- Form validation and error handling
- Stripe integration for payment processing (test mode)
- Order confirmation and receipt generation

### Search & Categories

- Real-time search with debounced input
- Category-based navigation
- Search history and suggestions
- Advanced filtering options

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Optimized for all screen sizes
- Touch-friendly interfaces
- Fast loading and smooth animations

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_API_URL=http://localhost:3000/api
```

### Stripe Integration

This project uses Stripe in test mode. To set up:

1. Create a Stripe account
2. Get your test publishable key
3. Add it to your environment variables
4. Use test card numbers for payments

## 🧪 Testing

The application includes comprehensive testing setup:

- Unit tests for components
- Integration tests for user flows
- E2E tests for critical paths

Run tests with:

```bash
pnpm test
```

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Vercel**: Easy deployment with automatic builds
- **Netlify**: Simple drag-and-drop deployment
- **GitHub Pages**: Free hosting for static sites

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- Tailwind CSS for the utility-first approach
- Stripe for secure payment processing

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
