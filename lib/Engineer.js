// Import Employee
const Employee = require("./employee");

// Define and export the Engineer class. This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, gitHubName) {
        // Get name, id, email from Employee
        super(name, id, email);
        // Attach GitHub name to Employee object.
        this.gitHub = gitHubName;
    };
    // Return GitHub name
    getGitHub() {
        return this.gitHub;
    };
    // Return role
    getRole() {
        return "Engineer";
    };
};

// Export Engineer
module.exports = Engineer;