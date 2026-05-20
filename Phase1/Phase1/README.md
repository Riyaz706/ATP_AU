# Tech Gadgets Product Catalog

A responsive single-page React application that serves as a product catalog for premium tech gadgets. It displays a variety of consumer electronics with clean layouts, custom cards, and hover details.

## Features

- Dynamic rendering of product lists from a centralized state array.
- Clean grid layouts using responsive CSS breakpoints.
- Indivdual product cards containing images, brand details, price, descriptions, and a responsive CTA button.
- Built using Vite for optimized asset loading and fast refresh.

## Project Structure

- `src/main.jsx`: Application entry point.
- `src/App.jsx`: Root component mounting the main product view.
- `src/components/Products.jsx`: Primary state container. Houses the static product database of 10 items (AirPods Pro, Galaxy Watch 6, MX Master 3S, etc.) and maps them into grid items.
- `src/components/Product.jsx`: Presentational component representing an individual product card.

## Installation

Ensure you have Node.js installed, then execute:

```bash
# Navigate to the project folder if not already there
cd Phase1/Phase1

# Install dependencies
npm install
```

## Running the Project

To run the application locally in development mode:

```bash
npm run dev
```

The application will be served at `http://localhost:5173`.

## Build for Production

To generate the optimized production build:

```bash
npm run build
```

This creates a `dist/` folder containing static assets ready to be served by any static host.
