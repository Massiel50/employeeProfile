var inquirer = require("inquirer");
var jest = require("jest");

// ask user for role, name, id, and email
inquirer.prompt([{
    type: "list",
    name: "role",
    message: "What kind of employee would you like to add?",
    choices: ["Manager", "Engineer", "Intern"]
}])
.then(function(choice){

    function Employee{
        this.name = name,
        this.id = id,
        this.email = email;
        choice.role = title,
        this.getName(),
        this.getId(),
        this.getEmail(),
        this.getRole()
    }
    // if user chose manager, ask for office number, override role to manager with getRole()
    if(choice == Manager){

    }
    // if user chose engineer, ask for github user name, getGitHub(), getRole()
    if(choice == Engineer){

    }
    // if user chose intern, ask what school, getSchool(), getRole()
    if(choice == Intern){

    }
})



