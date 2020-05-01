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
  function promptUserEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer Name: "
      },
      { 
        type: "input",
        name: "id",
        message: "Engineer Id: "
      },
      {
        type: "input",
        name: "email",
        message: "Engineer Email: "
      },
      {
        type: "input",
        name: "github",
        message: "GitHub Profile: "
      }
    ]).then((res)=>{
    const engineer = new Engineer(res.name, res.id, res.email, res.github);
    teamArray.push(engineer);
    inquirer.prompt([
      {
          type: "confirm",
          name: "moreTeam",
          message: "Are there more team members?",
          default: true
      }
    ]).then(res => {
      if(res.moreTeam){
         promptUserOther(); 
      }else{
        const htmlFile = render(teamArray);
        fs.writeFileSync(outputPath, htmlFile, function(er){
          console.log(er);
        });
      }
    })
    })
  }

  const promptUserEngineerAsync = util.promisify(promptUserEngineer);

  function promptUserIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Intern Name: "
      },
      { 
        type: "input",
        name: "id",
        message: "Intern ID: "
      },
      {
        type: "input",
        name: "email",
        message: "Intern Email: "
      },
      {
        type: "input",
        name: "school",
        message: "Intern School: "
      }
    ]).then((res)=>{
    const intern = new Intern(res.name, res.id, res.email, res.school);
    teamArray.push(intern);
    inquirer.prompt([
      {
          type: "confirm",
          name: "moreTeam",
          message: "Are there more team members?",
          default: true
      }
    ]).then(res => {
        if(res.moreTeam){
           promptUserOther(); 
        }else{
          const htmlFile = render(teamArray);
          fs.writeFileSync(outputPath, htmlFile, function(er){
            console.log(er);
          });
        }
      })
    })
  }

  const promptUserInternAsync = util.promisify(promptUserIntern);

  function promptUserTeam(){
    inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Manager Name: "
        },
        { 
          type: "input",
          name: "id",
          message: "Manager ID: "
        },
        {
          type: "input",
          name: "email",
          message: "Manager Email: "
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager's office number?"
        }
      ]).then((res)=>{
          const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
          teamArray.push(manager);
          promptUserOther();
    })
  }

  const promptUserOther = async ()=>{
    await inquirer.prompt([
      {
          type: "list",
          name: "employeeType",
          message: "Is the next team member an intern or engineer?",
          choices: ["Engineer", "Intern"]
      }
    ]).then(async (empType)=>{
      if(empType.employeeType === "Engineer"){
        await promptUserEngineerAsync()
      }else{
        await promptUserInternAsync()
      }
    })
  }

  promptUserTeam();