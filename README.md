# 📝 Task Manager API

A full-featured task management API built with **Node.js**, **Express**, and **MongoDB**. This project includes user authentication, JWT-based login/logout, task ownership, and full CRUD functionality with robust error handling.

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose (v7+)
- JSON Web Tokens (JWT)
- bcryptjs
- Postman (for testing)

## 🚀 Features

- User registration and secure authentication with JWT
- Login, logout, and logout from all sessions
- Auth middleware to protect routes and manage access
- Users can create, read, update, and delete their own tasks
- Task ownership linked to user accounts
- Clean Mongoose schema validation and middleware
- Secure password hashing with bcrypt
- Environment variables using `dotenv`

## 📂 Project Structure

task-manager-api/
├── src/
│   ├── config/              # DB connection, environment setup
│   │   └── mongoose.js
│   ├── controllers/         # (optional) Route logic split from routers
│   ├── middleware/          # Auth, logging, etc.
│   │   └── auth.js
│   ├── models/              # Mongoose schemas
│   │   ├── task.js
│   │   └── user.js
│   ├── routers/             # API endpoints
│   │   ├── task.js
│   │   └── user.js
│   └── index.js             # App entry point
├── .env                     # Environment variables
├── .gitignore
├── package.json
└── README.md
