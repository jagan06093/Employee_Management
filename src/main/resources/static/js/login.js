/*
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
	
	
	// CLEAR OLD MESSAGE
	    msg.innerText = "";

	    //  FRONTEND VALIDATION
	    if (!username || !password) {
	        msg.innerText = "Username and Password are required";
	        msg.className = "error";
	        return;
	    }

    fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
		           username: username,
		           password: password
		       })
    })
    .then(res => {
        if (!res.ok) throw new Error("Login failed");
        return res.json(); // parse JSON
    })
    .then(data => {
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
        window.location.href = "index.html";
    })
    .catch(err => {
        console.error(err);
        document.getElementById("msg").innerText = "Invalid credentials";
    });
}

// Navigate to register page
function goToRegister() {
    window.location.href = "register.html";
}*/







function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg"); 

    // CLEAR OLD MESSAGE
    msg.innerText = "";
    msg.className = "";

    // FRONTEND VALIDATION
    if (!username || !password) {
        msg.innerText = " Username and Password are required";
        msg.className = "error";
        return; // STOP HERE
    }

    fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => {
        if (!res.ok) {
            return res.text().then(text => { 
                throw new Error(text || "Login failed"); 
            });
        }
        return res.json();
    })
    .then(data => {
        // Save user info for session
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("role", data.role);

        // Redirect to dashboard
        window.location.href = "index.html";
    })
    .catch(err => {
        console.error(err);
        msg.innerText = err.message || "Invalid credentials";
        msg.className = "error";
    });
}

// Navigate to register page
function goToRegister() {
    window.location.href = "register.html";
}

