const consola = require('consola');
const connection = require('../config/connection');

const getAllEmployees = () => {

    return new Promise((resolve, reject) => {
        const getQuery = connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary FROM employee INNER JOIN role ON employee.role_id=role.id', (err, employeeData) => {
            if (err) {
                consola.error(err);
                reject(err);
                return;
            }
            resolve(employeeData);
        });
        console.log(getQuery.sql);
    });
};

const getRoleList = () => {

    return new Promise((resolve, reject) => {
        const getQuery = connection.query('SELECT role.id, role.title FROM role', (err, roleData) => {
            if (err) {
                consola.error(err);
                reject(err);
                return;
            }
            resolve(roleData);
        });
        console.log(getQuery.sql);
    });
};

const getEmployeesByRole = (id) => {
    return new Promise((resolve, reject) => {
        const getQuery = connection.query('SELECT employee.first_name, employee.last_name FROM employee WHERE id != role_id and role_id = ?', id, (err, employeeData) => {
            if (err) {
                consola.error(err);
                reject(err);
                return;
            }
            resolve(employeeData);
        });
        console.log(getQuery.sql);
    });
};

const getDepartmentList = () => {

    return new Promise((resolve, reject) => {
        const getQuery = connection.query('SELECT * FROM department', (err, departmentData) => {
            if (err) {
                consola.error(err);
                reject(err);
                return;
            }
            resolve(departmentData);
        });
        console.log(getQuery.sql);
    });
};

const getEmployeesByDepartment = (key) => {
    return new Promise((resolve, reject) => {
        const getQuery = connection.query('SELECT employee.first_name,employee.last_name, role.title FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id=department.id WHERE department_id =?', key, (err, employeeData) => {
            if (err) {
                consola.error(err);
                reject(err);
                return;
            }
            resolve(employeeData);
        });
        console.log(getQuery.sql);
    });
};

const addEmployee = (employeeAddData) => {
    return new Promise((resolve, reject) => {
        const postQuery = connection.query('INSERT INTO employee set ?', employeeAddData, (err, empAdded) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }
            resolve({ message: 'Employee successfully Added!' });
        });
        consola.info(postQuery.sql);
    });
};

const getManagerList = () => {

    return new Promise((resolve, reject) => {
        const getQuery = connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee JOIN role ON employee.role_id = role.id WHERE manager_id IS NULL', (err, managerData) => {
            if (err) {
                consola.error(err);
                reject(err);
                return;
            }
            resolve(managerData);
        });
        console.log(getQuery.sql);
    });
};

const updateEmployeeManager = (id, manager_id) => {
    return new Promise((resolve, reject) => {
        const updateQuery = connection.query(
            'UPDATE employee SET ? WHERE ?',
            [{ manager_id: manager_id }, { id: id }],
            (err, updateRes) => {
                if (err) {
                    consola.error(err);
                    reject(err);
                    return;
                }
                resolve({ message: 'Manager successfully updated!' });
            }
        );
        consola.info(updateQuery.sql);
    });
};

const updateEmployeeRole = (id, role_id) => {
    return new Promise((resolve, reject) => {
        const updateQuery = connection.query(
            'UPDATE employee SET ? WHERE ?',
            [{ role_id: role_id }, { id: id }],
            (err, updateRes) => {
                if (err) {
                    consola.error(err);
                    reject(err);
                    return;
                }
                resolve({ message: 'Role successfully updated!' });
            }
        );
        consola.info(updateQuery.sql);
    });
};

const deleteEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const deleteQuery = connection.query(
            'DELETE FROM employee WHERE id=?', id,
            (err, deleteRes) => {
                if (err) {
                    consola.error(err);
                    reject(err);
                    return;
                }
                resolve({ message: 'Employee successfully deleted!' });
            }
        );
        consola.info(deleteQuery.sql);
    });
};

module.exports = { getAllEmployees, getRoleList, getEmployeesByRole, getDepartmentList, getEmployeesByDepartment, addEmployee, getManagerList, updateEmployeeManager, updateEmployeeRole, deleteEmployee };



