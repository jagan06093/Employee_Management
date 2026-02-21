/*
const API_URL = "http://localhost:8080/employees";

// 🔒 Protect page
if (!sessionStorage.getItem("role")) {
    window.location.href = "login.html";
}

// show logged user info
document.getElementById("userInfo").innerText =
    sessionStorage.getItem("username") + " (" + sessionStorage.getItem("role") + ")";

// load employees on page load
document.addEventListener("DOMContentLoaded", loadEmployees);

function loadEmployees() {
    fetch(API_URL)
        .then(res => {
            if (!res.ok) throw new Error("Failed to fetch employees");
            return res.json();
        })
        .then(data => {
            const table = document.getElementById("empTable");
            table.innerHTML = ""; // clear old rows

            if (data.length === 0) {
                table.innerHTML = `
                    <tr>
                        <td colspan="5" style="text-align:center;">No Employees Found</td>
                    </tr>
                `;
                return;
            }

            data.forEach(emp => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.email}</td>
                    <td>${emp.department}</td>
                    <td>${emp.salary}</td>
                `;

                table.appendChild(row);
            });
        })
        .catch(err => {
            console.error(err);
            alert("Error loading employees");
        });
}

function goToEmployees() {
    window.location.href = "employees.html";
}

function logout() {
    sessionStorage.clear();
    window.location.href = "login.html";
}


*/









const API_URL = "http://localhost:8080/employees";

// Protect page
if (!sessionStorage.getItem("role")) {
    window.location.href = "login.html";
}


const role = sessionStorage.getItem("role");

document.getElementById("userInfo").innerText =
 sessionStorage.getItem("username") + " (" + sessionStorage.getItem("role") + ")";

// 🔐 ROLE-BASED UI
if (role === "USER") {
    document.getElementById("manageEmp").style.display = "none";
}

// Load employees on page load
window.onload = loadEmployees;

function loadEmployees() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("empTable");
            table.innerHTML = "";

            data.forEach(emp => {
                table.innerHTML += `
                    <tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.email}</td>
                        <td>${emp.department}</td>
                        <td>${emp.salary}</td>
                    </tr>
                `;
            });
        })
        .catch(err => console.error(err));
}

function goToEmployees() {
    window.location.href = "employees.html";
}

function logout() {
    sessionStorage.clear();
    window.location.href = "login.html";
}
