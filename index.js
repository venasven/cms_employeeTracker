const inquirer = require('inquirer');
const db = require('./db/connection');
require('console.table')

const utils = require('util');
const { resolve } = require('path');
db.query = utils.promisify(db.query);

function startApp() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
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
        switch (options.choice) {
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

function viewDeparts() {
db.query('SELECT name FROM department', (err))
};

function viewRoles() {

};

function viewEmploys() {

};

function addDepart() {

};

function addRole(){
    
};

function addEmploy() {

};

function updateEmploy() {
    
}
