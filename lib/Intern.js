const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super('intern', name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;