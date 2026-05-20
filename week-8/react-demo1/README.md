# React Demo 1: Core Hooks and Hoisted State

A task management demonstration application that focuses on React state mechanics, parent-to-child communication, and state updates.

## Features

- Dynamic forms managing input state.
- Task management: listing tasks, counting entries, and adding items.
- Illustrates state hoisting: tasks array is declared in the root component (`ManageTask`) and passed down along with action dispatch handlers.
- Side effects demonstration (`SideEffect` using `useEffect` hooks).

## Project Structure

- `src/components/`:
  - `ManageTask.jsx`: Outer state container managing the tasks array.
  - `AddTask.jsx`: Handles text input capturing and invokes parent addition handlers.
  - `TaskList.jsx`: Iterates the list of tasks.
  - `TaskCount.jsx`: Renders numerical statistics based on the tasks length.
  - `FormDemo.jsx`: Custom forms demo showcasing raw input bindings.
  - `StateDemo.jsx` & `StateDemo1.jsx`: Basic `useState` hook counter demonstrations.
  - `SideEffect.jsx`: Illustrates basic `useEffect` setups.
- `src/App.jsx`: Main React entry page mounting the layout.

## Installation & Setup

1. Navigate to the project directory:
   ```bash
   cd week-8/react-demo1
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
