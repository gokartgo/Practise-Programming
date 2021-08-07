
const kmp_substring = (string, sub) => {
  let pattern = [0], pattern_index = 0, check_index = -1

  // setup pattern
  for(let i = 1; i < sub.length; i++) {
    pattern[i] = 0

    if(sub[pattern_index] === sub[i]) {
      pattern_index++
      pattern[i] = pattern_index
    } else {
      while(pattern_index > 0) {
        pattern_index = pattern[pattern_index - 1]

        if(sub[pattern_index] === sub[i]) {
          pattern[i] = pattern_index + 1
          break
        }
      }
    }
  }

  // find substring
  for(let i = 0;i<string.length;i++) {
    if(sub[check_index + 1] === string[i]) {
      check_index++
      if(check_index === sub.length - 1) {
        // have substring
        console.log(i - sub.length + 1,i)
      }
    } else {
      while(check_index >= 0) {
        check_index = pattern[check_index] - 1

        if(sub[check_index + 1] === string[i]) {
          check_index++
          break
        }
      }
    }
  }

  console.log(check_index)
}

kmp_substring("ababcababdabababd", "ababd")