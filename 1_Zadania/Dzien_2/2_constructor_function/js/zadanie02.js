function Calculator () {
  this.history = [];
}


Calculator.prototype.add = function(num1, num2) {
  const result = num1 + num2;
  this.history.push("added " + num1 + " to " + num2 + " got " + result);
  return result;
}

Calculator.prototype.multiply = function(num1, num2) {
  const result = num1 * num2;
  this.history.push("multiplied " + num1 + " with " + num2 + " got " + result);
  return result;
}

Calculator.prototype.subtract = function(num1, num2) {
  const result = num1 - num2;
  this.history.push("subtracted " + num1 + " from " + num2 + " got " + result);
  return result;

}

Calculator.prototype.divide = function(num1, num2) {
  const result = num1 / num2;
  this.history.push("divided " + num1 + " by " + num2 + " got " + result);
  return result;
}

Calculator.prototype.printOperations = function() {
  console.log(this.history);
}

Calculator.prototype.clearOperations = function() {
  this.history = [];
}

const calc = new Calculator();
console.log(calc);
calc.add(2,3);
calc.printOperations();
calc.multiply(3,1);
calc.printOperations();
console.log(calc.subtract(9,1));
calc.clearOperations();
calc.printOperations();
