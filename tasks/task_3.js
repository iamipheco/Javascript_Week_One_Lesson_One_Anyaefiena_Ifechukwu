// Created a variables and assigned the boolean values.
const isTrue = true
const isFalse = false

const resultAnd = isTrue && isFalse // For Logical AND (&&)
console.log('Logical AND:', resultAnd) // Output: false
// The && operator is the logical AND operator. It returns true only if both the operands are true.
// In this case, since isTrue is true and isFalse is false, the result of the logical AND operation is false.

const resultOr = isTrue || isFalse // For Logical OR (||)
console.log('Logical OR:', resultOr) // Output: true
// The || operator is the logical OR operator. It returns true if at least one of the operands is true.
// In this case, since isTrue is true, this condition is met, and the result of the logical OR operation is true.

const resultNot = !isTrue // For Logical NOT (!)
console.log('Logical NOT:', resultNot) // Output: false
// The ! operator is the logical NOT operator. It reverses the boolean value of its operand.
// In this case, since isTrue is true, the logical NOT operation changes it to false.

// Th 'if' Conditional statements
if (isTrue) {
  console.log('isTrue is true. And is the way of making heaven...')
  // Perform action here if isTrue is true.. we go to heaven
} else {
  console.log('isTrue is false. Going to hell fire straight..')
  // Perform alternative action here if isTrue is false.. we go to hell fire
}
