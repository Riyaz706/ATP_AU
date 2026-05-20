# Blog Application Client

A responsive, single-page React frontend application that serves as the user interface for the blog platform. It accommodates custom views for general readers, content authors, and system administrators.

## Features

- Role-based Dashboard layouts (User, Author, Admin).
- Article publishing and editing dashboards with markdown support.
- Fully functional comment threads on articles.
- User management tables for administrators.
- Profile photo upload and account updates.
- Centralized user state using Zustand.
- Secure router guards protecting dashboards from unauthorized roles.

## Tech Stack

- View Layer: React (v19)
- Styling: Tailwind CSS (v4) with Tailwind Typography
- Routing: React Router (v7)
- Form Handling: React Hook Form
- State Management: Zustand
- HTTP Client: Axios
- Notifications: React Hot Toast
- Content Renderer: React Markdown
- Build System: Vite

## Directory Structure

- `src/components/`: Modular React components.
  - `RootLayout.jsx`: Master page shell containing the navigation bars.
  - `Home.jsx`: Article listing and grid for general readers.
  - `Login.jsx` & `Register.jsx`: Member entry forms.
  - `ArticleDetail.jsx`: Render post contents alongside comments threads.
  - `AddArticle.jsx` & `EditArticle.jsx`: Author writing interfaces.
  - `UserDashboard.jsx`, `AuthorDashboard.jsx`, `AdminDashboard.jsx`: Role-tailored dashboards.
  - `UserProfile.jsx`, `AuthorProfile.jsx`, `AdminProfile.jsx`: Profile pages.
  - `ProtectedRoute.jsx`: Authentication validation wrapper.
- `src/store/`: Zustand stores.
  - `userStore.js`: Global state management for user login, credentials, and tokens.
- `src/App.jsx`: Mapped React Router structures.

## Installation

Ensure you have Node.js installed, then execute:

```bash
# Navigate to the frontend folder
cd Project/frontend

# Install dependencies
npm install
```

## Running the Application

To launch the client application in development mode:

```bash
npm run dev
```

The application will run at `http://localhost:5173`. Make sure the Backend server is running at `http://localhost:3000` (or the port defined in your backend config).

## Production Build

To bundle the application for production hosting:

```bash
npm run build
```

This generates optimized static files in the `dist/` directory.
