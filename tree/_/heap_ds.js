const { Node1 } = require("..");
const { _log } = require("../..");

const array = []

// convert to complete binary
const toBinary = (array, i = 0) => {
    if (i >= array.length) return null;

    const node = new Node1(array[i]);

    node.left = toBinary(array, 2 * i + 1);
    node.right = toBinary(array, 2 * i + 2);
    return node;
}

const heapifyUpWhile = (arr, fnlIndex) => {
    console.log('currentIndex', fnlIndex)
    while (fnlIndex >= 0) {
        // const 
        const leftIndex = 2 * fnlIndex + 1;
        const rightIndex = 2 * fnlIndex + 2;
        console.log('index - value', leftIndex, rightIndex, arr[leftIndex], arr[rightIndex], arr[fnlIndex])
        let largestIndex = fnlIndex;

        if (arr[leftIndex] && arr[leftIndex] > arr[largestIndex]) {
            largestIndex = leftIndex;
        }
        if (arr[rightIndex] && arr[rightIndex] > arr[largestIndex]) {
            largestIndex = rightIndex;
        }
        console.log('largest index', largestIndex, fnlIndex)
        if (fnlIndex !== largestIndex) {
            [arr[largestIndex], arr[fnlIndex]] = [arr[fnlIndex], arr[largestIndex]];
        }
        //get next parent
        fnlIndex = Math.floor((fnlIndex - 1) / 2)

    }
    // return arr;
}
const heapifyUp = (arr, fnlIndex, proceed = false) => {
    if (fnlIndex < 0) {
        return;
    }
    console.log('currentIndex', fnlIndex)
    // const 
    const leftIndex = 2 * fnlIndex + 1;
    const rightIndex = 2 * fnlIndex + 2;
    console.log('index - value', leftIndex, rightIndex, arr[leftIndex], arr[rightIndex], arr[fnlIndex])
    let largestIndex = fnlIndex;

    if (arr[leftIndex] && arr[leftIndex] > arr[largestIndex]) {
        largestIndex = leftIndex;
    }
    if (arr[rightIndex] && arr[rightIndex] > arr[largestIndex]) {
        largestIndex = rightIndex;
    }
    console.log('largest index', largestIndex, fnlIndex)
    if (fnlIndex !== largestIndex) {
        [arr[largestIndex], arr[fnlIndex]] = [arr[fnlIndex], arr[largestIndex]];
        if (fnlIndex == 0) {
            proceed = true;

        }
    }
    //get next parent
    fnlIndex = Math.floor((fnlIndex - 1) / 2)

    return heapifyUp(arr, fnlIndex)
}


const heapifyDown = (arr, index = 0) => {

    while (index <= arr.length - 1) {
        console.log(arr);
        let lowestIndex = index;
        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;

        if (arr[leftIndex] && arr[leftIndex] < arr[lowestIndex]) {
            lowestIndex = leftIndex;
        }

        if (arr[rightIndex] && arr[rightIndex] < arr[lowestIndex]) {
            lowestIndex = rightIndex;
        }

        if (lowestIndex !== index) {
            [arr[lowestIndex], arr[index]] = [arr[index], arr[lowestIndex]]
            index = lowestIndex;
            continue;
        }
        break


    }
}

const insert = (value) => {
    array.push(value);
    if (array.length > 1) {
        const start = Math.floor((array.length - 1 - 1) / 2)
        // console.log(value, start)
        heapifyUp(array, start)
    }
}

const heapUpSort = (arr = []) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!arr.length) throw new Error('Array not valid');
        if (i < 0) {
            _log('completed', i);
        }

        //swap the first with last
        [arr[0], arr[i]] = [arr[i], arr[0]]
        _log('swapped', arr);
        //heapify
        // _log('lastNodeParent', lastNodeParent);

        //heapify
        let startIndex = 0;
        while (startIndex <= i - 1) {
            //get the childeren
            const leftIndex = 2 * startIndex + 1;
            const rightIndex = 2 * startIndex + 2;
            let largestIndex = startIndex;

            if ( arr[leftIndex] && leftIndex < i  && arr[leftIndex] > arr[largestIndex]) {
                largestIndex = leftIndex;
            }
            if (arr[rightIndex] && rightIndex < i && arr[rightIndex] > arr[largestIndex]) {
                largestIndex = rightIndex;
            }
            if (largestIndex != startIndex) {
                [arr[largestIndex], arr[startIndex]] = [arr[startIndex], arr[largestIndex]];
                startIndex = largestIndex;
                continue;
            }
            break;
        }
    }
}

const heapUpMaxDown = (arr) => {
    let startIndex = 0;
    while (startIndex <= arr.length - 1) {
        //get the childeren
        const leftIndex = 2 * startIndex + 1;
        const rightIndex = 2 * startIndex + 2;
        let largestIndex = startIndex;

        if (arr[leftIndex] && arr[leftIndex] > arr[largestIndex]) {
            largestIndex = leftIndex;
        }
        if (arr[rightIndex] && arr[rightIndex] > arr[largestIndex]) {
            largestIndex = rightIndex;
        }
        if (largestIndex != startIndex) {
            [arr[largestIndex], arr[startIndex]] = [arr[startIndex], arr[largestIndex]];
            startIndex = largestIndex;
            continue;
        }
        break;
    }
}
// [3, 9, 2, 1, 4, 5].forEach(i => insert(i));
// console.log('Heapify', array);

/**
 *      9
 *   4    5
 * 1  3  2
 */

/**
 *      2
 *   4    5
 * 1  3  
 */

const complete = [3, 9, 2, 1, 4, 5];
for (let i = Math.floor((complete.length - 1) / 2); i >= 0; i--) {
    heapifyUp(complete, Math.floor((complete.length - 1) / 2))
}
console.log('Heapify complete', complete);
heapUpSort(complete);
console.log('heapUpSort complete', complete);

// heapify already filled array
// const comp = [ 2, 5, 3, 1, 4 ]
// heapUpMaxDown(comp)
// console.log('heapUpMaxDown complete', comp);
// const min = [9, 4, 7, 5, 6, 8]

// heapifyDown(min, 0)
// console.log(min)


