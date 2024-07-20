const { _log } = require("..");
const { Heap } = require("../tree/_/heap");
const { CircularQueue } = require("./_/circular");
const { Dequeue } = require("./_/dequeue");
const { Queue } = require("./_/simple");

const array = [3, 8, 3, 7, 9]

function simple() {
    const queue = new Queue();
    array.forEach(e => {
        queue.enqueue(e)
    })
    _log('Queue Data', queue.data, queue.rearPointer, queue.frontPointer)
    _log('Peek', queue.peek())
    _log('Deq', queue.dequeue())
    _log('Deq', queue.dequeue())
    _log('Deq', queue.dequeue())
    _log('Deq', queue.dequeue())
    _log('Deq', queue.dequeue())
    _log('Peek', queue.peek())
}

function circular() {
    const queue = new CircularQueue();
    array.forEach(e => queue.enqueue(e))

    queue.dequeue();
    queue.enqueue(6);
    queue.dequeue();
    queue.enqueue(4);
    _log('Circular Dq', queue)
}
function dequeue() {
    const queue = new Dequeue();
    array.forEach(e => queue.enqueueRear(e))
    array.forEach(e => queue.dequeueRear())
    _log('Dequeue Dq', queue)
}

function priorityQueue() {
    const heap = new Heap();
    array.forEach(e => heap.add(e, Math.floor(Math.random()*10)))

}

// circular();
dequeue();

