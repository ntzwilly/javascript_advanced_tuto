/**  
 ** A closure is a function having access to the parent scope even after the parent function has closed 
*/

function readX(x){
  x = x + 1
  function addY(y) {
    x = x + y
    return x
  }
  return addY
}

// console.log(readX(3)) 
const add = readX(2) 
console.error(add(3)) 
console.error(add(3)) 
console.error(add(3)) 


const total = ((n) => {
  let total = n
  console.log(`Initial value of total: ${n}`)
  return () => {
    total -= 1
    console.log(total > 0 ? 
      `The total is ${total} and greater than zero` : 
      "The total is zero, you are done!")
  }
})(5)

total();
total();
total();
total();
total();
total();