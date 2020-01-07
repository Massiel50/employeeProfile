 const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const inquirer = require("inquirer")
const fs = require("fs");
const engineerCard = require("./htmlRender/engineerCard");
const internCard = require("./htmlRender/internCard");
const managerCard = require("./htmlRender/managerCard");
const mainRender = require("./htmlRender/mainRender");


const outputPath = path.resolve(__dirname, "output", "team.html");

const teamMember = [];

function mainApp() {
    // create a manager
    inquirer    
        .prompt([
            {
                type: "input",
                message: "What is the manager's name?",
                name: "managerName"
            },
            {
                type: "input",
                message: "What is the manager's ID?",
                name: "managerId"
            },
            {
                type: "input",
                message: "What is manager's email address?",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "What is manager's office number?",
                name: "managerOfficeNum"
            }
        ])
        .then(answers =>{
            const {managerName, managerId, managerEmail, managerOfficeNum} = answers;
            const managerObj = new Manager(managerName, managerId, managerEmail, managerOfficeNum);

            const managerCardHtml = managerCard(managerObj);

            teamMember.push(managerCardHtml);
            createTeam();
        })

}
// this function create a list to add teammembers
function createTeam(){

    inquirer
        .prompt([{
            type: "list",
            name: "role",
            message: "What employee would you like to add to the team?",
            choices: ["Engineer", "Intern", "I am finished adding"]
        }])
        .then(answers => {
            // create a switch statement to choose between engineer, intern, or build team
            switch(answers){
                case "Engineer":
                    getEngineer();
                    break;
                case "Intern":
                    getIntern();
                    break;
                default:
                    buildTeam();
            }
           
        })
}

// a function that create an engineer
function getEngineer() {

    inquirer    
        .prompt([
            {
                type: "input",
                message: "What is the github user name?",
                name: "gitHub"
            },

        ])
        .then(answer =>{
            this.getGitHub = answer;
            const engineerObj = new Engineer(name, id, email, gitHub);
            const engineerCardHtml = engineerCard(engineerObj);

            teamMember.push(engineerCardHtml);
            createTeam();
        })

}
// a function that create an intern
function getIntern() {

    inquirer    
        .prompt([
            {
                type: "input",
                message: "What is the intern's school?",
                name: "school"
            },

        ])
        .then(answers =>{
            this.getschool = answer;
            const internObj = new Intern(name, id, email, school);
            const internCardHtml = internCard(internObj);

            teamMember.push(internCardHtml);
            createTeam();
        })

}

function buildTeam() {
fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp()