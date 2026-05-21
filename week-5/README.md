# Week 5 — User Management REST API

A RESTful backend API built with **Node.js**, **Express.js**, and **MongoDB** (via Mongoose) for performing CRUD operations on user data.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB ODM |
| dotenv | Environment variable management |
| CORS | Cross-Origin Resource Sharing |
| Nodemon | Development auto-restart |

---

## Project Structure

```
week-5/
├── API/
│   └── User.js              # Mongoose User model & schema
├── Controllers/
│   └── userController.js     # CRUD route handlers
├── Routes/
│   └── userRoutes.js         # Route exports
├── server.js                 # Express app entry point
├── .env                      # Environment variables
├── .http                     # REST client test requests
├── package.json              # Project metadata & dependencies
└── package-lock.json         # Dependency lock file
```

---

## Database Schema

### User Schema (`API/User.js`)

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `name` | `String` | ✅ Yes | — | Full name of the user |
| `email` | `String` | ✅ Yes | — | Email address of the user |
| `dob` | `Date` | ✅ Yes | — | Date of birth |
| `mobile` | `String` | ✅ Yes | — | Mobile phone number |
| `status` | `Boolean` | No | `true` | Active/inactive status |
| `createdAt` | `Date` | Auto | — | Timestamp (auto-generated) |
| `updatedAt` | `Date` | Auto | — | Timestamp (auto-generated) |

**Schema Options:**
- `timestamps: true` — Automatically adds `createdAt` and `updatedAt` fields
- `versionKey: false` — Removes the `__v` field from documents
- `strict: "throw"` — Throws an error if unknown fields are passed

#### Mongoose Schema Definition

```javascript
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    dob: {
        type: Date,
        required: [true, "DOB is required"]
    },
    mobile: {
        type: String,
        required: [true, "Mobile is required"]
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false,
    strict: "throw"
});
```

---

## API Endpoints

Base URL: `http://localhost:5001/api/user`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/user` | Create a new user |
| `GET` | `/api/user` | Retrieve all users |
| `PUT` | `/api/user/:id` | Update a user by ID |
| `DELETE` | `/api/user/:id` | Delete a user by ID |

---

### 1. Create User

**`POST /api/user`**

**Request Body:**
```json
{
    "name": "Riyaz",
    "email": "riyaz@example.com",
    "dob": "1990-01-01",
    "mobile": "1234567890"
}
```

**Response** — `201 Created`:
```json
{
    "message": "User created successfully"
}
```

---

### 2. Get All Users

**`GET /api/user`**

**Response** — `200 OK`:
```json
[
    {
        "_id": "69a6828d652642049e304b76",
        "name": "Riyaz",
        "email": "riyaz@example.com",
        "dob": "1990-01-01T00:00:00.000Z",
        "mobile": "1234567890",
        "status": true,
        "createdAt": "2025-05-21T04:00:00.000Z",
        "updatedAt": "2025-05-21T04:00:00.000Z"
    }
]
```

---

### 3. Update User

**`PUT /api/user/:id`**

**Request Body:**
```json
{
    "name": "Riya",
    "email": "riyaz@gmail.com",
    "dob": "1990-01-01",
    "mobile": "1234567890"
}
```

**Response** — `200 OK`:
```json
{
    "message": "User updated successfully"
}
```

---

### 4. Delete User

**`DELETE /api/user/:id`**

**Response** — `200 OK`:
```json
{
    "message": "User deleted successfully"
}
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **MongoDB** running locally or a MongoDB Atlas URI

### Installation

```bash
# Navigate to the week-5 directory
cd week-5

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the `week-5/` root:

```env
DB_MODULE=mongodb://localhost:27017/userdb
PORT=5001
```

### Run the Server

```bash
# Start with Node
node server.js

# Or start with Nodemon (dev)
npx nodemon server.js
```

The server will start on **http://localhost:5001**.

---

## Dependencies

### Production

| Package | Version |
|---------|---------|
| express | ^4.18.2 |
| mongoose | ^7.5.0 |
| cors | ^2.8.5 |
| dotenv | ^16.3.1 |

### Development

| Package | Version |
|---------|---------|
| nodemon | ^3.0.1 |
