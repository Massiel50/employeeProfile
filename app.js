var inquirer = require("inquirer");
var jest = require("jest");

// ask user for role, name, id, and email
inquirer.prompt([{
    type: "list",
    name: "role",
    message: "What kind of employee would you like to add?",
    choices: ["Manager", "Engineer", "Intern"]
}])
.then(function(role){

    function Employee(){
        this.name = name,
        this.id = id,
        this.email = email;
        role = title,
        this.getName(),
        this.getId(),
        this.getEmail(),
        this.getRole()
    }
    console.log(role)
    // if user chose manager, ask for office number, override role to manager with getRole()
    if(role == Manager){
        Employee.prototype.offNum = function(){
            inquirer.prompt([{
                type: "input",
                name: "tel",
                message: "What is the office number?",
            }])
        }

    }
    // if user chose engineer, ask for github user name, getGitHub(), getRole()
    if(role == Engineer){

    }
    // if user chose intern, ask what school, getSchool(), getRole()
    if(role == Intern){

    }
})



