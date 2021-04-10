const arr = []

const quicksort = (arr, start, end) => {
  if(start < end) {
    let l = start, h = end, pivot = arr[start]

    while(l < h) {
      while(pivot >= arr[l]) {
        l++
      }

      while(pivot < arr[h]) {
        h--
      }

      if(l < h) {
        let temp = arr[l]
        arr[l] = arr[h]
        arr[h] = temp
      }
    }
    arr[start] = arr[h]
    arr[h] = pivot

    quicksort(arr, start, h - 1)
    quicksort(arr, l, end)
  }
}

const max = 100, min = 5

for(let i=0;i<100;i++) {
  arr[i] = Math.floor(Math.random() * (max - min + 1) + min)
}

quicksort(arr, 0, arr.length - 1)

console.log(arr)