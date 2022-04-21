const Employee = require('./Employee');

class Developer extends Employee {
    constructor(name, id, email, github) {
        super('developer', name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Developer;