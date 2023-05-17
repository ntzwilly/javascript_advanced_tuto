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

// console.log(sum(10, 11))
// console.log(sum(10, 16, 12, 78))
// console.log(sum(17, 11, 35))

/**
 * *Example of using decorator to validate data
 */

let rectangleArea = (length, width) => length * width;

const countArgs = (fn) => {
  return (...args) => {
    try{
      if(args.length !== fn.length) {
        throw new Error(`Incorrect number of arguments for ${fn.name}`);
      }
    }catch(error) {
      console.log(error.message)  
    }
    return fn(...args)
  }
}

const requireIntegers = (fn) => {
  let name = fn.name
  return (name, ...args) => {
    try {
      args.forEach(arg => {
        if(!Number.isInteger(arg)) {
          throw new TypeError(`Arguments for ${name} must be integers`)
        }
      })
    } catch (error) {
      console.log(error.message)
    };
    return fn(...args)
  }
}

rectangleArea = countArgs(rectangleArea)
rectangleArea = requireIntegers(rectangleArea)
console.log(rectangleArea(12, 'hello'))
// console.log(rectangleArea(12, 10, 15))
// console.log(rectangleArea(12, 13))


