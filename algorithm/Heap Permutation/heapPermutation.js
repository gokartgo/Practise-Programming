const swap = (array, source, des) => {
  const temp = array[source]
  array[source] = array[des]
  array[des] = temp
}

const heap_permutation = (array, k) => {
  if(k === 1) {
    console.log(array)
    return
  }

  for(let i = 0; i < k; i++) {
    heap_permutation(array, k - 1)

    if(k % 2 === 0) {
      swap(array, i, k - 1)
    } else {
      swap(array, 0, k - 1)
    }
  }
}

const array = [1,2,3,4]

console.log(heap_permutation(array, array.length))