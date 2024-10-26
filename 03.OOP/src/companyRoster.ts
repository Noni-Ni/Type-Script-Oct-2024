
class Employee {
    name: string;
    salary: number;
    position: string;
    department: string;
    email?: string = 'n/a';
    age?: number = -1;

    constructor(name: string, salary: number, position: string, department: string, email?: string, age?: number) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
}

class Department {
    name: string;
    employees: Employee[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    getAverageSalary(): number {
        const totalSalary = this.employees.reduce((sum, employee) => sum + employee.salary, 0);
        return totalSalary / this.employees.length;
    }
}

function company(input: string[]): void {
    let departments: Department[] = [];

    for (let index = 1; index < input.length; index++) {
        const element = input[index];
        //let [name, salary, job, department, email, age] = element.split(' ');
        let resultArr: string[] = element.split(' ');
        let name: string = resultArr[0];
        let salary: number = Number(resultArr[1]);
        let position: string = resultArr[2];
        let department: string = resultArr[3];
        let email: string;
        let age: number;
        if (resultArr[4]) {
            if (resultArr[4].includes('@')) {
                email = resultArr[4]
            } else {
                age = Number(resultArr[4])
            }
        }
        if (resultArr[5]) {
            age = Number(resultArr[5])
        }

        if (email === undefined) {
            email = 'n/a';
        }
        if (age === undefined) {
            age = -1;
        }
        const employee: Employee = new Employee(name, salary, position, department, email, age)


        if (!departments.find(el => el.name === department)) {
            let dep: Department = new Department(department);
            dep.addEmployee(employee);
            departments.push(dep);

        } else {
            let dep = departments.find(el => el.name === department)
            dep.addEmployee(employee)
        }
    }

    function getHighestAverageSalaryDepartment(): Department | null {
        let maxAverageSalary = 0;
        let highestDepartment: Department | null = null;

        departments.forEach(department => {
            const averageSalary = department.getAverageSalary();
            if (averageSalary > maxAverageSalary) {
                maxAverageSalary = averageSalary;
                highestDepartment = department;
            }
        });

        return highestDepartment;
    }

    let finalResult = getHighestAverageSalaryDepartment()
    if (finalResult) {
        console.log(`Highest Average Salary: ${finalResult.name}`);
        finalResult.employees
            .sort((a, b) => b.salary - a.salary)
            .forEach(employee => {
                console.log(`${employee.name} ${employee.salary.toFixed(2)} ${employee.email} ${employee.age}`);
            });
    }
}

company(['4',
    'Peter 120.00 Dev Development peter@abv.bg 28',
    'Tina 333.33 Manager Marketing 33',
    'Sam 840.20 ProjectLeader Development sam@sam.com',
    'George 0.20 Freeloader Nowhere 18'])
company(['6',
    'Silver 496.37 Temp Coding silver@yahoo.com',
    'Sam 610.13 Manager Sales',
    'John 609.99 Manager Sales john@abv.bg 44',
    'Venci 0.02 Director BeerDrinking beer@beer.br 23',
    'Andre 700.00 Director Coding',
    'Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey',])
/*class Company {
    departments: Map<string, Department> = new Map();

    addEmployee(employee: Employee) {
        if (!this.departments.has(employee.department)) {
            this.departments.set(employee.department, new Department(employee.department));
        }
        this.departments.get(employee.department)?.addEmployee(employee);
    }

    getHighestAverageSalaryDepartment(): Department | null {
        let maxAverageSalary = 0;
        let highestDepartment: Department | null = null;

        this.departments.forEach(department => {
            const averageSalary = department.getAverageSalary();
            if (averageSalary > maxAverageSalary) {
                maxAverageSalary = averageSalary;
                highestDepartment = department;
            }
        });

        return highestDepartment;
    }
}*/

// Example usage
//const company = new Company();
const employees = [
    new Employee('Peter', 120.00, 'Dev', 'Development', 'peter@abv.bg', 28),
    //new Employee('Tina', 333.33 ,'Manager', 'Marketing', 33 ),
    new Employee("Bob", 6000, "Manager", "HR", "bob@example.com", 40),
    new Employee("Charlie", 5500, "HR", "HR", "n/a", 25)
];

//employees.forEach(employee => company.addEmployee(employee));

//const highestAvgDept = company.getHighestAverageSalaryDepartment();
//if (highestAvgDept) {
//   console.log(`Highest Average Salary: ${highestAvgDept.name}`);
//   highestAvgDept.employees
//       .sort((a, b) => b.salary - a.salary)
//       .forEach(employee => {
//           console.log(`${employee.name} ${employee.salary.toFixed(2)} ${employee.email} ${employee.age}`);
//       });
//}
