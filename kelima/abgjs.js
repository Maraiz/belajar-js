let value = 0;

function addWith(addingValue) {
    value += addingValue;
    console.log(`current value is ${value}`);
    return value;
}

const result1 = addWith(10);
const result2 = addWith(10);
const result3 = addWith(10);

console.log(result1, result2, result3);
