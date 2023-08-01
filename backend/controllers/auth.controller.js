const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with hashed password and original password
    const newUser = new User({
      username,
      hashedPassword,
      originalPassword: password,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login User
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Username not found" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ id: user._id }, "your_secret_key");
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};




// const User = require("../models/user.model");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { MONGODB_URI } = require("../config/db.config");

// // Register a new user
// exports.register = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if the username already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "Username already exists" });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // // Create a new user
//     // const newUser = new User({ username, password: hashedPassword });
//     // await newUser.save();

//     // Create a new user with hashed password and original password
//     const newUser = new User({
//       username,
//       hashedPassword,
//       originalPassword: password,
//     });
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Login User
// exports.login = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if the username exists
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: "Username not exists" });
//     }

//     // Compare passwords
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ message: "Invalid Password" });
//     }

//     // Generate a JSON Web Token (JWT)
//     const token = jwt.sign({ id: user._id }, "your_secret_key");
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // login-app/backend/controllers/auth.controller.js



// // // login-app/backend/controllers/auth.controller.js
// // const User = require("../models/user.model");
// // const jwt = require("jsonwebtoken");

// // const signup = async (req, res) => {
// //   try {
// //     const { username, password } = req.body;

// //     // Check if the username already exists
// //     const existingUser = await User.findOne({ username });
// //     if (existingUser) {
// //       return res.status(400).json({ message: "Username already exists" });
// //     }

// //     // Create a new user
// //     const newUser = new User({ username, password });
// //     await newUser.save();

// //     // Generate a JSON Web Token (JWT)
// //     const token = jwt.sign({ id: newUser._id }, "your_secret_key");

// //     res.json({ token });
// //   } catch (err) {
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // };

// // const login = async (req, res) => {
// //   try {
// //     const { username, password } = req.body;

// //     // Check if the username exists
// //     const user = await User.findOne({ username });
// //     if (!user) {
// //       return res.status(400).json({ message: "User not found!" });
// //     }

// //     // Compare passwords
// //     if (password !== user.password) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     // Generate a JSON Web Token (JWT)
// //     const token = jwt.sign({ id: user._id }, "your_secret_key");

// //     res.json({ token });
// //   } catch (err) {
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // };

// // module.exports = { signup, login };