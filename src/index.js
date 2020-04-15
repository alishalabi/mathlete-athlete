// Challenge 1 GoldenRatio - Add a new property to Number that is the Golden Ratio
// Example: Number.goldenRatio // 1.61803398875
// Strategy: Number.prototype = 1.61803398875
// Stretch: Calculate the golden ratio with math
// Challenge 2 Number Methods: round, floor, ceil - These functions already exist on the Math Object, your job is to make a method on Number that does the same thing. Rather than Math.round(x) your method will work like this: x.round() or (1.99).round().
// round() - x = 9.99 - x.round() -> 10
// floor() - x = 9.99 - x.floor() -> 9
// ceil() - x = 1.03 - x.ceil() -> 2
// Challenge 3 pad(x, y) - pads Number with x 0s before, and y 0s after.
// Example: 34.801.pad(4,4) -> 0034.8010 (notice the 0s added ont he left and right sides)
// Challenge 4 degToRad(n) - I'm surprised this function is not included with JS.
// Example: degToRad(45) -> 0.785
// Strategy: Write a function that takes a number and returns the results of this formula: deg * (Math.PI / 180)
// Stretch Goal: Check for invalid input. If the value input is not a number or is not included the function should throw and error.
// Challenge 5 radToDeg(deg) - Covert radians to degrees.
// Example: radToDeg(0.785) -> 44.977
// Strategy: Write a function that takes a number and returns calculation from this formula: radians * (180 / Math.PI)
// Stretch Goal: Check for invalid input. If the value input is not a number or is not included the function should throw and error.
// Challenge 6 toDollars(amount) - Formatting money is a common task for software projects. A function could save you time in the future. The goal of this function is to take a numeric value and return a string beginning with a '$' and rounded to two decimal places.
// Example: toDollars(3.9) -> $3.90 (Note: pads with a 0)
// Strategy: The Number.toFixed(n) method will do most of the work for you!
// Stretch Goals: Create a currency formatting function that simplifies the use of: Intl.NumberFormat
// intFormat(amount, countryCode, style)
// Stretch Goal: Add the Money Class to your Library (from the in class exercise).
// Challenge 7 tax(rate) - Returns the tax amount
// Example: tax(rate) - returns the amount with tax
// Challenge 8 interest(total, year, rate) - Write a function that calculates the interest over time.
// Example: https://stackoverflow.com/questions/28325001/how-to-calculate-interest-javascript
// Challenge 9 mortage(principal, numberOfPayments, interestRate).
// Example: https://stackoverflow.com/questions/17101442/how-to-calculate-mortgage-in-javascrip
// Challenge 10 - Stretch intToHex(int) -> #332211
// Example: https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
// Challenge 11 - Stretch Random functions
// random(n) - returns an integer from 0 to n - 1
// randomRange(min, max) - returns an integer from min to max.
// randomHexColor() - Returns a random hex color
// randomRGBColor() - Returns a random hex color


class ImprovedNumber {
  constructor(value = null) {
    this.value = value
    this.goldenRatio = 1.61803398875
  }
  round() {
    return Math.round(this.value)
  }
  floor() {
    return Math.floor(this.value)
  }
  ceil() {
    return Math.ceil(this.value)
  }
  pad(x,y) {
    const front = "0".repeat(x)
    const back = "0".repeat(y)
    return front + this.value + back
  }
  degToRad(deg) {
    return deg * Math.PI / 180
  }

  radToDeg(rad) {
    return rad / Math.PI * 180
  }

  toDollars() {
    return `$${this.value.toFixed(2)}`
  }

  tax(rate) {
    return `$${((rate + 1) * this.value).toFixed(2)}`
  }

  interest(total, year, rate) {
    return (total * (1 + rate) * year)
  }

  totalWithInterest(total, year, rate) {
    return (total + this.interest(total, year, rate))
  }


  mortgage(principal, numberOfPayments, interestRate) {
    return principal * interestRate * (Math.pow(1 + interestRate, numberOfPayments)) / (Math.pow(1 + interestRate, numberOfPayments) - 1);
  }

  intToHex(int) {

  }

  randomHexColor() {

  }

  randomRGBColor() {

  }

}

// export default ImprovedNumber;
module.exports = ImprovedNumber;
