// login-app/frontend/js/script.js
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = e.target.username.value;
  const password = e.target.password.value;

  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const { message } = await response.json();
      alert(message); // Display the error message returned by the backend
    } else {
      const { token } = await response.json();
      localStorage.setItem("token", token);
      // Redirect to dashboard or profile page
      window.location.href = "/dashboard";
    }
  } catch (err) {
    console.error("Error:", err);
  }
});
