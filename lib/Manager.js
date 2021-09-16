let Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNB) {
        super(name, id, email);
        this.officeNB = officeNB;
        this.role = "Manager";
    }

    getOfficeNB() {
        return this.officeNB;
    }

    getRole() {
        return this.role;
    }
}


module.exports = Manager;

