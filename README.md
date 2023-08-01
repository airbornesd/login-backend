# Login and Signup Web Application

This is a simple web application for user login and signup built using Node.js, Express.js, MongoDB, and JSON Web Tokens (JWT) for authentication.

## Tech Stack

- Frontend:
  - HTML
  - CSS
  - JavaScript

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - JSON Web Tokens (JWT)

## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

Follow the steps below to get the application up and running:

1. Clone the repository:

```bash
git clone https://github.com/your_username/login-app.git
```

2. Navigate to the project folder:

```bash
cd login-app
```

3. Install the dependencies:

```bash
npm install
```

4. Set Up MongoDB:

   - Make sure MongoDB is running on your local machine or provide the MongoDB connection URI in the `config/db.config.js` file.

5. Start the server:

```bash
npm start
```

6. Open your browser and go to `http://localhost:8080` to access the web application.

## Usage

### Register a New User

- Go to the homepage `http://localhost:8080`.
- Click on the "Sign Up" button.
- Fill in the required details in the registration form and submit.
- Upon successful registration, you will be redirected to the login page.

### Login

- Go to the homepage `http://localhost:8080`.
- Click on the "Login" button.
- Enter your registered username and password and click on the "Login" button.
- If the credentials are correct, you will be redirected to the dashboard page.

### Dashboard

- After successful login, you will be redirected to the dashboard page.
- The dashboard page displays a welcome message with the username.

## Important NPM Packages

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment.
- `jsonwebtoken`: Implementation of JSON Web Tokens for secure authentication.
- `bcryptjs`: Library to help you hash passwords.

## Contribution

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.