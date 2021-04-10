let arr = []

const merge = (low, middle, high) => {
  let l = low, m = middle + 1, sort_arr_index = 0, sort_arr = []
  while(l <= middle || m <= high) {
    if((arr[l] <= arr[m] && l <= middle) || m > high) {
      sort_arr[sort_arr_index++] = arr[l++]
    } else if((arr[m] < arr[l] && m <= high) || l > middle) {
      sort_arr[sort_arr_index++] = arr[m++]
    }
  }
  for(let i = 0; i < sort_arr.length; i++) {
    arr[low++] = sort_arr[i]
  }
}

const mergesort = (low, high) => {
  if(low < high) {
    const mid = parseInt((low + high) / 2)
    mergesort(low, mid)
    mergesort(mid + 1, high)
    merge(low, mid, high)
  }
}

for(let i = 0;i<1000;i++) {
  arr[i] = parseInt(Math.random() * 10000) + 1
}

mergesort(0, arr.length - 1)

for(let i = 0;i<999;i++) {
  if(arr[i] > arr[i+1]) {
    console.log('wrong')
    break
  }
}