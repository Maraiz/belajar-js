const employees = [
    {
        name: 'Fulan',
        email: 'fulan@dicoding.com',
        joinYear: 2020,
    },
];

function addEmployee(name, email, joinYear) {
    const karyawanbaru = {
        name: name,
        email: email,
        joinYear: joinYear,
    };
    employees.push(karyawanbaru);
}

addEmployee('Maulana', 'Maulana@dicoding.com', 2025);
console.log(employees);