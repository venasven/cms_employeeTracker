const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table')

const utils = require('util');
db.query = utils.promisify(db.query);

function startApp() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update employee role',
                'Quit',

            ],
        },
    ])
    .then((options) => {
        switch (options.choices) {
            case 'View all departments':
                viewDeparts();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmploys();
                break;
            case 'Add a department':
                addDepart();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmploy();
                break;
            case 'Update an employee role':
                updateEmploy();
                break;
            case 'Quit':
                db.close();
        }
    });
}

startApp();

async function viewDeparts() {
    try{      
        const sql = 'SELECT id, name AS "department_list" FROM department';
        const results = await db.query(sql);
        console.table(results);
        startApp();
    } catch (err) {
        console.log('Error:', err);
        startApp();
    }
}

async function viewRoles() {
    try {
      const sql = 'SELECT role.id, role.title AS "role_title", role.salary, department.name AS "department_name" FROM role JOIN department ON role.department_id = department.id';
      const results = await db.query(sql);
      console.table(results);
      startApp();
    } catch (err) {
      console.log('Error:', err);
      startApp();
    }
  };

  async function viewEmploys() {
    try {
      const sql = 'SELECT employee.id, first_name, last_name,role.title, role.salary FROM employee JOIN role ON employee.role_id = role.id';
      const results = await db.query(sql);
      console.table(results);
      startApp();
    } catch (err) {
      console.log('Error:', err);
      startApp();
    }
  };

  async function addDepart() {
    try {
        const department = await inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Enter new Department:',
          },
        ]);
    
        const sql = 'INSERT INTO department (name) VALUES (name)';
        await db.query(sql, [department.name]);
    
        console.log('Department added.');
        startApp();
      } catch (err) {
        console.log('Error:', err);
        startApp();
      }
  };

async function addRole(){
    try {
        const role = await inquirer.prompt([
          {
            type: 'input',
            name: 'role',
            message: 'Enter new Role:',
          },
        ]);
        const sql = 'INSERT INTO role (title) VALUES (title)';
        await db.query(sql, [role.role]);
    
        console.log('Role added.');
        startApp();
      } catch (err) {
        console.log('Error:', err);
        startApp();
      }
};

async function addEmploy() {
    try {
        const employee = await inquirer.prompt([
          {
            type: 'input',
            name: 'employ',
            message: 'Enter the Employee Name:',
          },
        ]);
        const sql = 'INSERT INTO employee (first_name, last_name) VALUES (first_name, last_name)';
        await db.query(sql, [employee.employ]);
    
        console.log('Employee added.');
        startApp();
      } catch (err) {
        console.log('Error:', err);
        startApp();
      }
};





  
  
  
  
  