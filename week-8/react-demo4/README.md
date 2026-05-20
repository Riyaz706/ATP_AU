# Zustand State Management Application

A React application demonstrating global, centralized state management using Zustand. It showcases how to design a state store, define modifier actions, and consume state variables within functional React components without Context providers.

## Features

- Centralized state store managing numerical values (`x`, `y`) and user profiles (`name`, `age`).
- Action dispatcher mappings to increment, decrement, offset, or rewrite state items.
- Multi-component subscription: Shows how changes to state variables dynamically re-render subscribing elements without refreshing other components.

## State Store Schema (`store/TestStore.js`)

### State Fields
- `x`: Number (initial value: `10`)
- `y`: Number (initial value: `20`)
- `user`: Object (`{ name: 'Riyaz', age: 25 }`)

### Store Actions
- `incrementX()`: Increments `x` by `1`.
- `decrementX()`: Decrements `x` by `1`.
- `incrementY()`: Increments `y` by `1`.
- `incrementXByValue(value)`: Offsets `x` by a specific value input.
- `updateUser(name, age)`: Re-assigns the properties of the `user` state object.

## Project Structure

- `store/TestStore.js`: The Zustand store declaration using the `create` API.
- `components/`: UI components.
  - `A.jsx`: Consumes and displays `x` and `y` from the store and binds trigger buttons to modify states.
  - `B.jsx`: Subscribes to the `user` object details and contains input forms to trigger `updateUser` actions.
  - `C.jsx`: Provides an alternative view consuming `x` state to illustrate reactive updates across components.
- `src/App.jsx`: Main entry mounting the components side-by-side.

## Installation & Setup

1. Navigate to the project directory:
   ```bash
   cd week-8/react-demo4
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
