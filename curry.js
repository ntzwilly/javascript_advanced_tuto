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
console.log(addTwenty(4))