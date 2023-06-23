// Created an object with properties
const person = {
  name: 'Ayaefiena Ifechukwu',
  age: 28,
  location: 'Awka, Anambra State'
}

// printed the values of the specific properties
console.log('Name:', person.name) // Output: Name: Ayaefiena Ifechukwu
console.log('Age:', person.age) // Output: Age: 28
console.log('Location:', person.location) // Output: Location: Awka, Anambra State

// updated the properties using the dot and bracket notation
person.name = 'Ipheco Chris' // Updated the value of the name property using dot notation
person.age = 29 // Updated the value of the age property using bracket notation
person.gender = 'Male' // Added a new property using dot notation

console.log('Updated Name:', person.name) // Output: Updated Name: Ipheco Chris
console.log('Updated Age:', person.age) // Output: Updated Age: 29
console.log('Gender:', person.gender) // Output: Gender: Male
