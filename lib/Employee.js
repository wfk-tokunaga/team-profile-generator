class Employee {
    constructor(position, name, id, email) {
        this.position = position;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getPosition = function() {
        return this.position;
    }

    getName = function() {
        return this.name;
    }

    getId = function() {
        return this.id;
    }

    getEmail = function() {
        return this.email;
    }
}

module.exports = Employee;