# Blog Application - Backend API

An Express REST API service that handles authentication, authorization, role management, and database operations for the full-stack blog application.

## Prerequisites & Installation

1. Navigate to the backend directory:
   ```bash
   cd Project/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the `Project/backend` directory with the following variables:
   ```env
   PORT=3000
   DB_URL=mongodb://127.0.0.1:27017/blogapp
   SECRET_KEY=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

4. Database Seeding (Optional):
   Populate the database with initial administrators or articles:
   ```bash
   node seedAdmin.js
   node seedArticles.js
   ```

5. Run Development Server:
   ```bash
   npm run dev
   ```

---

## Database Schemas (MongoDB / Mongoose)

### User Schema (`backend/models/UserModel.js`)

| Field | Type | Attributes | Description |
|-------|------|------------|-------------|
| `firstName` | String | Required | User's first name |
| `lastName` | String | Optional | User's last name |
| `email` | String | Required, Unique | Login identifier |
| `password` | String | Required | Hashed password |
| `profileImageURL` | String | Optional | Cloudinary hosted profile image url |
| `role` | String | Required, Enum: `USER`, `ADMIN`, `AUTHOR` | Mapped user permission level |
| `isActive` | Boolean | Default: `true` | Set to false if account is blocked |
| `timestamps` | Date | Automatic | Track `createdAt` and `updatedAt` |

### Article Schema (`backend/models/ArticleModel.js`)

| Field | Type | Attributes | Description |
|-------|------|------------|-------------|
| `author` | ObjectId | Required, Ref: `User` | User reference with role `AUTHOR` |
| `title` | String | Required | Header title of the post |
| `category` | String | Required | Article classification tag |
| `content` | String | Required | Markdown/Text content |
| `isArticleActive` | Boolean | Default: `true` | Soft-deactivation toggle |
| `comments` | Array | Sub-Schema | Collection of user comments |
| `timestamps` | Date | Automatic | Track `createdAt` and `updatedAt` |

#### Comments Sub-Schema
- `user`: ObjectId (Ref: `User`, required comment author)
- `comment`: String (Content text of comment)

---

## API Routes

All APIs return standard JSON responses. Protected paths require cookie authentication.

### Common APIs (`/common-api`)
- `POST /common-api/login`: Authenticates credentials, generates JWT cookie.
- `GET /common-api/logout`: Clears local httpOnly authentication cookies.
- `PUT /common-api/change-password`: Updates password. Requires verification.
- `GET /common-api/check-auth`: Evaluates cookie validity, returns logged user.

### User APIs (`/user-api`)
- `POST /user-api/users`: Registers a new member account with optional profile image upload.
- `GET /user-api/read-articles`: Retrieves all active articles with populated author and comments data.
- `GET /user-api/article/:id`: Returns a single article document matching the object ID parameter.
- `PUT /user-api/articles`: Appends a comment to an article.
- `PUT /user-api/articles/comment`: Edits an existing comment written by the requester user.
- `DELETE /user-api/articles/comment/:articleId/:commentId`: Removes comment by comment ID. Mapped to owner check.

### Author APIs (`/author-api`)
- `POST /author-api/authors`: Registers a new writer account (role set to AUTHOR).
- `POST /author-api/articles`: Creates and saves a new article document under the author identifier.
- `GET /author-api/articles/:authorId`: Retrieves active articles composed by the requested author.
- `PUT /author-api/articles`: Modifies an existing article. Enforces author ownership.
- `PATCH /author-api/articles/:articleId`: Soft deletes article (sets `isArticleActive` to false).

### Admin APIs (`/admin-api`)
- `POST /admin-api/admins`: Registers administrative accounts (role set to ADMIN).
- `GET /admin-api/articles`: Retrieves all platform articles (active and deactivated).
- `GET /admin-api/articles/author/:authorId`: Retrieves all articles for a specific author, ignoring activity status.
- `PATCH /admin-api/articles/:articleId/deactivate`: Moderation soft-delete of any article.
- `PATCH /admin-api/articles/:articleId/restore`: Restores a soft-deleted article back to active status.
- `GET /admin-api/users`: Lists all users registered on the platform.
- `PUT /admin-api/block-user`: Blocks user access (sets `isActive` to false).
- `PUT /admin-api/unblock-user`: Restores blocked user access (sets `isActive` to true).

---

## Authentication & Authorization Middlewares

1. `verifyToken` (`backend/middleware/verifyToken.js`): Parses cookies, extracts JWTs, and decodes user payload onto `req.user`.
2. Role Guard Checkers:
   - `checkUser` (`backend/middleware/checkUser.js`): Verifies `req.user.role === 'USER'`
   - `checkAuthor` (`backend/middleware/checkAuthor.js`): Verifies `req.user.role === 'AUTHOR'`
   - `checkAdmin` (`backend/middleware/checkAdmin.js`): Verifies `req.user.role === 'ADMIN'`

## File Upload Configuration

- Multer: Configured with memory storage buffer bounds to hold image inputs temporarily.
- Cloudinary: Receives image buffer streaming from server memory and assigns remote URLs to user profile structures.
