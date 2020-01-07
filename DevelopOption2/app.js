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
            switch(answers.role){
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
                message: "What is the Engineer's name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is the Engineer's ID?",
                name: "engineerId"
            },
            {
                type: "input",
                message: "What is Engineer's email address?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is the github user name?",
                name: "engineergitHub"
            },

        ])
        .then(answers =>{
            this.getGitHub = answers.gitHub;

            const {engineerName, engineerId, engineerEmail, engineergitHub} = answers;
            const engineerObj = new Engineer(engineerName, engineerId, engineerEmail, engineergitHub);

            const engineerCardHtml = engineerCard(engineerObj);
            teamMember.push(engineerCardHtml);
            createTeam();
        })

}
// a function that create an intern
function getIntern() {
    console.log("yes");
    

    inquirer    
        .prompt([
            {
                type: "input",
                message: "What is the Intern's name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is the Intern's ID?",
                name: "internId"
            },
            {
                type: "input",
                message: "What is Intern's email address?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What is the intern's school?",
                name: "internSchool"
            },

        ])
        .then(answers =>{
            this.getSchool = answers.school;
    
            const {internName, internId, internEmail, internSchool} = answers;
            const internObj = new Intern(internName, internId, internEmail, internSchool);

            const internCardHtml = internCard(internObj);

            teamMember.push(internCardHtml);
            createTeam();
        })

}

function buildTeam() {
fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp()