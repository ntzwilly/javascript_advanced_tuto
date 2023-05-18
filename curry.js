/**
 * * Currying takes a function that receives more than one parameter
 * * and break it into a series of unary functions
 */

const makeSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`
    }
  }
}

const sandwich1 = makeSandwich("bread")("meat")("cheese")
// console.log(sandwich1)

/**
 * * Refactor:
 */

const makeSandwich2 = ingredient1 => ingredient2 => ingredient3 => 
     `${ingredient1}, ${ingredient2}, ${ingredient3}`


const sandwich2 = makeSandwich2("bread")("spinach")("tomato")
// console.log(sandwich2)

/**
 * *Another example
 */

const add = (a, b) => a + b

/** 
 * * Curried add
 */

const curriedAdd = a => b => a + b

const addTwenty = curriedAdd(20)
// console.log(addTwenty(4))

const updateElemText = id => content => {
  document.querySelector(`#${id}`).textContent = content
}

const updateHeaderText = updateElemText('header')
// updateHeaderText("Hello, BB")

const validateValue = value => number => number <= value && number > 0 ? "Valid" : "invalid"


// let x = validateValue(12)
// console.log(x(0))
// console.log(x(7))

/**
 * * Function composition example
 */

const addCustomer = fn => (...params) => {
  console.log('saving customer info')
  return fn(...params)
}

const processOrder = fn => (...params) => {
  console.log(`processing order #${params[0]}`)
  return fn(...params)
}

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed`)
}

completeOrder = (processOrder(completeOrder))
// console.log(completeOrder)
completeOrder = (addCustomer(completeOrder))
// completeOrder("100")
// completeOrder("101")

/**
 * * Requires a function with a fixed number of parameters
 */

const curry = (fn) => {
  return curried = (...args) => {
    if(args.length !== fn.length) {
      return curried.bind(null, ...args)
    }
    return fn(...args)
  }
}

const total = (x, y, z) => x + y + z
const curriedTotal = curry(total)
console.log(curriedTotal(10)(20)(30))