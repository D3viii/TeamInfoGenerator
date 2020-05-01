// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {

    constructor(GitHubUser){
        this.GitHubUser = GitHubUser;

    }

    getGitHub() {
        inquirer.prompt([{
            type: "input",
            name: "GitHubUser",
            message: "GitHub Username:",
        }])
        

    }
}
module.exports = Engineer