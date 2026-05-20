# Full-Stack Blog Application

A complete, role-based blog management system containing a backend API built with Node.js/Express/MongoDB and a single-page frontend application built with React/Vite/Tailwind CSS.

## Roles and Access Control

- Users: Registered members who can view articles, view detailed content, and write, edit, or delete their own comments on articles.
- Authors: Registered writers who can compose new articles, modify their existing articles, and soft-delete their own articles. They can also read comments.
- Administrators: Platform overseers who can view all user accounts, block or unblock users, view active and inactive articles, deactivate any article, or restore deactivated articles.

## Directory Structure

- `backend/`: Node.js Express server routing APIs for users, authors, and admins. Manages data persistence using Mongoose ODM with MongoDB.
- `frontend/`: React single-page application communicating with the backend APIs. Mapped with Tailwind CSS v4 styling.
- `stitch_screens/`: JSON schema documenting the Figma-to-code design system structures for UI components.

## Prerequisites

Ensure you have the following installed:
- Node.js (v18 or higher)
- MongoDB Server (Running locally or remote Atlas instance)

## Getting Started

1. Set up the Database and Environment variables in the backend directory.
2. Install dependencies in both backend and frontend directories:
   ```bash
   # Terminal 1 - Backend Setup
   cd Project/backend
   npm install
   npm run dev

   # Terminal 2 - Frontend Setup
   cd Project/frontend
   npm install
   npm run dev
   ```

Check the detailed setup documents inside the respective folders:
- [Backend Documentation](file:///Users/mdriyaz/.gemini/antigravity/scratch/ATP_AU/Project/backend/README.md)
- [Frontend Documentation](file:///Users/mdriyaz/.gemini/antigravity/scratch/ATP_AU/Project/frontend/README.md)
