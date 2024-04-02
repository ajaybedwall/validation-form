document.getElementById('taskForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    if (validateForm()) {
        console.log("Form data:", getFormData());
    }
});                                    

function validateForm() {
    var employeeFirstName = document.getElementById('employeeFirstName').value.trim();
    var employeeLastName = document.getElementById('employeeLastName').value.trim();
    var managerFirstName = document.getElementById('managerFirstName').value.trim();
    var managerLastName = document.getElementById('managerLastName').value.trim();
    var task = document.getElementById('task').value.trim();
    var taskId = document.getElementById('task-id').value.trim();
    var status = document.querySelector('input[name="status"]:checked');
    var additionalNotes = document.getElementById('additionalNotes').value.trim();
    var instructions = document.getElementById('instructions').value.trim();

    if (employeeFirstName === "") {
        alert('Please enter employee first name');
        return false;
    }
    if (employeeLastName === "") {
        alert('Please enter employee last name');
        return false;
    }
    if (managerFirstName === "") {
        alert('Please enter manager first name');
        return false;
    }
    if (managerLastName === "") {
        alert('Please enter manager last name');
        return false;
    }
    if (task === "") {
        alert('Please enter task');
        return false;
    }
    if (taskId === "") {
        alert('Please enter task ID');
        return false;
    }
    if (!status) {
        alert('Please select status');
        return false;
    }
    if (additionalNotes === "") {
        alert('Please enter additional notes');
        return false;
    }
    if (instructions === "") {
        alert('Please enter instructions notes');
        return false;
    }

    return true;
}

function getFormData() {
    var formData = {
        employeeFirstName: document.getElementById('employeeFirstName').value.trim(),
        employeeLastName: document.getElementById('employeeLastName').value.trim(),
        managerFirstName: document.getElementById('managerFirstName').value.trim(),
        managerLastName: document.getElementById('managerLastName').value.trim(),
        task: document.getElementById('task').value.trim(),
        taskId: document.getElementById('task-id').value.trim(),
        status: document.querySelector('input[name="status"]:checked').value,
        additionalNotes: document.getElementById('additionalNotes').value.trim(),
        instructions: document.getElementById('instructions').value.trim()
    };
    return formData;
}