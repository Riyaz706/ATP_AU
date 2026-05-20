# Frontend Projects Documentation

This document contains a comprehensive index and detailed setup instructions for all frontend client applications and user interfaces present in the repository.

## Frontend Technology Stack

The client-side projects utilize the following technologies:
- View Framework: React (v18 & v19)
- Routing: React Router (v7), React Router DOM (v6)
- State Management: Zustand, React local state (useState/useContext)
- Styling: CSS3, Tailwind CSS (v3 & v4)
- Form Handling: React Hook Form, HTML5 validations
- Dynamic Content: React Markdown
- Build Tools: Vite

---

## Frontend Applications List

### 1. Blog Client Application (`Project/frontend`)
The user interface for the role-based blog management application.
- **Key Features**: Secure routes guards, markdown-based editor, dynamic comment section, user control tables for admins, image uploads to Cloudinary via backend.
- **Tech Stack**: React 19, Tailwind v4, Zustand user store, Axios.
- **Run Instructions**:
  ```bash
  cd Project/frontend
  npm install
  npm run dev
  ```

### 2. Phase 1 Capstone: Tech Gadgets Catalog (`Phase1/Phase1`)
A responsive product catalog browser.
- **Key Features**: Dynamic collection grids, CTA buy action mappings, card style detail displays.
- **Tech Stack**: React, Vite.
- **Run Instructions**:
  ```bash
  cd Phase1/Phase1
  npm install
  npm run dev
  ```

### 3. Country Explorer (`week-7/COUNTRY-EXPLORER`)
An application querying demographic datasets from the REST Countries API.
- **Key Features**: Continent filters, search parameters, detailed country cards.
- **Tech Stack**: React, REST Countries API.
- **Run Instructions**:
  ```bash
  cd week-7/COUNTRY-EXPLORER
  npm install
  npm run dev
  ```

### 4. Product Manager (`week-7/product_manager`)
An e-commerce client fetching data from the FakeStore API.
- **Key Features**: Product filters, category tags, search inputs, detail page overlays.
- **Tech Stack**: React, React Router.
- **Run Instructions**:
  ```bash
  cd week-7/product_manager
  npm install
  npm run dev
  ```

### 5. Task Manager (`week-7/task-manager`)
A reactive checklist tracking user actions and complete/pending stats.
- **Key Features**: Checkbox progress toggling, delete controls, local storage state persistence.
- **Tech Stack**: React.
- **Run Instructions**:
  ```bash
  cd week-7/task-manager
  npm install
  npm run dev
  ```

### 6. React Router Technology Navigation (`week-8/react-demo2/my-project`)
A demonstration of nested routes layouts and redirects.
- **Key Features**: Primary navbar layouts, secondary sidebar subroutes for specific languages.
- **Tech Stack**: React Router (v6/v7).
- **Run Instructions**:
  ```bash
  cd week-8/react-demo2/my-project
  npm install
  npm run dev
  ```

### 7. Product Catalog Route Browser (`week-8/react-demo3/vite-project`)
A React Router details-link demonstration.
- **Key Features**: Product listings mapping to dynamic route parameters.
- **Tech Stack**: React Router.
- **Run Instructions**:
  ```bash
  cd week-8/react-demo3/vite-project
  npm install
  npm run dev
  ```

### 8. Zustand State Management Demo (`week-8/react-demo4`)
An application illustrating central state stores and action dispatches.
- **Key Features**: State subscription across independent components.
- **Tech Stack**: React, Zustand.
- **Run Instructions**:
  ```bash
  cd week-8/react-demo4
  npm install
  npm run dev
  ```

### 9. Basic React State Demo (`react-demo`)
A simple sandbox showing state modifications.
- **Key Features**: Counter increment/decrement, immutability check on arrays and objects.
- **Tech Stack**: React.
- **Run Instructions**:
  ```bash
  cd react-demo
  npm install
  npm run dev
  ```

### 10. Travel Website Mockup (`week-6/assignment-3(Travel Website)`)
A static, responsive homepage design.
- **Key Features**: pure Flexbox structures, media query breakpoints, CSS animations.
- **Tech Stack**: HTML5, CSS3.
- **Run Instructions**:
  Open the `index.html` file directly in your browser.
