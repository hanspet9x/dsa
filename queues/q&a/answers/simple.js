//EASY: 1.
function implementQueue() {
    const data = [];
    let front = -1;
    let rear = -1;
    return {
        enqueue(value) {
            if (front === -1) {
                front = 0;
            }
            data[++rear] = value;
            return this;
        },
        dequeue() {
            if (this.isEmpty() == 'No') {
                //can also pop
                const value = data[front];
                if (rear === front) {
                    front = -1;
                    rear = -1;
                } else {
                    front++;
                }
                return value;
            }
        },
        isEmpty() {
            return front === -1 && rear === -1 ? 'Yes' : 'No';
        }
    }
}

const queue = implementQueue();
queue.enqueue(10).enqueue(20)
console.assert(queue.dequeue() == 10, 'Error: queue.dequeue() == 10')
console.assert(queue.isEmpty() == 'No', 'Error: queue.isEmpty() == No')
console.assert(queue.dequeue() == 20, 'Error: queue.dequeue() == 10')

// EASY: 2

function minimumInQueue(queue = []) {
    let min = queue[0];
    for (let i = 1; i < queue.length; i++) {
        min = Math.min(min, queue[i])
    }
    return min;
}

console.assert(minimumInQueue([3, 1, 4, 1, 5]) == 1, 'Error: queue.assert(minimumInQueue')

// Normal: 1
function reverseQueue(queue = []) {
    const reversed = [];
    while (queue.length) {
        reversed.push(queue.pop())
    }
    return reversed;
}
console.assert(reverseQueue([1, 2, 3, 4]).toString() == [4, 3, 2, 1].toString(), 'Error: reverseQueue')

// Normal: 2
function identicalQueues(queue = [], queue2 = []) {
    if (queue.length !== queue2.length) return 'No';
    return queue.toString() == queue2.toString() ? 'Yes' : 'No';
}
console.assert(identicalQueues([1, 2, 3, 4], [1, 2, 3, 4]) == 'Yes', 'Error: identicalQueues([1,2,3,4], [1,2,3,4]) ')
console.assert(identicalQueues([1, 2, 3], [1, 2, 3, 4]) == 'No', 'Error: identicalQueues([1,2,3], [1,2,3,4])')
console.assert(identicalQueues([1, 2, 3, 5], [1, 2, 3, 4]) == 'No', 'Error: identicalQueues([1,2,3,5], [1,2,3,4])')


function sortQueue(queue = []) {
    const stack = [];

    const heapify = (i, len) =>{
        let xs = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        if (queue[l] && l <= len && queue[l] < queue[xs]) xs = l;
        if (queue[r] && r <= len && queue[r] < queue[xs]) xs = r;

        if (i !== xs) {
            [queue[i], queue[xs]] = [queue[xs], queue[i]];
            heapify(xs, len);
        }
    }
    for (let i = Math.floor((queue.length / 2) - 1); i >= 0; i--) {
        heapify(i, queue.length - 1);
    }
    // console.log('queue', queue);

    //sort
    let tail = queue.length-1;
    do {
        stack.push(queue[0]);
        [queue[0], queue[tail]] = [queue[tail], queue[0]];
        --tail;
        //heapify
        heapify(0, tail);
        // console.log(queue)
    } while (tail >= 0);

    return stack;

}

console.assert(sortQueue([3,1,4,1,5]).toString() == [1, 1, 3, 4, 5].toString(), 'Error: sortQueue([3,1,4,1,5])')