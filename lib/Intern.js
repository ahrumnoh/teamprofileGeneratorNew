let Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, university, graduationyear) {
        super(name, id, email);
        this.university = university;
        this.graduationyear = graduationyear;
        this.role = "Intern";
    }

    getUniversity() {
        return this.university;
    }

    getGraduationYear() {
        return this.graduationyear;
    }

    getRole() {
        return this.role;
    }
}


module.exports = Intern;

