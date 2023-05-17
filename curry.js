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

const mySandwich = makeSandwich("bread")("meat")("cheese")
console.log(mySandwich)



