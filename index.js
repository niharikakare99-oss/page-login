// Dummy login credentials (you can replace with real authentication later)
const validUsername = "admin";
const validPassword = "12345";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const messageBox = document.createElement("p");
  messageBox.style.marginTop = "10px";
  form.appendChild(messageBox);

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (username === validUsername && password === validPassword) {
      messageBox.style.color = "green";
      messageBox.textContent = "✅ Login successful!";
      // Redirect after login (optional)
      setTimeout(() => {
        window.location.href = "welcome.html"; // change this to your page
      }, 1000);
    } else {
      messageBox.style.color = "red";
      messageBox.textContent = "❌ Invalid username or password.";
    }
  });
});
