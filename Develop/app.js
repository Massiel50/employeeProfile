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
                const intern = new Employee(role, name, id, email, school);
            })
        }
    }

    

    console.log(intern);

})



// require Manager,Engineer, Intern, inquirer, path, fs


//when used it will put an html file called team.html and put it into the output folder 
const outputPath = path.resolve(__dirname, "output", "team.html");

// require the html render file 
const render = require("./lib/htmlRenderer");

// make an empty array for the team members
const teamMembers = [];
// make and array of store employee id

// make a main app function that holds the logic
function mainApp() {
// A function that creates the manager
// use inquire for user to answer questions
  
// A function that creates the team
//use inquire to allow the user the options to add engineer, intern, or if you dont want to add another memeber
  
// A function that creates the engineer
// use inquire for user to answer questions
  
  // A funtion that creates the intern
// use inquire for user to answer questions

// this function takes the team members that was added to the teamMembers array and will create an html file
// and send it the to the out put folder
  function buildTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

}


mainApp();

