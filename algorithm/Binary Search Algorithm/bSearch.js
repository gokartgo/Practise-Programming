// must sort value before use
bSearch = (arr,item) => {
    let low = 0,height = arr.length - 1
    while(low <= height) {
        console.log('*')
        let mid = parseInt((low + height) / 2)
        if(arr[mid] === item) {
            return mid
        } else if(arr[mid] > item) {
            height = mid - 1
        } else {
            low = mid + 1
        }
    }
}
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
console.log(bSearch(arr,3))