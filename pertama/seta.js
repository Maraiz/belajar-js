const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);

set.forEach((value) => console.log(value));


const seta = new Set();
seta.add(1, 'jaket');
seta.add(2, 'baju');
seta.add('celana');
seta.add(4);
seta.add(5);

for (const number of seta) {
    console.log(number);
  }