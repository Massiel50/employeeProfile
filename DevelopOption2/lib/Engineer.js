// require Employee class
const Employee = require("./Employee");

// create a class called manager that extends Employee

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub= gitHub;
    }
    getGithub(){
        return this.gitHub;
    }
    getRole(){
        return "Engineer";
    }
}

// export manager
module.exports = Engineer;