// Define and export the Employee class
class Employee {
      constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
      };
    // Return parameters
      getName() {
        return this.name;
      };
      getId() {
        return this.id;
      };
      getEmail() {
        return this.email;
      };
      getRole() {
        return this.title;
      };
    };

    // Export Employee
    module.exports = Employee;