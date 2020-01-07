// require Employee
const Employee = require("./Employee");

// create a class Intern that extends Employee
const Employee = require("./Employee");

// create a class called manager that extends Employee

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

// export manager
module.exports = Intern;