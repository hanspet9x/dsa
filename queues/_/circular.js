// queue: FIFO

const { Queue } = require("./simple");
const { _log } = require("../..");

class CircularQueue extends Queue{

    constructor(init){
        super(init);
    }

    enqueue(value){
        // check if queue is full
        if (this.isFull()) throw new Error('Queue is full; enqueue failed');
        if(this.data.length == 0) this.frontPointer++;
        this.rearPointer++;
        this.rearPointer %= this.size
        this.data[this.rearPointer % this.size] = value;
        return this
    }

    dequeue(){
        if(this.isEmpty()) throw new Error('Queue is empty');
        // front index is reduced
        const val = this.data[this.frontPointer % this.size];
        this.data[this.frontPointer % this.size] = null
        this.frontPointer++;
        return val;
    }

    isFull(){
        return this.frontPointer === 0 && this.rearPointer+1 === this.size || (this.rearPointer + 1) % this.size == this.frontPointer;
    }

    isEmpty(){
        return this.rearPointer == this.frontPointer == -1 || (this.frontPointer - 1) % this.size === this.rearPointer && this.data[this.rearPointer] ==null
    }
}

module.exports = {
    CircularQueue
}