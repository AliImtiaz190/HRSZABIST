const employee_URL="https://ubiquitous-space-trout-wrxp6599pp74f5gx7-6006.app.github.dev/emp";

fetch(employee_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch employee DATA")
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#employeetable tbody");
    
    data.forEach(employee=>{
        const row = document.createElement("tr");
        row.innerHTML =`
        <td>${employee.employee_id}</td>
        <td>${employee.first_name}</td>
        <td>${employee.last_name}</td>
        <td>${employee.email}</td>
        <td>${employee.phone_number}</td>
        <td>${employee.hire_date}</td>
        <td>${employee.job_id}</td>
        <td>${employee.salary}</td>
        <td>${employee.commission_pct}</td>
        <td>${employee.manager_id}</td>
        <td>${employee.department_id}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});