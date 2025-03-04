const number = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(number);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false