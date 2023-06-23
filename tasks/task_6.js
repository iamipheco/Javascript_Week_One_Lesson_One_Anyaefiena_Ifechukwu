const numericString = '82' // Converted a string to a number using parseInt() or parseFloat()
const number = parseInt(numericString) // Using parseInt()
console.log('Number:', number) // Output: 82

const floatString = '30.14' // Converted a string to a number using parseFloat()
const floatNumber = parseFloat(floatString) // Using parseFloat()
console.log('Float Number:', floatNumber) // Output: 30.14

const num = 70 // Convert a number to a string using toString() method
const numAsString = num.toString() // Using toString() method
console.log('Number as String:', numAsString) // Output: "70"

const floatNum = 10.2
const floatNumAsString = floatNum + '' // Using string concatenation
console.log('Float Number as String:', floatNumAsString) // Output: Float Number as String: 10.2

const stringToSplit = 'Hello, Ipheco!' // Convert a string to an array using the split() method
const stringToArray = stringToSplit.split(',') // Using split() method
console.log('Array:', stringToArray) // Output: Array: ["Hello", " Ipheco!"]
