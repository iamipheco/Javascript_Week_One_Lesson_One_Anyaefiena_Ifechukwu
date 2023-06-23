const numbers = [2, 4, 6, 8, 10] // Created an array of numbers [2, 4, 6, 8, 10]
console.log('myArrays Numbers:', numbers) // Output: myArrays Numbers: [ 2, 4, 6, 8, 10 ]

// printed the value of a specific element at index 4 in the array
console.log('Element at index 4:', numbers[4]) // Output: Element at index 4: 10

numbers.push(20, 40, 60) // push() - Add elements to the end of the array
console.log('After push():', numbers) // Output: After push(): [2,  4,  6,  8, 10, 20, 40, 60]

const poppedElement = numbers.pop() // pop() - Remove the last element from the array
console.log('After pop():', numbers) // Output: After pop(): [2,  4,  6, 8, 10, 20, 40]
console.log('Popped element:', poppedElement) // Output: Popped element: 60

const shiftedElement = numbers.shift() // shift() - Remove the first element from the array
console.log('After shift():', numbers) // Output: After shift(): [ 4, 6, 8, 10, 20, 40 ]
console.log('Shifted element:', shiftedElement) // Output: Shifted element: 2

numbers.unshift(0, 5, 8, 13) // unshift() - Add elements to the beginning of the array
console.log('After unshift():', numbers) // Output: After unshift(): [0, 5,  8, 13,  4, 6, 8, 10, 20, 40]
