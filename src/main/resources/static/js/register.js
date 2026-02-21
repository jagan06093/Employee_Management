function register() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value.trim().toUpperCase();

    // Validation: Check for empty fields
    if (!username || !password || !role) {
        document.getElementById("msg").innerText = " All fields are required!";
        return; // Stop execution
    }

    // Optional: Check if role is valid
    if (role !== "USER" && role !== "ADMIN") {
        document.getElementById("msg").innerText = "Role must be 'USER' or 'ADMIN'";
        return;
    }

    fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role })
    })
    .then(res => {
        if (!res.ok) throw new Error("Failed to register");
        return res.json();
    })
    .then(user => {
        alert("User registered: " + user.username);
        window.location.href = "login.html"; // redirect to login
    })
    .catch(err => {
        console.error(err);
        document.getElementById("msg").innerText = "Error: Username may already exist";
    });
}

function login() {
    window.location.href = "login.html";
}
