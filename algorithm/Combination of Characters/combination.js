const string = '123'
const count = []
const answer = []

function combination(character, index, output, index_i) {
  for(let i = 0;i<count.length;i++) {
    if(count[i] === 1) {
      break
    }
    if((count[i] === 0 && i === count.length - 1)) {
      return
    }
  }

  for(let i=index_i;i<string.length;i++) {
    if(count[i] === 0) {
      continue
    }
    count[i]--
    output[index] = string[i]
    console.log(output, i,index)
    let clone_output = []
    for(let j=0;j<output.length;j++) {
      clone_output[j] = output[j]
    }
    combination(string[i], index + 1, clone_output, i)
    count[i]++
  }
}

for(let i = 0;i < string.length;i++) {
  count[i] = 1
}

combination(string[0], 0, [], 0)