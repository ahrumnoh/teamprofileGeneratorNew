let Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, University, graduationYear) {
        super(name, id, email);
        this.University = University;
        this.graduationYear = graduationYear;
        this.role = "Intern";
    }

    getUniversity() {
        return this.University;
    }

    getGraduationYear() {
        return this.graduationYear;
    }

    getRole() {
        return this.role;
    }
}


module.exports = Intern;

