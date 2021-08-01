function modMultiply(a,b,m) {
  let first, second

  if(a > b) {
    first = a
    second = b
  } else {
    first = b
    second = a
  }
  first = first % m
  let res = 0
  while(second > 0) {
    if(second & 1 > 0) { // second % 2 === 1
      res = (res + first) % m
    }

    first = first * 2 % m
    second = second >> 1 // second = parseInt(second / 2)
  }
  console.log(res)
  return res
}

modMultiply(500000004, 500000004 , 99)