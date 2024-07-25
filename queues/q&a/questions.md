Sure! Here are problem-solving questions formatted like those on platforms such as HackerRank, focusing on each type of queue:

### Simple Queue

#### Easy

1. **Implement a Queue**

   Implement a simple queue using an array. The queue should support the following operations:

   - `enqueue`: Add an element to the end of the queue.
   - `dequeue`: Remove and return the element at the front of the queue.
   - `isEmpty`: Check if the queue is empty.

   **Input**: 
   - First line contains an integer `n`, the number of operations.
   - Next `n` lines contain an operation followed by an optional integer (in case of `enqueue`).

   **Output**: 
   - For each `dequeue` operation, output the dequeued element.
   - For `isEmpty` operation, output "Yes" or "No".

   **Example**:
   ```
   Input:
   5
   enqueue 10
   enqueue 20
   dequeue
   isEmpty
   dequeue

   Output:
   10
   No
   20
   ```

2. **Minimum in Queue**

   Given a queue of integers, find the minimum element without removing any elements from the queue.

   **Input**: 
   - First line contains an integer `n`, the number of elements in the queue.
   - Next line contains `n` space-separated integers.

   **Output**: 
   - Print the minimum element in the queue.

   **Example**:
   ```
   Input:
   5
   3 1 4 1 5

   Output:
   1
   ```

#### Normal

1. **Reverse Queue Using Stack**

   Write a function to reverse the elements of a queue using a stack. You are only allowed to use stack operations (push and pop).

   **Input**: 
   - First line contains an integer `n`, the number of elements in the queue.
   - Next line contains `n` space-separated integers.

   **Output**: 
   - Print the reversed queue.

   **Example**:
   ```
   Input:
   4
   1 2 3 4

   Output:
   4 3 2 1
   ```

2. **Identical Queues**

   Check if two queues are identical. Two queues are identical if they contain the same elements in the same order.

   **Input**: 
   - First line contains an integer `n`, the number of elements in the first queue.
   - Second line contains `n` space-separated integers for the first queue.
   - Third line contains an integer `m`, the number of elements in the second queue.
   - Fourth line contains `m` space-separated integers for the second queue.

   **Output**: 
   - Print "Yes" if the queues are identical, otherwise print "No".

   **Example**:
   ```
   Input:
   3
   1 2 3
   3
   1 2 3

   Output:
   Yes
   ```

#### Hard

1. **Queue Using Two Stacks**

   Implement a queue using two stacks. The queue should support the following operations:

   - `enqueue`: Add an element to the end of the queue.
   - `dequeue`: Remove and return the element at the front of the queue.

   **Input**: 
   - First line contains an integer `n`, the number of operations.
   - Next `n` lines contain an operation followed by an optional integer (in case of `enqueue`).

   **Output**: 
   - For each `dequeue` operation, output the dequeued element.

   **Example**:
   ```
   Input:
   4
   enqueue 1
   enqueue 2
   dequeue
   dequeue

   Output:
   1
   2
   ```

2. **Sort Queue Using Stacks**

   Given a queue of integers, sort the queue in ascending order using only additional stacks.

   **Input**: 
   - First line contains an integer `n`, the number of elements in the queue.
   - Next line contains `n` space-separated integers.

   **Output**: 
   - Print the sorted queue.

   **Example**:
   ```
   Input:
   5
   3 1 4 1 5

   Output:
   1 1 3 4 5
   ```

### Circular Queue

#### Easy

1. **Circular Queue Operations**

   Implement a circular queue using an array. The queue should support the following operations:

   - `enqueue`: Add an element to the end of the queue.
   - `dequeue`: Remove and return the element at the front of the queue.
   - `isFull`: Check if the queue is full.
   - `isEmpty`: Check if the queue is empty.

   **Input**: 
   - First line contains an integer `n`, the number of operations.
   - Next `n` lines contain an operation followed by an optional integer (in case of `enqueue`).

   **Output**: 
   - For each `dequeue` operation, output the dequeued element.
   - For `isFull` and `isEmpty` operations, output "Yes" or "No".

   **Example**:
   ```
   Input:
   5
   enqueue 10
   enqueue 20
   dequeue
   isFull
   isEmpty

   Output:
   10
   No
   No
   ```

2. **Display Circular Queue**

   Given a circular queue, display all its elements.

   **Input**: 
   - First line contains an integer `n`, the number of elements in the queue.
   - Next line contains `n` space-separated integers.

   **Output**: 
   - Print the elements of the queue.

   **Example**:
   ```
   Input:
   4
   1 2 3 4

   Output:
   1 2 3 4
   ```

#### Normal

1. **Rotate Circular Queue**

   Given a circular queue, rotate it `k` times.

   **Input**: 
   - First line contains two integers `n` and `k`, the number of elements in the queue and the number of rotations.
   - Next line contains `n` space-separated integers.

   **Output**: 
   - Print the rotated queue.

   **Example**:
   ```
   Input:
   4 2
   1 2 3 4

   Output:
   3 4 1 2
   ```

2. **Merge Circular Queues**

   Merge two circular queues into one.

   **Input**: 
   - First line contains an integer `n`, the number of elements in the first queue.
   - Second line contains `n` space-separated integers for the first queue.
   - Third line contains an integer `m`, the number of elements in the second queue.
   - Fourth line contains `m` space-separated integers for the second queue.

   **Output**: 
   - Print the merged queue.

   **Example**:
   ```
   Input:
   3
   1 2 3
   2
   4 5

   Output:
   1 2 3 4 5
   ```

#### Hard

1. **Max Subarray Sum in Circular Queue**

   Find the maximum sum of a contiguous subarray in a circular queue.

   **Input**: 
   - First line contains an integer `n`, the number of elements in the queue.
   - Next line contains `n` space-separated integers.

   **Output**: 
   - Print the maximum subarray sum.

   **Example**:
   ```
   Input:
   5
   1 -2 3 4 -5

   Output:
   7
   ```

2. **Circular Queue with Linked List**

   Implement a circular queue using a linked list. The queue should support the following operations:

   - `enqueue`: Add an element to the end of the queue.
   - `dequeue`: Remove and return the element at the front of the queue.
   - `isEmpty`: Check if the queue is empty.

   **Input**: 
   - First line contains an integer `n`, the number of operations.
   - Next `n` lines contain an operation followed by an optional integer (in case of `enqueue`).

   **Output**: 
   - For each `dequeue` operation, output the dequeued element.

   **Example**:
   ```
   Input:
   4
   enqueue 1
   enqueue 2
   dequeue
   dequeue

   Output:
   1
   2
   ```

### Priority Queue

#### Easy

1. **Priority Queue Operations**

   Implement a priority queue using a list of tuples, where each tuple contains an element and its priority. The queue should support the following operations:

   - `enqueue`: Add an element with a priority to the queue.
   - `dequeue`: Remove and return the element with the highest priority.
   - `isEmpty`: Check if the queue is empty.

   **Input**: 
   - First line contains an integer `n`, the number of operations.
   - Next `n` lines contain an operation followed by an optional integer and priority (in case of `enqueue`).

   **Output**: 
   - For each `dequeue` operation, output the dequeued element.

   **Example**:
   ```
   Input:
   5
   enqueue 10 1
   enqueue 20 2
   dequeue
   enqueue 30 