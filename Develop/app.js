const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");


const teamArray = [];
    function promptEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Engineer Name: "
            },
            {
                type: "input",
                name: "id",
                message: "Engineer ID: "
            },
            {
                type: "input",
                name: "email",
                message: "Engineer e-mail: "
            },
            {
                type: "input",
                name: "github",
                message: "Engineer Github: "
            }
        ]).then((res)=>{
            const engineer = new Engineer(res.name, res.id, res.email, res.github)
            teamArray.push(engineer);
        })
    }