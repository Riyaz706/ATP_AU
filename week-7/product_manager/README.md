# Product Manager Application

A React-based e-commerce storefront UI integrated with the FakeStore API. It maps search capabilities, filters, detail overlays, and routing views.

## Features

- Dynamic data fetch from public FakeStore API (`https://fakestoreapi.com/products`).
- Category filtering: Filter products by categories like electronics, jewelery, men's clothing, and women's clothing.
- Full-text search to filter products locally.
- Single product detail page showcasing reviews, price tags, and ratings.
- Structured routing shell utilizing React Router.

## Project Structure

- `components/`: Core components.
  - `RootLayout.jsx`: Houses site header/navbar and footer templates.
  - `Home.jsx`: The primary dashboard containing catalog promotions and CTA banners.
  - `ProductList.jsx`: The products grid container. Manages product data fetching and filter states.
  - `Product.jsx`: Product details viewer.
  - `ContactUs.jsx`: Contact forms and validation controls.
- `src/App.jsx`: Mapped React Router structures.

## Installation & Setup

1. Navigate to the project directory:
   ```bash
   cd week-7/product_manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   The application runs on `http://localhost:5173`.
