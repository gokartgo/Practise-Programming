function multiply(a, b, level) {
  if(a === 0 || b === 0) {
    return 0
  }
  if(level === b) {
    return a
  }
  return a + multiply(a, b, level + 1)
}

console.log(multiply(12, 7, 1))