# React State Demo Project

A React sandbox application demonstrating state mutations, array operations, and object updates in React using the `useState` hook.

## Features

- Counter Demo: Shows state modification, state updater functions, and multiple state calls queuing.
- Marks List Demo: Shows array modifications using the spread operator to preserve immutability.
- User Object Demo: Shows object state updates using the spread operator to preserve immutability.

## Project Structure

- `src/main.jsx`: Application bootstrap entry.
- `src/App.jsx`: Main React component mounting the demo view.
- `src/components/StateDemo.jsx`: Custom component illustrating state mutation methods:
  - `incrementCounter`: Invokes `setCounter` with updater functions to safely apply consecutive additions.
  - `decrementCounter` & `resetCounter`: Standard state setters.
  - `addMarks`: Prepends and appends values to the array state.
  - `addUserAge`: Extends object properties by spreading current keys.

## Installation

Ensure you have Node.js installed, then run:

```bash
# Navigate to the project folder
cd react-demo

# Install dependencies
npm install
```

## Running the Application

To run the dev server:

```bash
npm run dev
```

The application will run locally at `http://localhost:5173`.
