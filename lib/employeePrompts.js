const employeeMenuPrompt = [{
    name: "employeeMenu",
    message: "What would you like to do?",
    type: "list",
    choices: ["View", "Add", "Update", "Delete", "Exit to Main"]
}];

//View
const employeeViewMenuPrompt = [{
    name: "employeeViewMenu",
    message: "How would you like to view Employee(s)?",
    type: "list",
    choices: ["View All", "View by Role", "View by Department", "View by Manager", "Exit to Previous"]
}];

const employeeViewRolePrompt = [{
    name: "employeeViewRole",
    message: "Select Role by ID:",
    type: 'input',
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

const employeeViewDepartmentPrompt = [{
    name: "employeeViewDepartment",
    message: "Select Department by ID:",
    type: 'input',
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

const employeeViewManagerPrompt = [{
    name: "employeeViewManager",
    message: "Select Manager by ID:",
    type: 'input',
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];


//Add
const employeeAddPrompt = [{
    name: "first_name",
    message: "What is the Employee's FIRST NAME?",
    type: "input",
    validate: inputVal => (inputVal ? true : false)
}, {
    name: "last_name",
    message: "What is the Employee's LAST NAME?",
    type: "input",
    validate: inputVal => (inputVal ? true : false)
}, {
    name: "role_id",
    message: "Select a Role by ID:",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}, {
    name: "manager_id",
    message: "Select a Manager by ID:",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];



//Update
const employeeUpdateSelectPrompt = [{
    name: "id",
    message: "Select an Employee by ID:",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

const employeeUpdateOptionsPrompt = [{
    name: "employeeUpdateOptions",
    message: "Which would you like to Update?",
    type: "list",
    choices: ["Manager", "Role", "Exit to Previous"]
}];

const employeeUpdateManagerPrompt = [{
    name: "manager_id",
    message: "Select a Manager by ID:",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

const employeeUpdateRolePrompt = [{
    name: "role_id",
    message: "Select a Rold by ID:",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

//Delete

const employeeDeletePrompt = [{
    name: "id",
    message: "Select an Employee by ID:",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

module.exports = { employeeMenuPrompt, employeeViewMenuPrompt, employeeViewRolePrompt, employeeViewDepartmentPrompt, employeeViewManagerPrompt, employeeAddPrompt, employeeUpdateSelectPrompt, employeeUpdateOptionsPrompt, employeeUpdateManagerPrompt, employeeUpdateRolePrompt, employeeDeletePrompt };