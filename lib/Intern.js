//  Import Employee
const Employee = require("./Employee");

// Define and export the Intern class. This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Get name, id, and email from Employee
        super(name, id, email);
        // Attach school to Employee object.
        this.school = school;
    };
    // Return school
    getSchool() {
        return this.school;
    };
    // Return role
    getRole() {
        return "Intern";
    };
};

// Export Intern
module.exports = Intern;