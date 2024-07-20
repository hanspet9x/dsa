const { _log } = require("../..");

class Heap {
    data;
    max;
    isNode;

    constructor(option = { max: true, isNode: false }) {
        const { max, isNode } = option;
        this.data = [];
        this.max = max;
        this.isNode = isNode;
    }

    add(value, priority = 1) {
        const val = this.isNode ? new HeapNode(value, priority) : value;
        this.data.push(val)
        this.heapify();
        this.log()
    }

    minMaxSwap(parentIndex, childIndex) {
        const parentValue = this.data[parentIndex];
        const childValue = this.data[childIndex];
        if (parentValue instanceof HeapNode && childValue instanceof HeapNode) {
            return parentValue.priority > childValue.priority
        }
        return this.max ? parentValue < childValue : parentValue > childValue

    }

    heapify() {
        let childIndex = this.data.length - 1;
        while (childIndex > 0) {
            //get parent i - 1 / 2
            const parentIndex = Math.floor((childIndex - 1) / 2);
            if (this.minMaxSwap(parentIndex, childIndex)) {
                [this.data[parentIndex], this.data[childIndex]] = [this.data[childIndex], this.data[parentIndex]]
            }
            --childIndex;
        }
    }

    sort() {
        for (let i = this.data.length - 1; i > 0; i--) {
            //swap with first child
            [this.data[0], this.data[i]] = [this.data[i], this.data[0]]
            // push down
            let pi = 0;
            let largest = 0;
            do {
                const left = 2 * pi + 1;
                const right = 2 * pi + 2;
              
                //
                if (left < i && this.data[left] && this.data[left] > this.data[largest]) {
                    largest = left;
                }

                if (right < i && this.data[right] && this.data[right] > this.data[largest]) {
                    largest = right;
                }
                if (largest !== pi) {
                    [this.data[pi], this.data[largest]] = [this.data[largest], this.data[pi]]
                    _log('soriting', this.data)
                    pi = largest;
                    continue
                }
                break
            }while (largest < i);
        }
    }

    log() {
        _log(this.data);

    }
}

class HeapNode {
    value;
    priority;

    constructor(value = 0, priority = 1) {
        this.value = value;
        this.priority = priority;
    }
}

module.exports = {
    Heap,
    HeapNode
}