const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./Manager');
const Developer = require('./Developer');
const Intern = require('./Intern');

const generateHtml = require('../src/generateHtml');

const { questions, managerQuestions } = require('./questions');

// const questions = [{
//         type: 'list',
//         name: 'position',
//         message: 'Which type of employee would you like to add?',
//         choices: ['developer', 'intern', 'manager']
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the employee\'s name? (Required)',
//         validate: input => {
//             if (input) {
//                 return true;
//             }
//             console.log("\nMust enter name of employee")
//             return false;
//         }
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'What is the employee\'s id? (Required)',
//         validate: input => {
//             if (input) {
//                 return true;
//             }
//             console.log("\nMust enter id of employee")
//             return false;
//         }
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is the employee\'s email address? (Required)',
//         validate: input => {
//             if (input) {
//                 return true;
//             }
//             console.log("\nMust enter employee\'s email")
//             return false;
//         }
//     },
//     {
//         type: 'input',
//         name: 'github',
//         message: 'What is the developers\'s GitHub account? (Required)',
//         when: answers => answers.position === 'developer',
//         validate: input => {
//             if (input) {
//                 return true;
//             }
//             console.log("\nMust enter developer\'s GitHub account")
//             return false;
//         }
//     },
//     {
//         type: 'input',
//         name: 'school',
//         message: 'What is the interns\'s current school? (Required)',
//         when: answers => answers.position === 'intern',
//         validate: input => {
//             if (input) {
//                 return true;
//             }
//             console.log("\nMust enter intern\'s current school")
//             return false;
//         }
//     },
//     {
//         type: 'input',
//         name: 'office',
//         message: 'What is the managers\'s office number? (Required)',
//         when: answers => answers.position === 'manager',
//         validate: input => {
//             if (input) {
//                 return true;
//             }
//             console.log("\nMust enter manager\'s office number")
//             return false;
//         }
//     }
// ];

// const managerQuestions = [{
//         type: 'input',
//         name: 'name',
//         message: 'What is the managers\'s name?',
//         validate: input => {
//             if (input) {
//                 return true;
//             }
//             console.log("\nMust enter name of manager")
//             return false;
//         }
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'What is the managers\'s id?',
//         validate: input => {
//             if (input) {
//                 return true;
//             }
//             console.log("\nMust enter manager's id")
//             return false;
//         }
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: `What is the managers\'s email address?`,
//         validate: input => {
//             if (input) {
//                 return true;
//             }
//             console.log("\nMust enter manager's email address")
//             return false;
//         }
//     },
//     {
//         type: 'input',
//         name: 'office',
//         message: 'What is the managers\'s office number?',
//         validate: input => {
//             if (input) {
//                 return true;
//             }
//             console.log("\nMust enter manager's office number")
//             return false;
//         }
//     }
// ];

class Team {
    constructor() {
        this.employees = [];
        this.manager = {};
        this.developers = [];
        this.interns = [];
    }

    getEmployees() {
        return this.employees;
    }

    promptForEmployee() {
        inquirer
            .prompt(questions)
            .then(response => {
                this.addEmployee(response);
            })
    }

    addEmployee(userInput) {
        const { position, name, id, email } = userInput;
        // Controlled by this switch statement
        // Need to know which type of employee to create
        let addEmployee;
        switch (position) {
            case 'manager':
                addEmployee = new Manager(name, id, email, userInput.office);
                break;
            case 'developer':
                addEmployee = new Developer(name, id, email, userInput.github);
                this.developers.push(addEmployee);
                break;
            case 'intern':
                addEmployee = new Intern(name, id, email, userInput.school);
                this.interns.push(addEmployee);
                break;
        }
        this.employees.push(addEmployee.getObject());
    }

    addLoop() {
        inquirer
            .prompt([{
                type: 'list',
                name: 'action',
                message: 'What would you like to do next?',
                choices: ['Add an employee', 'Finish'],
            }])
            .then(response => {
                if (response.action === 'Add an employee') {
                    inquirer
                        .prompt(questions)
                        .then(response => {
                            this.addEmployee(response);
                        })
                        .then(() => {
                            this.addLoop();
                        });
                } else {
                    console.log('Now writing to file.');
                    console.log(this.getEmployees());
                    fs.writeFile('./dist/index.html', generateHtml(this.getEmployees()), (err) => {
                        if (err)
                            console.log(err);
                        else {
                            console.log("File written successfully\n");
                        }
                    });
                }
            })
    }

    // First step is getting information about a manager
    buildTeam() {
        console.log(`========== BUILD A NEW TEAM ==========`);
        // Prompt for manager
        inquirer
            .prompt(managerQuestions)
            .then(managerInfo => {
                managerInfo.position = 'manager';
                this.addEmployee(managerInfo);
                this.addLoop();
            })
    }
}

module.exports = Team;