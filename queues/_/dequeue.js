const { _table } = require("../..");
const { Queue } = require("./simple");

class Dequeue{

    front;
    rear;
    size;
    data
    constructor(init = {size: 5, data: []}){
        const {size, data} = init;
        this.size = size;
        this.front = -1;
        this.rear = -1;
        this.data = [];
        if(this.data.length){
            this.front = 0;
            this.rear = this.data.length - 1
        }
    }

    enqueueFront(value){
        if(this.isFull()) throw new Error('Queue is full');
        if (this.rear == -1) this.rear = this.size - 1;
        if (this.front == -1 || this.front == 0) this.front = this.size;
        this.data[--this.front] = value;
        _table(this);
        return this;
    }

    enqueueRear(value){
        if(this.isFull()) throw new Error('Queue is full rear**');
        if (this.front == -1) this.front = 0;
        if (this.rear == this.size - 1) this.rear = -1;
        this.data[++this.rear] = value;
        _table(this);
        return this;
    }

    dequeueFront(){
        if(this.isEmpty()) throw new Error('The queue is empty');

        const value = this.data[this.front];
        if(this.front == this.rear){
            this.front = -1;
            this.rear = -1;
        }else{
            this.front = ++this.front % this.size;
        }
        _table(this);
        return value;
        
    }
    
    dequeueRear(){
        if(this.isEmpty()) throw new Error('The queue is empty');
        const value = this.data[this.rear];
        if(this.front == this.rear){
            this.front = -1;
            this.rear = -1;
        }else{
            if(this.rear == 0){
                this.rear = this.size -1
            }else{
                --this.rear;
            }
        }
        
        _table(this);
        return value;
    }

    isFull(){
        return (
            (this.front == 0 && this.rear == this.size - 1) || 
            (this.rear == this.front - 1)
        )
    }

    isEmpty(){
        return this.front == -1;
    }
}

module.exports = {
    Dequeue
}