var inquirer = require("inquirer");
var jest = require("jest");


function Employee(){
    this.name = name,
    this.id = id,
    this.email = email;
    // this.getName(){
    //     return this.name;
    // }
    // this.getId(),
    // this.getEmail(),
    // this.getRole()
}


// ask user for role, name, id, and email
inquirer.prompt([{
    type: "list",
    name: "role",
    message: "What kind of employee would you like to add?",
    choices: ["Manager", "Engineer", "Intern"]
},
{
    type: "input",
    message: "What is the employees name?",
    name: "name"
},
{
    type: "input",
    message: "What is the employee ID?",
    name: "id"
},
{
    type: "input",
    message: "What is the employee email address?",
    name: "email"
}])
.then(function(role, name, id, email){

   
    console.log(role)
    // if user chose manager, ask for office number, override role to manager with getRole()
    if(role == "Manager"){
        Employee.prototype.offNum = function(){
            inquirer.prompt([{
                type: "input",
                name: "offNum",
                message: "What is the office number?",
            }])
            .then(function(offNum){
                const employee = new Employee(role, name, id, email, offNum);
            })
        }

    }
    // if user chose engineer, ask for github user name, getGitHub(), getRole()
    if(role == "Engineer"){
       
            inquirer.prompt([{
                type: "input",
                name: "gitHub",
                message: "What is the git hub user name?",
            }])
            .then(function(gitHub){
                const employee = new Employee(role, name, id, email, gitHub);
            })
        }

    
    // if user chose intern, ask what school, getSchool(), getRole()
    if(role == "Intern"){
        Employee.prototype.school = function(){
            inquirer.prompt([{
                type: "input",
                name: "school",
                message: "What school is intern attending?",
            }])
            .then(function(school){
                const employee = new Employee(role, name, id, email, school);
            })
        }
    }

    

    console.log(employee);

})



