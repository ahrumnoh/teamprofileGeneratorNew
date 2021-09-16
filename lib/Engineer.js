let Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github, city) {
       super(name, id, email);
       this.github = github;
       this.city = city;
       this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }

    getCity() {
        return this.city;
    }
    

    getRole() {
        return this.role;
    }
}


module.exports = Engineer;

