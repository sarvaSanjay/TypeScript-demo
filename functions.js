"use strict";
// Typical way
function add(num1, num2) {
    return num1 + num2;
}
// Arrow function
const sub = (num1, num2) => num1 - num2;
// Using function keyword
const mult = function (num1, num2) {
    return num1 * num2;
};
// Optional parameters
function add2(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
// Required parametrs: take default value
function add3(num1, num2, num3 = 0) {
    return num1 + num2 + num3;
}
// Rest parameters
function add4(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log(add4(1, 2, 3, 4, 5));
