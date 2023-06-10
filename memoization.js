const initApp = async () => {
  const memoizedFib = memoize(fib);
  console.log(memoizedFib(40));
  console.log(memoizedFib(40));
  console.log(memoizedFib(40));
  console.log(memoizedFib(40));
  // console.log(memoizedAddMany());
}

document.addEventListener('DOMContentLoaded', initApp)

const memorizedMultiplyByTen = () => {
  const cache = {};

  return (num) => {
    if(num in cache) {
      console.log(cache)
      return cache[num]
    }
    const result = num * 10;
    cache[num] = result;
    return result;
  }
}

const fib = (pos) => {
  if (pos < 2) return pos;
  return fib(pos-1) + fib(pos-2);
}

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    if(args.toString() in cache) {
      console.log(cache);
      return cache[args.toString()]
    }
    const result = fn(...args);
    cache[args.toString()] = result;
    return result;
  }
}
