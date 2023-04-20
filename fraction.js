class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(value) {
    this.result += value;
  }
  
  getResult() {
    return this.result;
  }
}


const calc = new Calculator();
calc.add(5);
calc.add(10);
console.log(calc.getResult()); 

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Example usage
var num1 = 5;
var num2 = 10;
var result = multiply(num1, num2);
console.log("The result of multiplication is: " + result);
