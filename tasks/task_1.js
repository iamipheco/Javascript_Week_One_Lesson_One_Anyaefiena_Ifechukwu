const myname = 'Ifechukwu Anyaefiena' // variable assigned to a string value 'myname'
const greeting = 'Hello, ' + myname + '!' // string concatenation used to create a new string
console.log(greeting) // Output: Hello, Ifechukwu Anyaefiena!

// Used string methods to manipulate the string
const uppercaseName = myname.toUpperCase() // string method used to change the variable to UpperCase letters
console.log(uppercaseName) // Output: IFECHUKWU ANYAEFIENA

const lowercaseName = myname.toLowerCase() // string method used to change the variable to LowerCase letters
console.log(lowercaseName) // Output: ifechukwu anyaefiena

const slicedName = myname.slice(10, 20) // string method used to slice a variable
console.log(slicedName) // Output: Anyaefiena
