// Import Employee
const Employee = require("./Employee");

// Define and export the Manager class. This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Get name, id, email from Employee
        super(name, id, email);
        // Attach office number to Employee
        this.officeNumber = officeNumber;
    };
    // Return office number
    getOfficeNumber() {
        return this.officeNumber;
    };
    // Return role
    getRole() {
        return "Manager";
    };
};

// Export Manager
module.exports = Manager;