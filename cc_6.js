class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);

        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} manages the ${this.department} department and leads a team of ${this.teamSize} employees.`;
    }
}
const employee1 = new Employee("John Smith", "Sales");

const employee2 = new Employee("Sarah Johnson", "Marketing");
const manager1 = new Manager(
    "Michael Brown",
    "Operations",
    8
);
class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }
}
const company = new Company();
company.addEmployee(employee1);

company.addEmployee(employee2);

company.addEmployee(manager1);
company.listEmployees();