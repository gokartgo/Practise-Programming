const SIZE = 1
let array = []

function randomRange(min,max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function findDuplicate(array) {
  let tortoise = array[0]
  let hare = array[0]
  let carry = array[0]
  let index = 0
  while((tortoise !== hare || index === 0) && index !== array.length) {
    tortoise = array[tortoise]
    hare = array[array[hare]]
    index++
  }
  while(carry !== hare) {
    carry = array[carry]
    hare = array[hare]
  }
  console.log(carry)
}

for(let i = 0;i<SIZE;i++) {
  array[i] = i+1
}

for(let i = 0;i<SIZE;i++) {
  let index1 = randomRange(1,SIZE)
  let index2 = randomRange(1,SIZE)
  let temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

array[SIZE] = randomRange(1,SIZE)

console.log(array)

findDuplicate(array)
