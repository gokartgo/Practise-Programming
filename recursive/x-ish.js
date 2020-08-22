function x_ish(check, letter) {
  if (check === '') {
    return true
  }
  if (letter.includes(check[0])) {
    letter = letter.replace(check[0],'')
    return x_ish(check.slice(1), letter)
  } else {
    return false
  }
}

console.log(x_ish('asdffhello world', 'fhello world'))