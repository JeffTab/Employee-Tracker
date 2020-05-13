const departmentMenuPrompt = [{
    name: "departmentMenu",
    message: "What would you like to do?",
    type: "list",
    choices: ["View", "Add", "Delete", "Exit to Main"]
}];

//Add

const departmentAddTitlePrompt = [{
    name: "departmentAddTitle",
    message: "What is the Department's Title?",
    type: "input",
    validate: inputVal => (inputVal ? true : false)
}];

//Delete

const departmentDeletePrompt = [{
    name: "departmentDelete",
    message: "Select a Department to Delete:",
    type: "input",
    validate: inputVal => {
        return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
}];

module.exports = { departmentMenuPrompt, departmentAddTitlePrompt, departmentDeletePrompt };