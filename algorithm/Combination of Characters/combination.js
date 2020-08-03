const string = 'ACCC'
const string_array = []
const count = []
let count_index = 0
const answer = []

function combination(index, output, index_i) {
  for(let i = 0;i<count.length;i++) {
    if(count[i] > 0) {
      break
    }
    if((count[i] === 0 && i === count.length - 1)) {
      return
    }
  }

  for(let i=index_i;i<string_array.length;i++) {
    if(count[i] === 0) {
      continue
    }
    count[i]--
    output[index] = string_array[i]
    console.log(output)
    let clone_output = []
    for(let j=0;j<output.length;j++) {
      clone_output[j] = output[j]
    }
    combination(index + 1, clone_output, i)
    count[i]++
  }
}
// format string and count value
for(let i = 0;i < string.length;i++) {
  if(string[i-1] === string[i] && i !== 0) {
    count[count_index]++
  } else if(string[i-1] !== string[i] && i !== 0) {
    count_index++
    count[count_index] = 1
    string_array[count_index] = string[i]
  } else {
    count[count_index] = 1
    string_array[count_index] = string[i]
  }
}

console.log('format ------ ',count, string_array)

combination(0, [], 0)