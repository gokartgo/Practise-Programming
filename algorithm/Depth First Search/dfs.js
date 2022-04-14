class Node {
  constructor(edge, next) {
    this.edge = edge
    this.next = next
  }
}

class Linklist {
  constructor(edge) {
    this.head = new Node(edge, null)
    this.visited = false
  } 

  add = (edge) => {
    const node = new Node(edge, null)
    let tail = this.head
    while(tail.next != null) {
      tail = tail.next
    }
    tail.next = node
  }
}

const graph = []

const createGraph = (nodes) => {
  for(let i = 0; i < nodes.length; i++) {
    if(!graph[nodes[i].vector]) {
      graph[nodes[i].vector] = new Linklist(nodes[i].edge)
    } else {
      graph[nodes[i].vector].add(nodes[i].edge)
    }
  }
}

createGraph([
  { vector: 1, edge: 4 },
  { vector: 1, edge: 2 },
  { vector: 4, edge: 3 },
  { vector: 3, edge: 10 },
  { vector: 3, edge: 9 },
  { vector: 3, edge: 2 },
  { vector: 2, edge: 8 },
  { vector: 2, edge: 7 },
  { vector: 2, edge: 5 },
  { vector: 8, edge: 7 },
  { vector: 8, edge: 5 }, 
  { vector: 7, edge: 5 },
  { vector: 7, edge: 8 },
])

const stack = []
const dfs = (start_index) => {
  let index 
  graph[start_index].visited = true
  index = graph[start_index].head.edge
  stack.push(start_index)
  while(stack.length != 0) { 
    while(graph[index]) {
      let next = graph[index].head.edge
      if (next) {
        stack.push(index)
      }
      index = next
    }
    index = stack.pop()
    graph[index].head = graph[index].head.next
    if(graph[index].head == null) {
      graph[index] = null
    } 
  }
}
dfs(1)