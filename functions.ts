// Typical way
function add(num1: number, num2: number): number{
    return num1 + num2;
}

// Arrow function
const sub = (num1: number, num2: number): number => num1 - num2;

// Using function keyword
const mult = function(num1: number, num2: number): number{
    return num1 * num2;
}

// Optional parameters
function add2(num1: number, num2: number, num3?: number): number{
    return num3? num1 + num2 + num3 : num1 + num2;
}

// Required parametrs: take default value
function add3(num1: number, num2: number, num3: number = 0): number{
    return num1 + num2 + num3;
}

// Rest parameters
function add4(num1: number, num2: number, ...num3: number[]){
    return num1 + num2 + num3.reduce((a, b)=> a+b, 0)
}

console.log(add4(1, 2, 3, 4, 5))