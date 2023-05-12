/**
 * * In computer science, recursion is a method of solving 
 * * a problem where the solution depends on solutions to 
 * * smaller instances of the same problem
 */

function countToTen(num = 1) {
  if(num > 10) return 
  console.log(num)
  countToTen(num+1)
}

countToTen()

function fibonacci(n) {
  if(n == 0 || n == 1) return n
  else return fibonacci(n-1) + fibonacci(n-2)
}

// console.log(fibonacci(5))
// console.log(fibonacci(8))

const fibonacci = (num, array=[0, 1]) => {
  while(num > 2) {
    const [prev, last] = array.slice(-2)
    array.push(prev + last)
    num -= 1
  }
  return array  
}

const fibonacci = (num, array=[0, 1]) => {
  if (num <= 2) return array
  const [prev, last] = array.slice(-2)
  return fibonacci(num-1, [...array, prev + last])
}



// console.log(fibonacci(0))