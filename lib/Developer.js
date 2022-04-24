const Employee = require('./Employee');

class Developer extends Employee {
    constructor(name, id, email, github) {
        super('developer', name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getObject() {
        return {
            position: 'developer',
            name: this.name,
            id: this.id,
            email: this.email,
            github: this.github,
        }
    }
}

module.exports = Developer;