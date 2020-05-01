// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Employee {
  constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

  getName() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name: "
      },
      console.log("What us your name")
    ]);
  }

  getId() {
    prompt([
      {
        type: "input",
        name: "id",
        message: "Id: "
      }
    ]);
  }

  getEmail() {
    inquirer.prompt([
      {
        type: "input",
        name: "email",
        message: "Email: "
      }
    ]);
  }
}

// module.exports = Employee;
