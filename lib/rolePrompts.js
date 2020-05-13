const roleMenuPrompt = [{
    name: "roleMenu",
    message: "What would you like to do?",
    type: "list",
    choices: ["View", "Add", "Update", "Delete", "Exit to Main"]
}];

//Add

const roleAddTitlePrompt = [{
    name: "roleAddTitle",
    message: "What is the Role's Title?",
    type: "input",
    validate: inputVal => (inputVal ? true : false)
}];

const roleAddSalaryPrompt = [{
    name: "roleAddSalary",
    message: "What is the Role's Salary?",
    type: "input",
    validate: inputVal => (inputVal ? true : false)
}];

const roleAddDepartmentPrompt = [{
    name: "roleAddDepartment",
    message: "What is the Role's Department ID?",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

//Update

const roleUpdateSelectPrompt = [{
    name: "roleUpdateSelect",
    message: "Select an Role by ID:",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

const roleUpdateOptionsPrompt = [{
    name: "roleUpdateOptions",
    message: "Which would you like to Update?",
    type: "list",
    choices: ["Salary", "Department ID", "Exit to Previous"]
}];

const roleUpdateSalaryPrompt = [{
    name: "employeeUpdateSalary",
    message: "What is the Role's Salary?",
    type: "input",
    validate: inputVal => (inputVal ? true : false)
}];

const roleUpdateDepartment = [{
    name: "roleUpdateDepartment",
    message: "What is the Role's Department ID?",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

//Delete

const roleDeletePrompt = [{
    name: "roleDelete",
    message: "Select a Role to Delete:",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

module.exports = { roleMenuPrompt, roleAddTitlePrompt, roleAddSalaryPrompt, roleAddDepartmentPrompt, roleUpdateSelectPrompt, roleUpdateOptionsPrompt, roleUpdateSalaryPrompt, roleUpdateDepartment, roleDeletePrompt };