const arr = []

const quicksort = (arr, start, end) => {
  if(start >= end) {
    return
  }
  let i = start, j = end
  pivot = arr[start]
  while(i < j) {
    while(pivot >= arr[i]  && i < j) {
      i++
    }
    while(pivot < arr[j]  && i <= j) {
      j--
    }
    if(i < j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
      j--
    }
  }
  let temp = pivot
  arr[start] = arr[j]
  arr[j] = temp
  quicksort(arr, start, j-1)
  quicksort(arr, j+1, end)
}

const max = 100, min = 5

for(let i=0;i<100;i++) {
  arr[i] = Math.floor(Math.random() * (max - min + 1) + min)
}

quicksort(arr, 0, arr.length - 1)

console.log(arr)