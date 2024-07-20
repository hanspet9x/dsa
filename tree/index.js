const { _log } = require("..");
const { Heap, HeapNode } = require("./_/heap");
const { Tree } = require("./_/tree");



const heap = () => {
    const heap = new Heap();

    [2,7,2,8,3,5,9].forEach(e => heap.add(e))
    _log(heap);
    heap.sort();
    _log('Sorted', heap);
}
const heapNode = () => {
    const heap = new Heap();
    [[2, 3], [7, 2], [2, 1], [8, 2], [3, 1], [5, 3], [9, 2]].forEach(e => {
        const n = new HeapNode(e[0], e[1]);
        heap.add(n)
    })
    _log(heap);
}

const buildTree = () => {
    const tree = new Tree();
    tree.buildComplete([2,7,2,8,3,5,9]);
    _log('Tree', JSON.stringify(tree, null, 3));
    _log('Is complete', tree.checkComplete())
    _log('Tree size', tree.size())
}

heap()
// buildTree();