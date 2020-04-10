// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(githubUserName){
        super(name, id, email);

        this.githubUserName = githubUserName;
    }

    getGithub(){
        console.log(`This employee's github is ${this.githubUserName}`);
    }

    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer;