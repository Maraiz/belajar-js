const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    const addEmployee = {
     name: name,
     email: email,
     joinYear: joinYear,
  }
    employees.push(addEmployee);
  }
  addEmployee('Maulana', 'Maulana@email.com', 2025);
  console.log(employees);
  