class Employee {
    constructor(name, salary, position, department, email, age) {
        this.email = 'n/a';
        this.age = -1;
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
}
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getAverageSalary() {
        const totalSalary = this.employees.reduce((sum, employee) => sum + employee.salary, 0);
        return totalSalary / this.employees.length;
    }
}
class Company {
    constructor() {
        this.departments = new Map();
    }
    addEmployee(employee) {
        if (!this.departments.has(employee.department)) {
            this.departments.set(employee.department, new Department(employee.department));
        }
        this.departments.get(employee.department)?.addEmployee(employee);
    }
    getHighestAverageSalaryDepartment() {
        let maxAverageSalary = 0;
        let highestDepartment = null;
        this.departments.forEach(department => {
            const averageSalary = department.getAverageSalary();
            if (averageSalary > maxAverageSalary) {
                maxAverageSalary = averageSalary;
                highestDepartment = department;
            }
        });
        return highestDepartment;
    }
}
// Example usage
const company = new Company();
const employees = [
    new Employee('Peter', 120.00, 'Dev', 'Development', 'peter@abv.bg', 28),
    //new Employee('Tina', 333.33 ,'Manager', 'Marketing', 33 ),
    new Employee("Bob", 6000, "Manager", "HR", "bob@example.com", 40),
    new Employee("Charlie", 5500, "HR", "HR", "n/a", 25)
];
employees.forEach(employee => company.addEmployee(employee));
const highestAvgDept = company.getHighestAverageSalaryDepartment();
if (highestAvgDept) {
    console.log(`Highest Average Salary: ${highestAvgDept.name}`);
    highestAvgDept.employees
        .sort((a, b) => b.salary - a.salary)
        .forEach(employee => {
        console.log(`${employee.name} ${employee.salary.toFixed(2)} ${employee.email} ${employee.age}`);
    });
}
//# sourceMappingURL=companyRoster.js.map