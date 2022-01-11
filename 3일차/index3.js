function add(num1, num2) {
    return num1 + num2;
}

const add2 = (num1, num2) => {
    return num1 + num2;
};

const add3 = (num1, num2) => (num1 + num2);

const result = add2(2, 3);
console.log(result);

console.log(add);
console.log(add2);
console.log(add3);