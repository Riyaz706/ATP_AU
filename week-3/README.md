# Node.js Backend Development

This directory contains projects built during Week 3 focusing on Node.js and Express.js backend services. It includes two primary implementations of REST APIs.

## Projects

### 1. Backend with Local Memory

An Express application that maintains state in local server memory. It serves as an introduction to route mapping, HTTP request parsers, and controllers.

- Setup and start commands:
  ```bash
  cd BackendWithLocalMemory
  npm install
  node server.js
  ```
- Detailed documentation: [Backend with Local Memory Documentation](file:///Users/mdriyaz/.gemini/antigravity/scratch/ATP_AU/week-3/BackendWithLocalMemory/README.md)

### 2. Backend with MongoDB Database

An Express application that integrates with a MongoDB server using Mongoose ODM. It implements data models, schemas, validations, and database CRUD actions.

- Setup and start commands:
  ```bash
  cd BackendWtihDataBase
  npm install
  # Configure the DB connection within server.js
  node server.js
  ```
- Detailed documentation: [Backend with MongoDB Database Documentation](file:///Users/mdriyaz/.gemini/antigravity/scratch/ATP_AU/week-3/BackendWtihDataBase/README.md)

## API Testing

Both projects include a `request.http` file containing pre-configured HTTP requests. You can execute these requests directly within VS Code using the REST Client extension.
