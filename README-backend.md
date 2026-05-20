# Backend Services Documentation

This document contains a comprehensive index and detailed setup instructions for all backend services, database-backed APIs, and local server configurations present in the repository.

## Backend Technology Stack

All backend services are constructed using the following technologies:
- Runtime Environment: Node.js (v18+)
- Web Framework: Express.js
- Database Persistence: MongoDB (local instances or MongoDB Atlas)
- Object Modeling (ODM): Mongoose
- Security & Tokens: JWT (JSON Web Tokens), Bcrypt password hashing
- Middleware: CORS, Cookie-Parser, Multer
- Remote Storage: Cloudinary API

---

## Backend Services List

### 1. Blog API Application (`Project/backend`)
A role-based blog server mapping endpoints for users, authors, and system administrators.
- **Database Schemas**:
  - `User`: Handles registration stats, hashed password storage, profile image URLs, and enum roles (`USER`, `AUTHOR`, `ADMIN`).
  - `Article`: Handles composition files, reference ObjectIds mapping back to authors, and a sub-schema array of reader comments.
- **Core APIs**:
  - `/common-api/login` & `/common-api/logout` (JWT Cookie session management).
  - `/user-api/` (Read articles, post comment updates).
  - `/author-api/` (Create, edit, soft-deactivate author posts).
  - `/admin-api/` (Block/unblock users, deactivate or restore any articles).
- **Run Instructions**:
  Create a `.env` file detailing `DB_URL` and `SECRET_KEY`, then run:
  ```bash
  cd Project/backend
  npm install
  npm run dev
  ```

### 2. E-Commerce Cart Manager API (`backend-project`)
A server application managing client registration and shopping cart modifications.
- **Database Schemas**:
  - `Product`: Brand details, prices, and name declarations.
  - `User`: Standard email logins linked to a nested cart sub-document array referencing product IDs with quantity values.
- **Core APIs**:
  - `/product-API/products` (Register product specifications).
  - `/user-API/users` (Account creation).
  - `PUT /user-API/user-cart/user-id/:id/product-id/:pid` (Increments quantity or appends product to cart array).
  - `DELETE /user-API/user-cart/user-id/:id/product-id/:pid` (Decrements quantity or pulls item if quantity is exactly 1).
- **Run Instructions**:
  Ensure MongoDB is running locally on port `27017`, then run:
  ```bash
  cd backend-project
  npm install
  npm start
  ```

### 3. Database REST Service (`week-3/BackendWtihDataBase`)
An Express server implementing product and user database controllers.
- **Database Schemas**:
  - `ProductModel`: String product ID key (`pid`), product name, and price value.
  - `userModel`: Username, age value, and plaintext password.
- **Core APIs**:
  - `/user-api/users` (Add, list, update, or delete user entries).
  - `/product-api/products` (Add, list, update, or delete product entries).
- **Run Instructions**:
  Ensure MongoDB is running locally on port `27017`, then run:
  ```bash
  cd week-3/BackendWtihDataBase
  npm install
  node server.js
  ```

### 4. In-Memory REST Service (`week-3/BackendWithLocalMemory`)
A server demonstrating route configurations and HTTP requests parser parameters without a persistent database layer.
- **Data Model**: Managed locally inside user and product memory arrays.
- **Core APIs**:
  - `/user-api/users` (List, read, add, update, and delete in-memory user objects).
  - `/product-api/products` (List, read, add, update, and delete in-memory product objects).
- **Run Instructions**:
  ```bash
  cd week-3/BackendWithLocalMemory
  npm install
  node server.js
  ```
