// Type checking using typeof operator
const myNum1 = 80
const myNum2 = '40'
const myStr = 'Hello'
const myBool = true
const myArr = [10, 20, 30]
const myObj = { name: 'Ipheco' }

console.log(typeof myNum1) // Output: "number"
console.log(typeof myNum2) // Output: "string"
console.log(typeof myStr) // Output: "string"
console.log(typeof myBool) // Output: "boolean"
console.log(typeof myArr) // Output: "object"
console.log(typeof myObj) // Output: "object"

// Value comparison using "loose equality (==)" and "strict equality (===) operators"
console.log(42 == '42') // Output: true (loose equality)
console.log(42 === '42') // Output: false (strict equality)

// Difference between truthy and falsy values
let truthyValue = 'Hello' // The truthyValue is assigned to the string value "Hello", which is a non-empty string. In JavaScript, non-empty strings are considered truthy values. Examples of truthy values include non-empty strings, numbers other than 0, arrays, objects, and more.
let falsyValue = 0 // The falsyValue is assigned to the numeric value 0. In JavaScript, the number 0 is considered a falsy value. Examples of falsy values include 0, null, undefined, an empty string "", NaN, and false itself.

truthyValue = 'true' // Reassigned to a string "true"
falsyValue = 'false' // Reassigned to a string "false"

console.log(truthyValue) // Output: true
console.log(falsyValue) // Output: false
