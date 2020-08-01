function multiply(base,res,res_size) {
  let carry = 0

  for(let i=0; i<res_size; i++) {
    let temp = res[i]
    res[i] = (base * res[i] + carry) % 10
    carry = parseInt(base * temp / 10)
  }

  while(carry != 0) {
    res[res_size++] = carry % 10
    carry = parseInt(carry / 10)
  }

  return res_size
}

function power(base, exponent) {
  if(exponent === 0) {
    console.log(1)
    return
  }

  let res = [], res_size = 0, temp = base, answer = ''

  while(temp != 0) {
    res[res_size++] = temp%10
    temp = parseInt(temp/10)
  }

  for(let i=2;i<=exponent;i++) {
    res_size = multiply(base,res,res_size)
  }

  for(let i=res_size - 1; i>=0; i--) {
    answer += res[i]
  }

  console.log(answer)
}

power(2,100)

