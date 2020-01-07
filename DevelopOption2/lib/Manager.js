// require Employee class
const Employee = require("./Employee");

// create a class called manager that extends Employee

class Manager extends Employee{
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
    }
    getOfficeNumber(){
        return this.officeNum
    }
    getRole(){
        return "Manager";
    }
}

// export manager
module.exports = Manager;