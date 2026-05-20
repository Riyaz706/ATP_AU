# MongoDB-Backed Express REST API

An Express REST API service integrated with MongoDB using Mongoose ODM to perform database CRUD operations on Users and Products.

## Installation & Setup

1. Navigate to the project directory:
   ```bash
   cd week-3/BackendWtihDataBase
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017` or configure your target DB URI in `server.js`.

4. Run the API server:
   ```bash
   node server.js
   ```
   The application runs on port `3000`.

## Database Schemas (MongoDB / Mongoose)

### Product Schema (`model/productModel.js`)

| Field | Type | Attributes | Description |
|-------|------|------------|-------------|
| `pid` | String | Required, Unique | Unique product code identifier |
| `productName` | String | Required | Product name |
| `price` | Number | Required | Price value of the product |
| `timestamps` | Date | Automatic | Track `createdAt` and `updatedAt` |

### User Schema (`model/userModel.js`)

| Field | Type | Attributes | Description |
|-------|------|------------|-------------|
| `username` | String | Required | Unique user display name |
| `password` | String | Required | Plaintext password |
| `age` | Number | Required | User age value |
| `timestamps` | Date | Automatic | Track `createdAt` and `updatedAt` |

---

## API Routes

All endpoints communicate using JSON request and response payloads.

### User Endpoints (`/user-api`)

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/user-api/users` | Returns a list of all users from the database. |
| `GET` | `/user-api/users/:id` | Returns a single user matching the parameter database ID. |
| `POST` | `/user-api/users` | Creates a new User document in the database. |
| `PUT` | `/user-api/users` | Modifies user properties by matching username/ID. |
| `DELETE` | `/user-api/users/:id` | Removes a user by database ID. |

### Product Endpoints (`/product-api`)

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/product-api/products` | Returns a list of all products from the database. |
| `GET` | `/product-api/products/:id` | Returns a single product matching the parameter ID. |
| `POST` | `/product-api/products` | Creates a new Product document in the database. |
| `PUT` | `/product-api/products` | Modifies an existing product's details in the database. |
| `DELETE` | `/product-api/products/:id` | Removes a product by ID. |

---

## Testing APIs

Use the `request.http` file with the VS Code REST Client extension to run tests on the local database endpoints.
