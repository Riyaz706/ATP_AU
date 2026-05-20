# Product Catalog Navigation Application

A React application detailing layout structures, navigation mappings, page links, and API integrations using React Router.

## Routing Schema

The routing structure is configured inside `App.jsx` using `createBrowserRouter`:

- `/` (Layout Route: `RootLayout`)
  - `/` (Index Route: `Home`)
  - `/products` (Route: `ProductList` product grid)
  - `/contact` (Route: `ContactUs` feedback form)
  - `/product-details` (Route: `Product` detail overlay view)

## Project Structure

- `components/`: UI components.
  - `RootLayout.jsx`: Houses main page headers with Navigation links and the React Router `<Outlet />`.
  - `Home.jsx`: Catalog promotions and promotions dashboard.
  - `ProductList.jsx`: The products grid. Manages product data fetching and filter states.
  - `Product.jsx`: Detailed display card showing ratings, category tag, description, and price.
  - `ContactUs.jsx`: General support contacts panel.
- `src/App.jsx`: Mapped route structure.

## Installation & Setup

1. Navigate to the project directory:
   ```bash
   cd week-8/react-demo3/vite-project
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
