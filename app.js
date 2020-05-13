const inquirer = require('inquirer');
require('console.table');

const connection = require('./config/connection');

const { getAllEmployees, getRoleList, getEmployeesByRole, getDepartmentList, getEmployeesByDepartment, getManagerList, getEmployeesByManager, addEmployee, updateEmployeeManager, updateEmployeeRole, deleteEmployee } = require("./lib/db-query");

const { mainMenuPrompt } = require("./lib/prompts");

const { departmentMenuPrompt, departmentAddTitlePrompt, departmentDeletePrompt } = require("./lib/departmentPrompts");
const { roleMenuPrompt, roleAddTitlePrompt, roleAddSalaryPrompt, roleAddDepartmentPrompt, roleUpdateSelectPrompt, roleUpdateOptionsPrompt, roleUpdateSalaryPrompt, roleUpdateDepartment, roleDeletePrompt } = require("./lib/rolePrompts");
const { employeeMenuPrompt, employeeViewMenuPrompt, employeeViewRolePrompt, employeeViewDepartmentPrompt, employeeViewManagerPrompt, employeeAddPrompt, employeeUpdateSelectPrompt, employeeUpdateOptionsPrompt, employeeUpdateManagerPrompt, employeeUpdateRolePrompt, employeeDeletePrompt } = require("./lib/employeePrompts");

const startApp = async () => {

    const { mainMenu } = await inquirer.prompt(mainMenuPrompt);

    if (mainMenu === "Employees") { employeeMenuFunction(); }
    else if (mainMenu === "Roles") { roleMenuFunction(); }
    else if (mainMenu === "Departments") { departmentMenuFunction(); }
    else { connection.end(); }
};

const employeeMenuFunction = async () => {

    const { employeeMenu } = await inquirer.prompt(employeeMenuPrompt);

    if (employeeMenu === "View") { employeeViewMenuFunction(); }
    else if (employeeMenu === "Add") { employeeAddFunction(); }
    else if (employeeMenu === "Update") { employeeUpdateSelectFunction(); }
    else if (employeeMenu === "Delete") { employeeDeleteFunction(); }
    else { startApp(); }
};

const employeeViewMenuFunction = async () => {

    const { employeeViewMenu } = await inquirer.prompt(employeeViewMenuPrompt);

    if (employeeViewMenu === "View All") { employeeViewAllFunction(); }
    else if (employeeViewMenu === "View by Role") { employeeViewRoleFunction(); }
    else if (employeeViewMenu === "View by Department") { employeeViewDepartmentFunction(); }
    else if (employeeViewMenu === "View by Manager") { employeeViewManagerFunction(); }
    else { employeeMenuFunction(); }
};

const employeeViewAllFunction = async () => {
    const allEmployees = await getAllEmployees();

    console.table(allEmployees);

    return startApp();
};

const employeeViewRoleFunction = async () => {
    const roleList = await getRoleList();
    console.table(roleList);
    const { employeeViewRole } = await inquirer.prompt(employeeViewRolePrompt);
    const employeesByRole = await getEmployeesByRole(employeeViewRole);
    console.table(employeesByRole);
    return startApp();
};

const employeeViewDepartmentFunction = async () => {
    const departmentList = await getDepartmentList();
    console.table(departmentList);
    const { employeeViewDepartment } = await inquirer.prompt(employeeViewDepartmentPrompt);
    const employeesByDepartment = await getEmployeesByDepartment(employeeViewDepartment);
    console.table(employeesByDepartment);
    return startApp();
};

const employeeViewManagerFunction = async () => {
    const managerList = await getManagerList();
    console.table(managerList);
    const { employeeViewManager } = await inquirer.prompt(employeeViewManagerPrompt);
    const employeesByManager = await getEmployeesByManager(employeeViewManager);
    console.table(employeesByManager);
    return startApp();
};

const employeeAddFunction = async () => {
    const roleList = await getRoleList();
    console.table(roleList);
    const managerList = await getManagerList();
    console.table(managerList);
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt(employeeAddPrompt);
    addEmployee({ first_name, last_name, role_id, manager_id });
    return startApp();
};

const employeeUpdateSelectFunction = async () => {
    const allEmployees = await getAllEmployees();
    console.table(allEmployees);
    const { id } = await inquirer.prompt(employeeUpdateSelectPrompt);

    const { employeeUpdateOptions } = await inquirer.prompt(employeeUpdateOptionsPrompt);

    if (employeeUpdateOptions === "Manager") { employeeUpdateManagerFunction(id); }
    else if (employeeUpdateOptions === "Role") { employeeUpdateRoleFunction(id); }
    else { employeeUpdateSelectFunction(); }
};

const employeeUpdateManagerFunction = async (id) => {
    const managerList = await getManagerList();
    console.table(managerList);
    const { manager_id } = await inquirer.prompt(employeeUpdateManagerPrompt);
    console.log(manager_id);
    updateEmployeeManager(id, manager_id);
    return startApp();
};

const employeeUpdateRoleFunction = async (id) => {
    const roleList = await getRoleList();
    console.table(roleList);
    const { role_id } = await inquirer.prompt(employeeUpdateRolePrompt);
    updateEmployeeRole(id, role_id);
    return startApp();
};

const employeeDeleteFunction = async () => {
    const allEmployees = await getAllEmployees();
    console.table(allEmployees);
    const { id } = await inquirer.prompt(employeeDeletePrompt);
    console.log(id);
    deleteEmployee(id);
    return startApp();
};

const roleMenuFunction = async () => {
    const { roleMenu } = await inquirer.prompt(roleMenuPrompt);
    if (roleMenu === "View") { roleViewFunction(); }
    else if (roleMenu === "Add") { employeeAddFunction(); }
    else if (roleMenu === "Update") { employeeUpdateSelectFunction(); }
    else if (roleMenu === "Delete") { employeeDeleteFunction(); }
    else { startApp(); }
};

const roleViewFunction = async () => {

};

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to DB');
    startApp();
});