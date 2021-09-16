const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNB) {
        super(name, id, email);
        this.officeNB = officeNB;
        this.title = "Manager";
    }

    getOfficeNB() {
        return this.officeNB;
    }

    getRole() {
        return this.title;
    }
}


module.exports = Manager;

