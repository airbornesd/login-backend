// login-app/backend/routes/auth.routes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// Create a new user
router.post("/register", authController.register);

// User login
router.post("/login", authController.login);

module.exports = router;
