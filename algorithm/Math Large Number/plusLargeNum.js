const a = '1234'
const b = '999'

function plus(a,b) {
  let array_a = a.split('').reverse()
  let array_b = b.split('').reverse()
  let res = []
  let answer = ''
  let carry = 0
  const length = array_a.length >= array_b.length ? array_a.length : array_b.length

  for(let i = 0;i<length;i++) {
    array_a[i] = !array_a[i] ? 0 : array_a[i]
    array_b[i] = !array_b[i] ? 0 : array_b[i]
    res[i] = (parseInt(array_a[i]) + parseInt(array_b[i]) + carry) % 10
    carry = parseInt((parseInt(array_a[i]) + parseInt(array_b[i])) / 10)
  }

  if(carry != 0) {
    res[length] = carry
  }

  for(let i=res.length - 1;i>=0;i--) {
    answer += res[i]
  }
  console.log(answer)
}

plus(a,b)