function multiply(first,second) {
  let answer = [], first_i = 0, second_i = 0
  for(let i = second.length - 1; i >= 0; i--) {
    let carry = 0
    second_i = 0

    for(let j = first.length - 1; j >= 0; j--) {
      let value = parseInt(first[j]) * parseInt(second[i]) + carry

      answer[first_i + second_i] = answer[first_i + second_i] || 0

      value += answer[first_i + second_i]

      carry = parseInt( value / 10 )

      answer[first_i + second_i] = value % 10

      second_i++
    }

    if(carry > 0) {
      answer[first_i + second_i] = carry
    }

    first_i++
  }

  return answer
}

console.log(multiply("50000004", "50000004"))