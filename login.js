document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (email === "admin@gmail.com" && password === "123") {
        window.location.href = "index.html"; // Redirect to home page
    } else {
        errorMessage.textContent = "Invalid email or password. Try again!";
    }
});
