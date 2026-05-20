# Nested Routing Navigation Application

A React application showcasing layout routing, navigation link mappings, dynamic subviews, and client-side redirects using React Router.

## Routing Schema

The routing structure is configured inside `App.jsx` using `createBrowserRouter`:

- `/` (Layout Route: `RootLayout`)
  - `/` (Index Route: `Home`)
  - `/register` (Route: `Register`)
  - `/login` (Route: `Login`)
  - `/technologies` (Layout Route: `Technologies` for nesting)
    - `/technologies/java` (Sub-route: `Java` content details)
    - `/technologies/nodejs` (Sub-route: `Nodejs` content details)
    - `/technologies/vue` (Sub-route: `Vue` content details)
    - `/technologies/` (Default sub-route redirecting to `java` via `<Navigate to="java" />`)

## Project Structure

- `components/`: UI components.
  - `RootLayout.jsx`: Houses main page headers with Navigation links and the React Router `<Outlet />`.
  - `Home.jsx` & `Login.jsx` & `Register.jsx`: Member entry layout views.
  - `Technologies.jsx`: Houses secondary navigation links for nested paths and a nested `<Outlet />` tag.
  - `Java.jsx` & `Nodejs.jsx` & `Vue.jsx`: Specific technology profile views.
- `src/App.jsx`: Mapped route structure.

## Installation & Setup

1. Navigate to the project directory:
   ```bash
   cd week-8/react-demo2/my-project
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
