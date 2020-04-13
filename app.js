// Global variables 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// array that team members are pushed into
let team = [];

// Main menu function that initializes application that lets user develop team
const mainMenu= () => {
    inquirer
        .prompt([
            // Switch case that allows user to keep building team and or complete their team
            {
                type: "list",
                message: "What role would you like to do?",
                choices: ["Build a team", "Finish team"],
                name: "teamOption"
            }
        ])
        .then(response => {
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
                    // different functions called for each case of employee type
                        .then(response => {
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
                    // running HTML function once team is complete/built
                case "Finish team":
                    if (team.length > 0) {
                        writeHTML(render(team));
                        console.log(team)
                        console.log("All done!");
                    } else {
                        console.log("There's no team members!");
                        mainMenu();
                    }
                    break;
                default:
                    break;
            }
        })
}

// calling main menu function to generate initial questions
mainMenu();

// questions for engineer employee type
const addEngineer= () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is their employee id?",
                name: "id"
            },
            {
                type: "Input",
                message: "What is their email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your Github username?",
                name: "github"
            },
        ])
        .then(response => {
            // creating new Engineer class dynamically and pushing into team array
            let newEngineer = new Engineer(response.name, response.id, response.email, response.github);
            team.push(newEngineer)
            mainMenu();
        })
}

// questions for intern employee type
addIntern= () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is their employee id?",
                name: "id"
            },
            {
                type: "Input",
                message: "What is their email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What school do they attend?",
                name: "school"
            },
        ])
        .then(response => {
            // creating new Intern class dynamically and pushing into team array
            let newIntern = new Intern(response.name, response.id, response.email, response.school);
            team.push(newIntern)
            mainMenu();
        })
}

// questions for manager employee type
const addManager= () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is their employee id?",
                name: "id"
            },
            {
                type: "Input",
                message: "What is their email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is their office number?",
                name: "officeNumber"
            },
        ])
        .then(response => {
            // creating new Manager class dynamically and pushing into team array
            let newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
            team.push(newManager)
            mainMenu();
        })
}

// Generating HTML file with user input
const writeHTML= HTML => {
    fs.writeFileSync(outputPath, HTML, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
};

