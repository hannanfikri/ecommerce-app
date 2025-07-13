# API Integration with Axios + Zustand

This project uses Axios for API calls integrated with Zustand for state management.

## Structure

```
src/data/apis/
├── client.ts         # Axios instance with interceptors
├── types.ts          # TypeScript types for API responses
├── productApi.ts     # Product-related API calls
├── authApi.ts        # Authentication API calls
├── cartApi.ts        # Shopping cart API calls
├── wishlistApi.ts    # Wishlist API calls
├── orderApi.ts       # Order management API calls
└── index.ts          # Main exports
```

## Configuration

1. Set your API base URL in `.env`:

```env
VITE_API_BASE_URL=https://api.yoursite.com/v1
```

2. The client includes:

- Automatic JWT token handling
- Request/response interceptors
- Error handling for 401, 403, 5xx errors
- 10-second timeout

## Usage in Components

### Using with Zustand Store

```tsx
import { useProductStore } from "../stores/productStore";

const MyComponent = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};
```

### Using Custom Hooks

```tsx
import { useFeaturedProducts } from "../hooks";

const HomePage = () => {
  const { products, loading, error } = useFeaturedProducts(8);

  return (
    <div>
      {loading ? (
        <div>Loading featured products...</div>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};
```

### Direct API Usage

```tsx
import { api } from "../data";

const handleSearch = async (query: string) => {
  try {
    const response = await api.products.searchProducts(query);
    console.log(response.data);
  } catch (error) {
    console.error("Search failed:", error);
  }
};
```

## API Methods

### Products

- `api.products.getProducts(params?)` - Get paginated products
- `api.products.getProduct(id)` - Get single product
- `api.products.searchProducts(query, params?)` - Search products
- `api.products.getFeaturedProducts(limit?)` - Get featured products

### Auth

- `api.auth.login(credentials)` - User login
- `api.auth.register(userData)` - User registration
- `api.auth.getProfile()` - Get current user
- `api.auth.updateProfile(data)` - Update user profile

### Cart

- `api.cart.getCart()` - Get user's cart
- `api.cart.addToCart(productId, quantity, variants?)` - Add item
- `api.cart.updateCartItem(itemId, quantity)` - Update quantity
- `api.cart.removeFromCart(itemId)` - Remove item

### Wishlist

- `api.wishlist.getWishlist()` - Get user's wishlist
- `api.wishlist.addToWishlist(productId)` - Add to wishlist
- `api.wishlist.removeFromWishlist(itemId)` - Remove from wishlist

## Error Handling

All API calls automatically handle:

- Network errors
- Authentication errors (401) - automatically clears token
- Authorization errors (403)
- Server errors (5xx)

Use try-catch blocks for custom error handling:

```tsx
const handleApiCall = async () => {
  try {
    const result = await api.products.getProducts();
    // Handle success
  } catch (error) {
    // Handle error
    console.error("API call failed:", error.message);
  }
};
```

## TypeScript Support

All API responses are fully typed. Import types as needed:

```tsx
import type { Product, Category, Cart } from "../data";

const MyComponent = () => {
  const [product, setProduct] = useState<Product | null>(null);
  // ...
};
```
