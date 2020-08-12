function gcp(a, b) {
  if(a % b === 0) {
    return b
  } else {
    return gcp(b, a % b)
  }
}

console.log(gcp(1220, 513))
