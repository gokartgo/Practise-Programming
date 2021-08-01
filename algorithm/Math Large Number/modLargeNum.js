let a = '123456789001'

function mod(a, b) {
  let answer = 0
  for(let i = 0; i<a.length;i++) {
    answer = ( answer * 10 % b + parseInt(a[i]) % b ) % b
  }
  console.log(answer)
}

mod(a, 123)