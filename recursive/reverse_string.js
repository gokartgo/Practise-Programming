const string = 'a b c'
let answer = ''
function reverse_string(string) {
  if(string === '') {
    return ''
  } else {
    return reverse_string(string.substring(1)) + string[0]
  }
}
console.log(reverse_string(string))