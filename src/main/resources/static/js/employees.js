const API_URL = "http://localhost:8080/employees";

window.onload = loadEmployees;

function loadEmployees() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            let rows = "";
            data.forEach(emp => {
                rows += `
                    <tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.email}</td>
                        <td>${emp.department}</td>
                        <td>${emp.salary}</td>
                        <td>
                            <button onclick="editEmployee(${emp.id})" id="edit">Edit</button>
                            <button onclick="deleteEmployee(${emp.id})" id="delete">Delete</button>
                        </td>
                    </tr>
                `;
            });
            document.getElementById("empTable").innerHTML = rows;
        });
}

function saveEmployee() {

    const id = document.getElementById("empId").value;

    const employee = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        salary: document.getElementById("salary").value
    };

    if (id) {
        fetch(API_URL + "/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee)
        }).then(() => {
            resetForm();
            loadEmployees();
        });
    } else {
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee)
        }).then(() => {
            resetForm();
            loadEmployees();
        });
    }
}

function editEmployee(id) {
    fetch(API_URL + "/" + id)
        .then(res => res.json())
        .then(emp => {
            document.getElementById("empId").value = emp.id;
            document.getElementById("name").value = emp.name;
            document.getElementById("email").value = emp.email;
            document.getElementById("department").value = emp.department;
            document.getElementById("salary").value = emp.salary;
        });
}

function deleteEmployee(id) {
    if (confirm("Delete this employee?")) {
        fetch(API_URL + "/" + id, { method: "DELETE" })
            .then(() => loadEmployees());
    }
}

function resetForm() {
    document.getElementById("empId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("department").value = "";
    document.getElementById("salary").value = "";
}

function goBack() {
    window.location.href = "index.html";
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}









