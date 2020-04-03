sameBTree = (nodeA,nodeB) => {
    if(nodeA === undefined && nodeB === undefined) {
        return true
    }
    if(nodeA === undefined || nodeB === undefined) {
        return false
    }
    if((nodeA.value === nodeB.value) && sameBTree(nodeA.left,nodeB.left) && sameBTree(nodeA.right,nodeB.right)) {
        return true
    }
    return false
}

const nodeA = {
    left: {
        left: undefined,
        right: undefined,
        value: 6,
    },
    right: {
        left: undefined,
        right: undefined,
        value: 5,
    },
    value: 7,
}

const nodeB = {
    left: {
        left: undefined,
        right: undefined,
        value: 6,
    },
    right: {
        left: undefined,
        right: undefined,
        value: 5,
    },
    value: 7,
}

console.log(sameBTree(nodeA,nodeB))