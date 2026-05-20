# Country Explorer Application

A React application integrated with the REST Countries API, enabling users to explore detailed demographic, geographic, and political profiles of countries globally.

## Features

- Real-time country card listings with flag previews.
- Country search by name, capital, or currency.
- Region filtering: Filter listings by continent (Africa, Americas, Asia, Europe, Oceania).
- Detail view showing native names, population counts, border relationships, top-level domains, and currency details.
- Clean grid layouts responsive to varying viewport sizes.

## Project Structure

- `src/components/`: Directory containing modular UI components.
  - `CountryList.jsx`: Grid rendering country cards and managing state variables for search and continent filtering.
  - `CountryCard.jsx`: Presentational component display for flag graphics and essential stats.
  - `CountryDetail.jsx`: Focused details panel loading deep profiles of selected countries.
- `src/App.jsx`: Entry root component fetching and managing the primary dataset from the REST Countries API (`https://restcountries.com/v3.1/all`).

## Installation & Setup

1. Navigate to the project directory:
   ```bash
   cd week-7/COUNTRY-EXPLORER
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   The application runs locally on `http://localhost:5173`.
