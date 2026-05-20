# E-Commerce Backend Project

An Express REST API service backed by MongoDB that handles user registration, catalog management, and shopping cart operations (adding, updating, listing, and removing products).

## Setup & Installation

1. Navigate to the project directory:
   ```bash
   cd backend-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Ensure MongoDB is running locally on:
   `mongodb://127.0.0.1:27017`

4. Run the API server:
   ```bash
   npm start
   ```
   The server will run on port `3000`.

## Database Schemas (MongoDB / Mongoose)

### Product Schema (`modules/ProductModule.js`)

| Field | Type | Attributes | Description |
|-------|------|------------|-------------|
| `productName` | String | Required | Name of the product |
| `price` | Number | Required | Product cost value |
| `brand` | String | Required | Product manufacturer brand name |

### User Schema (`modules/UserModel.js`)

| Field | Type | Attributes | Description |
|-------|------|------------|-------------|
| `name` | String | Required | User's full name |
| `email` | String | Required, Unique | User's login email address |
| `password` | String | Required | Bcrypt-hashed password |
| `cart` | Array | Sub-Schema Array | Collection of selected product items |

#### Cart Sub-Schema
- `product`: ObjectId (Ref: `product`, references a Product document)
- `quantity`: Number (Default: `1`, Minimum: `1`)

---

## API Routes

All endpoints communicate using JSON request and response payloads.

### Product Routes (`/product-API`)

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/product-API/products` | Creates a new Product document. |

### User Routes (`/user-api`)

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/user-API/users` | Registers a new user. Plaintext password is hashed using `bcrypt` (12 salt rounds) before database storage. |
| `PUT` | `/user-API/users/:id` | Re-registers/saves user credentials. (Note: Currently acts as user document recreation instead of update). |
| `PUT` | `/user-API/user-cart/user-id/:id/product-id/:pid` | Adds a product to the user's cart. If the product already exists in the cart, the quantity is incremented by 1. Otherwise, a new cart item is pushed with a quantity of 1. |
| `GET` | `/user-API/users/:id` | Retrieves user details with the cart's product details populated (selects name, price, brand). |
| `DELETE` | `/user-API/user-cart/user-id/:id/product-id/:pid` | Removes or decreases the product quantity in the cart. If quantity is greater than 1, it decrements by 1. If quantity is exactly 1, the product is pulled from the cart array. |

---

## Testing APIs

You can use the included `request.http` file with the VS Code REST Client extension to execute sample requests locally.
