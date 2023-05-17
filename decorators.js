/**
 * * Example of decorator to count how may times a function has been called
 */

let sum = (...args) => args.reduce((a, b) => a + b)

const countCalls = (fn) => {
  counter = 0

  return (...args) => {
    console.log(`${fn.name} has been called ${counter += 1} times`)
    return fn(...args)
  }
}

sum = countCalls(sum)

console.log(sum(10, 11))
console.log(sum(10, 16, 12, 78))
console.log(sum(17, 11, 35))

