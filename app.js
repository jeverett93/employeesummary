const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function mainMenu() {
    inquirer
        .prompt([
            // add switch case for build team and team built
            {
                type: "list",
                message: "What role would you like to do?",
                choices: ["Build a team", "Finish team"],
                name: "teamOption"
            }
        ])
        .then(function (response) {
            const teamOption = response.teamOption;
            switch (teamOption) {
                case "Build a team":
                    inquirer.prompt([
                        {
                            type: "list",
                            message: "What role would you like to add?",
                            choices: ["Engineer", "Intern", "Manager"],
                            name: "role"
                        }
                    ])
                        .then(function (response) {
                            const role = response.role;
                            switch (role) {
                                case "Engineer":
                                    addEngineer();
                                    break;
                                case "Intern":
                                    addIntern();
                                    break;
                                case "Manager":
                                    addManager();
                                    break;
                                default:
                                    break;
                            }
                        })
                    break;
                case "Finish team":
                    // render(team);
                    if (team.length > 0){
                        render(team);
                    }else{
                        console.log("There's no team members!")
                        mainMenu();
                    }
                    break;
                default:
                    break;
            }
        })
}

mainMenu();

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "name"
            },
            {
                type: "Input",
                message: "What is their email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is their employee id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your Github username?",
                name: "github"
            },
        ])
        .then(function (response) {
            console.log(response)
            let newEngineer = new Engineer(response.name, response.email, response.id, response.github);
            team.push(newEngineer)
            console.log(team)
            mainMenu();
            // collect people inside team array
            // call main menu function in all .thens to go back to main menu
            // .push response objects into global array
            // need main menu option of build team to call so function is rendered
            // render function will use global array to render team
            // add another case for build team that calls render function
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "name"
            },
            {
                type: "Input",
                message: "What is their email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is their employee id?",
                name: "id"
            },
            {
                type: "input",
                message: "What school do they attend?",
                name: "school"
            },
        ])
        .then(function (response) {
            console.log(response)
            let newIntern = new Intern(response.name, response.email, response.id, response.school);
            team.push(newIntern)
            console.log(team)

            mainMenu();
        })
}

function addManager() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "name"
            },
            {
                type: "Input",
                message: "What is their email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is their employee id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is their office number?",
                name: "officeNumber"
            },
        ])
        .then(function (response) {
            console.log(response)
            let newManager = new Manager(response.name, response.email, response.id, response.officeNumber);
            team.push(newManager)
            console.log(team)
            mainMenu();
        })
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
