const ImprovedNumber = require("../src/index")

test ( "sanity check", () => {
  expect(2+2).toBe(4)
})

test ( "testing golden ratio", () => {
  const testNumber = new ImprovedNumber()
  expect(testNumber.goldenRatio).toBe(1.61803398875)
})

test ( "testing round", () => {
  const testNumber = new ImprovedNumber(9.99)
  expect(testNumber.round()).toBe(10)
})

test ( "testing floor", () => {
  const testNumber = new ImprovedNumber(9.99)
  expect(testNumber.floor()).toBe(9)
})

test ( "testing ceil", () => {
  const testNumber = new ImprovedNumber(9.01)
  expect(testNumber.ceil()).toBe(10)
})

test ( "testing degToRad", () => {
  const testNumber = new ImprovedNumber()
  expect(testNumber.degToRad(45)).toBe(0.7853981633974483)
})

test ( "testing radToDeg", () => {
  const testNumber = new ImprovedNumber()
  expect(testNumber.radToDeg(0.785)).toBe(44.97718691776963)
})

test ( "testing toDollars", () => {
  const testNumber = new ImprovedNumber(40)
  expect(testNumber.toDollars()).toBe("$40.00")
})

test ( "testing tax", () => {
  const testNumber = new ImprovedNumber(40)
  expect(testNumber.tax(0.08)).toBe("$43.20")
})

test ( "testing interest", () => {
  const testNumber = new ImprovedNumber()
  expect(testNumber.interest(200, 0.01, 10)).toBe(22)
})

test ( "testing interest", () => {
  const testNumber = new ImprovedNumber()
  expect(testNumber.totalWithInterest(200, 0.01, 10)).toBe(222)
})

// const testNumber = new ImprovedNumber(40)
// console.log(testNumber.pad(3, 4))
