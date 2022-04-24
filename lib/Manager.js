const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super('manager', name, id, email);
        this.officeNumber = officeNumber;
    }

    getOffice() {
        return this.officeNumber;
    }

    getObject() {
        return {
            position: 'manager',
            name: this.name,
            id: this.id,
            email: this.email,
            officeNumber: this.officeNumber,
        }
    }
}

module.exports = Manager;