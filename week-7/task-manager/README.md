# Task Manager Application

A React-based task management application that illustrates standard state management patterns, parent-child component communication, and UI transitions.

## Features

- Add new tasks with text validations.
- Toggle task status (active / completed) with visual line-through feedback.
- Remove tasks from the collection.
- Real-time task statistics tracking (total tasks, completed tasks, pending tasks).
- Local state persistence to prevent loss of tasks on page refresh.

## Project Structure

- `src/components/`:
  - `TaskForm.jsx`: Text input component that triggers state callbacks on task submission.
  - `TaskList.jsx`: Iterates and renders individual task rows.
  - `TaskItem.jsx`: Individual task item rendering, containing toggle checkboxes and delete trigger buttons.
  - `TaskStats.jsx`: Calculations panel showing completion percentages and task ratios.
- `src/App.jsx`: Central state container holding the tasks array and exposing CRUD callback handlers.

## Installation & Setup

1. Navigate to the project directory:
   ```bash
   cd week-7/task-manager
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
