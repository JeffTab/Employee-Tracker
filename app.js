const inquirer = require('inquirer');
require('console.table');

const connection = require('./config/connection');

const { getAllEmployees, getRoleList, getEmployeesByRole, getDepartmentList, getEmployeesByDepartment, getManagerList, getEmployeesByManager, addEmployee, updateEmployeeManager, updateEmployeeRole, deleteEmployee, addRole, updateRoleSalary, updateRoleDepartment, deleteRole, addDepartment, deleteDepartment } = require("./lib/db-query");

const { mainMenuPrompt } = require("./lib/prompts");

const { departmentMenuPrompt, departmentAddTitlePrompt, departmentDeletePrompt } = require("./lib/departmentPrompts");
const { roleMenuPrompt, roleAddPrompt, roleUpdateSelectPrompt, roleUpdateOptionsPrompt, roleUpdateSalaryPrompt, roleUpdateDepartmentPrompt, roleDeletePrompt } = require("./lib/rolePrompts");
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
    deleteEmployee(id);
    return startApp();
};

const roleMenuFunction = async () => {
    const { roleMenu } = await inquirer.prompt(roleMenuPrompt);
    if (roleMenu === "View") { roleViewFunction(); }
    else if (roleMenu === "Add") { roleAddFunction(); }
    else if (roleMenu === "Update") { roleUpdateSelectFunction(); }
    else if (roleMenu === "Delete") { roleDeleteFunction(); }
    else { startApp(); }
};

const roleViewFunction = async () => {
    const roleList = await getRoleList();
    console.table(roleList);
    return startApp();
};

const roleAddFunction = async () => {
    const departmentList = await getDepartmentList();
    console.table(departmentList);
    const { title, salary, department_id } = await inquirer.prompt(roleAddPrompt);
    addRole({ title, salary, department_id });
    return startApp();
};

const roleUpdateSelectFunction = async () => {
    const roleList = await getRoleList();
    console.table(roleList);
    const { id } = await inquirer.prompt(roleUpdateSelectPrompt);

    const { roleUpdateOptions } = await inquirer.prompt(roleUpdateOptionsPrompt);

    if (roleUpdateOptions === "Salary") { roleUpdateSalaryFunction(id); }
    else if (roleUpdateOptions === "Department ID") { roleUpdateDepartmentFunction(id); }
    else { roleUpdateSelectFunction(); }
};

const roleUpdateSalaryFunction = async (id) => {
    const { salary } = await inquirer.prompt(roleUpdateSalaryPrompt);
    updateRoleSalary(id, salary);
    return startApp();
};

const roleUpdateDepartmentFunction = async (id) => {
    const departmentList = await getDepartmentList();
    console.table(departmentList);
    const { department_id } = await inquirer.prompt(roleUpdateDepartmentPrompt);
    updateRoleDepartment(id, department_id);
    return startApp();
};

const roleDeleteFunction = async () => {
    const roleList = await getRoleList();
    console.table(roleList);
    const { id } = await inquirer.prompt(roleDeletePrompt);
    deleteRole(id);
    return startApp();
};

const departmentMenuFunction = async () => {
    const { departmentMenu } = await inquirer.prompt(departmentMenuPrompt);
    if (departmentMenu === "View") { departmentViewFunction(); }
    else if (departmentMenu === "Add") { departmentAddFunction(); }
    else if (departmentMenu === "Delete") { departmentDeleteFunction(); }
    else { startApp(); }
};

const departmentViewFunction = async () => {
    const departmentList = await getDepartmentList();
    console.table(departmentList);
    return startApp();
};

const departmentAddFunction = async () => {
    const { name } = await inquirer.prompt(departmentAddTitlePrompt);
    addDepartment({ name });
    return startApp();
};

const departmentDeleteFunction = async () => {
    const departmentList = await getDepartmentList();
    console.table(departmentList);
    const { id } = await inquirer.prompt(departmentDeletePrompt);
    deleteDepartment(id);
    return startApp();
};

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to DB');
    startApp();
});