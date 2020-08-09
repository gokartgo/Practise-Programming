function power(base, exponent, level) {
  if(exponent === 0) {
    return 1
  }
  if(level === exponent) {
    return base
  }
  return base * power(base,exponent,level+1)
}

console.log(power(-2,5,1))