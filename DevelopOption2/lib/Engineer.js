// require Employee class
const Employee = require("./Employee");

// create a class called manager that extends Employee

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub= gitHub;
    }
    getOfficeNumber(){
        return this.gitHub;
    }
    getRole(){
        return "Engineer";
    }
}

// export manager
module.exports = Engineer;

// create a class called Engineer that extends Employee

// export employee
