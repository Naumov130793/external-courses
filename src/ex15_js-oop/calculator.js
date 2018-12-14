var calculator = function() {
  this.result = 0;
};

calculator.prototype.add = function(variable) {
  if (arguments.length !== 0) {
    this.result += variable;
  }
  return this;
};

calculator.prototype.subtract = function(variable) {
  if (arguments.length !== 0) {
    this.result -= variable;
  }
  return this;
};

calculator.prototype.divide = function(variable) {
  if (arguments.length !== 0) {
    this.result /= variable;
  }
  return this;
};

calculator.prototype.multiply = function(variable) {
  if (arguments.length !== 0) {
    this.result *= variable;
  }
  return this;
};

(calculator.prototype.getResult = function() {
  console.log(this.result);
  return this;
}),
  (calculator.prototype.resetResult = function() {
    this.result = 0;
    return this;
  });

calculator.prototype.setState = function(num) {
  this.result = num;
  return this;
};

calculator.prototype.Fetch = function() {
  setTimeout(function() {
    this.result = 555;
    console.log(this.result);
  }, 5000);
  return this;
};

var engineerCalc = function() {
  calculator.apply(this);
};

engineerCalc.prototype = Object.create(calculator.prototype);
engineerCalc.prototype.constructor = engineerCalc;

engineerCalc.prototype.degree = function(number1, degree) {
  console.log(Math.pow(number1, degree));
  return this;
};

engineerCalc.prototype.secondEngineerCalculation = function(number) {
  console.log("secondEngineerCalculation with number " + number);
  return this;
};

var financial_engineerCalc = function() {
  calculator.apply(this);
};

financial_engineerCalc.prototype = Object.create(engineerCalc.prototype);
financial_engineerCalc.prototype.constructor = engineerCalc;

financial_engineerCalc.prototype.percent = function(number1, percents) {
  console.log(number1 / 100 * percents);
  return this;
};

financial_engineerCalc.prototype.secondFinancialEngineerCalculation = function(
  number1,
  number2
) {
  console.log(
    "second financial_engineerCalculation with numbers " +
      number1 +
      " " +
      number2
  );
  return this;
};

var newEngineerCalc = new engineerCalc();
newEngineerCalc
  .add(5)
  .subtract(10)
  .multiply(-10)
  .divide(4)
  .resetResult()
  .getResult()
  .setState(777)
  .getResult()
  .degree(8, 2)
  .secondEngineerCalculation(555);

var newFinancialEngineerCalc = new financial_engineerCalc();
newFinancialEngineerCalc
  .add(50)
  .subtract(10)
  .multiply(-5)
  .divide(2)
  .getResult()
  .Fetch()
  .degree(5, 2)
  .secondEngineerCalculation(17)
  .percent(200, 1)
  .secondFinancialEngineerCalculation(200, 400)
  .secondEngineerCalculation(555);
