const { _log } = require("../..");

class Queue {
    data = [];
    size = 5;
    frontPointer = -1;
    rearPointer = -1;

    constructor(init = { data: [], size: 5 }) {
        const {data, size} = init;
        if(data.length > size) throw new Error("Queue can not be larger than "+ size)
        if(this.data.length > 0){
            this.frontPointer = 0;
            this.rearPointer = this.data.length -1;
        }
        this.data = data;
        this.size = size
    }

    enqueue(value) {
        if (value) {
            // check if queue is full
            if (this.isFull()) throw new Error("Queue is full");
            if(this.frontPointer === -1) this.frontPointer++;
            // add value to queue;
            this.data[++this.rearPointer] = value;
            return this;
        }
        throw new Error('Invalid value')
    }

    dequeue() {
        // check if queue is not empty
        if (this.isEmpty()) throw new Error("Queue is empty");
        // add value to queue;
        return this.data[this.frontPointer++];
    }

    isEmpty(){
        return (this.rearPointer == this.frontPointer && this.frontPointer === -1) || 
            this.frontPointer === this.size;
        
    }

    isFull(){
        return this.rearPointer + 1 == this.size;
    }

    peek(){
        if (this.isEmpty()) throw new Error("Queue is empty");
        //set pointer back to empty queue
        return this.data[this.frontPointer];
    }
}

module.exports = {
    Queue
}