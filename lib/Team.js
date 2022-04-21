const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./Manager');
const Developer = require('./Developer');
const Intern = require('./Intern');
const { listenerCount } = require('process');

const questions = [{
        type: 'list',
        name: 'position',
        message: 'Which type of employee would you like to add?',
        choices: ['developer', 'intern', 'manager']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s name? (Required)',
        validate: input => {
            if (input) {
                return true;
            }
            console.log("\nMust enter name of employee")
            return false;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s id? (Required)',
        validate: input => {
            if (input) {
                return true;
            }
            console.log("\nMust enter id of employee")
            return false;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email address? (Required)',
        validate: input => {
            if (input) {
                return true;
            }
            console.log("\nMust enter employee\'s email")
            return false;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the developers\'s GitHub account? (Required)',
        when: answers => answers.position === 'developer',
        validate: input => {
            if (input) {
                return true;
            }
            console.log("\nMust enter developer\'s GitHub account")
            return false;
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the interns\'s current school? (Required)',
        when: answers => answers.position === 'intern',
        validate: input => {
            if (input) {
                return true;
            }
            console.log("\nMust enter intern\'s current school")
            return false;
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is the managers\'s office number? (Required)',
        when: answers => answers.position === 'manager',
        validate: input => {
            if (input) {
                return true;
            }
            console.log("\nMust enter manager\'s office number")
            return false;
        }
    }
];

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
            .prompt(questions).then(response => {
                console.log(response);
                console.log('BIG TEST');
                this.addEmployee(response);
                return response
            })
    }

    // Maybe get all the information for the employee first then do the prompting?
    // Once we've done the prompting, it takes the info from the prompt and creates a new Employee
    addEmployee(userInput) {
        const { position, name, id, email } = userInput;
        // Controlled by this switch statement
        // Need to know which type of employee we're going to create
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
        this.employees.push(addEmployee);
    }

    // MAYBE THE ISSUE IS THAT I"M CALLING ANOTHER FUNCTION (PROMPTFOREMPLOYEE) IN HERE?
    // CAN CHANGE PROMPT FOR EMPLOYEE TO HANDLE THE FINISH
    addLoop() {
        inquirer.prompt([{
            type: 'list',
            name: 'nextAction',
            message: 'What would you like to do next?',
            choices: ['Add an employee', 'Finish'],
        }]).then(nextRes => {
            if (nextRes === 'Add an employee') {
                this.promptForEmployee();
                this.addLoop();
                // How to make it prompt again?
            } else {
                console.log('Should now write to file');
                console.log(this.getEmployees());
            }
        });
    }

    // First step is getting information about a manager
    buildTeam() {
        console.log(`========== BUILD A NEW TEAM ==========`);
        // Prompt for manager
        inquirer.prompt([{
                    type: 'input',
                    name: 'name',
                    message: 'What is the managers\'s name?',
                    validate: input => {
                        if (input) {
                            return true;
                        }
                        console.log("\nMust enter name of manager")
                        return false;
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the managers\'s id?',
                    validate: input => {
                        if (input) {
                            return true;
                        }
                        console.log("\nMust enter manager's id")
                        return false;
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: `What is the managers\'s email address?`,
                    validate: input => {
                        if (input) {
                            return true;
                        }
                        console.log("\nMust enter manager's email address")
                        return false;
                    }
                },
                {
                    type: 'input',
                    name: 'office',
                    message: 'What is the managers\'s office number?',
                    validate: input => {
                        if (input) {
                            return true;
                        }
                        console.log("\nMust enter manager's office number")
                        return false;
                    }
                }
            ])
            .then(managerInfo => {
                managerInfo.position = 'manager';
                this.addEmployee(managerInfo);

                // Wanna start looping for other info 
                // Maybe make a function that handles this loop and pass it the manager information?

                this.addLoop();
                // inquirer.prompt([{
                //     type: 'list',
                //     name: 'nextAction',
                //     message: 'What would you like to do next?',
                //     choices: ['Add an employee', 'Finish'],
                // }]).then(nextRes => {
                //     if (nextRes === 'Add an employee') {
                //         this.promptForEmployee();
                //         // How to make it prompt again?
                //     } else {
                //         console.log('Should now write to file');
                //         console.log(this.getEmployees());
                //     }
                // });
            })
    }
}

// inquirer
//     .prompt([{
//         type: 'list',
//         name: 'position',
//         message: 'Which type of employee would you like to add?',
//         choices: ['developer', 'intern']
//     }]).then(positonRes => {
//         inquirer.prompt([{
//             type: 'input',
//             name: 'name',
//             message: 'What is the employee\'s name?',
//             // validate: 
//         }, {
//             type: 'input',
//             name: 'id',
//             message: 'What is the employee\'s id?',
//             // validate: 
//         }, {
//             type: 'input',
//             name: 'email',
//             message: 'What is the employee\'s email address?',
//             // validate: 
//         }, {
//             type: 'input',
//             name: 'github',
//             message: 'What is the developers\'s GitHub account?',
//             when: answers => positonRes.position === 'developer',
//             // validate: 
//         }, {
//             type: 'input',
//             name: 'school',
//             message: 'What is the interns\'s current school?',
//             when: answers => positonRes.position === 'intern'
//         }]).then(response => {
//             response.position = positonRes.position;
//             console.log(response);
//         })
//     })



const exampleTeam = new Team();
exampleTeam.buildTeam();

// inquirer.prompt(questions).then(res => console.log(res));

// exampleManager = {
//     position: 'manager',
//     name: 'eika',
//     id: 0,
//     email: 'wktokunaga@gmail.com',
//     officeNumber: 100
// };
// exampleDeveloper = {
//     position: 'developer',
//     name: 'eea',
//     id: 1,
//     email: 'eennastau@gmail.com',
//     github: 'eeajuice'
// };
// exampleIntern = {
//     position: 'intern',
//     name: 'shae',
//     id: 2,
//     email: 'shae@gmail.com',
//     school: 'UC Berkeley'
// };
// exampleTeam.addEmployee(exampleManager);
// exampleTeam.addEmployee(exampleDeveloper);
// exampleTeam.addEmployee(exampleIntern);
// console.log("Team employees", exampleTeam.getEmployees());
// console.log("Team names", exampleTeam.getEmployees().map(employee => employee.getName()));