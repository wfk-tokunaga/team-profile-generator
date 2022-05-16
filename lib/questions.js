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

const managerQuestions = [{
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
];

module.exports = { questions, managerQuestions };