function sum(number) {
  if(number === 0) {
    return 0
  }
  return number + sum(number-1)
}

console.log(sum(5))