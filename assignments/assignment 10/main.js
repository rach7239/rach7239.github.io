// 1. Create JSON for each employee
var resources = {
    "employees" : [
        {
            "name" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raiseEligible" : true,
        },
        {
            "name" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raiseEligible" : true,
        },
        {
            "name" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raiseEligible" : false,
        }
    ]
}

console.log (resources.employees)

// 2. Create JSON for the company
var company = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : [
        {
            "name" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raiseEligible" : true,
        },
        {
            "name" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raiseEligible" : true,
        },
        {
            "name" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raiseEligible" : false,
        },
    ]
}

console.log(company)

// 3. New employee joined

let newEmployee = 
    {
        "name" : "Anna",
        "department" : "Tech",
        "designation" : "Executive",
        "salary" : 25600,
        "raiseEligible" : false,
    }

company["employees"].push(newEmployee)

console.log(company.employees.length)
console.log(company.employees)
console.log(company.employees[3])

// 4. Given the JSON, calculate total salary for all company employees

let total = 0
for (let i = 0; i < company.employees.length; i++) {
    total += company.employees[i].salary
}
console.log(total)

// 5. Raise time

for (let j = 0; j < company.employees.length; j++) {
    if (company.employees[j].raiseEligible === true) {
        let increaseEmployeeSalary = company.employees[j].salary * 1.1
        company.employees[j].salary = increaseEmployeeSalary
        company.employees[j].raiseEligible = false
    }  
}

console.log(company.employees)

// 6. WFH

for (let k = 0; k < company.employees.length; k++) {
    if (company.employees[k].name === "Anna") {
        company.employees[k].wfh = true
    } else if (company.employees[k].name === "Sam") {
        company.employees[k].wfh = true
    } else {
        company.employees[k].wfh = false
    }
}

console.log(company.employees)