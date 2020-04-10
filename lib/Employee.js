// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
  
    getName() {
      return this.name;
    }
    getId() {
        return this.id;
      }
    getEmail() {
        return this.email;
      }
    getRole() {
        return "Employee";
      }
  }

//   employee1 = new Employee("Alice", 100, "tests@test.com")
//   employee1.getName();
//   employee1.getId();
//   employee1.getEmail();

  module.exports = Employee;