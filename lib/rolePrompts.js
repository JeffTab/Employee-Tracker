const roleMenuPrompt = [{
    name: "roleMenu",
    message: "What would you like to do?",
    type: "list",
    choices: ["View", "Add", "Update", "Delete", "Exit to Main"]
}];

//Add

const roleAddPrompt = [{
    name: "title",
    message: "What is the Role's Title?",
    type: "input",
    validate: inputVal => (inputVal ? true : false)
}, {
    name: "salary",
    message: "What is the Role's Salary?",
    type: "input",
    validate: inputVal => (inputVal ? true : false)
}, {
    name: "department_id",
    message: "What is the Role's Department ID?",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

//Update

const roleUpdateSelectPrompt = [{
    name: "id",
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
    name: "salary",
    message: "What is the Role's Salary?",
    type: "input",
    validate: inputVal => (inputVal ? true : false)
}];

const roleUpdateDepartmentPrompt = [{
    name: "department_id",
    message: "What is the Role's Department ID?",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

//Delete

const roleDeletePrompt = [{
    name: "id",
    message: "Select a Role to Delete:",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

module.exports = { roleMenuPrompt, roleAddPrompt, roleUpdateSelectPrompt, roleUpdateOptionsPrompt, roleUpdateSalaryPrompt, roleUpdateDepartmentPrompt, roleDeletePrompt };