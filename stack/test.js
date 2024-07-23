
const { _perf } = require("..");

function reverse1(str){
    const stack = [];
    for (const alp of str) {
        stack.push(alp);
    }

    let strNew = '';
    for (let i = stack.length- 1; i >= 0; i--) {
        strNew += stack[i];
    }
    return strNew;
}

function reverse2(str){
    //2
    let strNew = '';
    for (const alp of str) {
        strNew = alp + strNew;
    }
    return strNew;
}

// console.assert(reverse1('Ade') === 'edA')
// console.assert(reverse2('Ade') === 'edA')

// _perf(reverse1.bind(null, 'Ade'), '1')
// _perf(reverse2.bind(null, 'Ade'), '2')
// assert(reverse('Ade'), 'edA');

function validBrackets(str=''){
    if(str.length < 2) return false;
    const stack = [];

    const dic = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

    const isOpen = (brac) =>  brac == '(' || brac == '[' || brac == '{';

    for (const alp of str) {
        if(isOpen(alp)){
            stack.push(alp);
        }else{
            if (!stack.length) return false;
            const open = stack.pop();
            if (open !== dic[alp]) return false;
        }
    }
    return stack.length == 0;
}

// console.assert(validBrackets('([]{)}') == false)
// console.assert(validBrackets('') == false)
// console.assert(validBrackets('((') == false)
// console.assert(validBrackets('(()') == false)
// console.assert(validBrackets('[]') == true)
// console.assert(validBrackets('[{()}]') == true)

function reversePoliceNotation(arm = []){

    const isOperator = (x) => ['+', '-', '/', '*'].includes(x);
    const calcs = (operator, operand, total) => {
        if (total === undefined) return operand;
        switch (operator) {
            case '+':
                return total + operand
            case '-':
                return total - operand
            case '*':
                return total * operand
            case '/':
                return total / operand
        }
    }
    const stack= []
    let exp;
    for (const i of arm) {
        if(isOperator(i)){
            //pop stack and evaluate
            
            for (let j = stack.length - 1; j >= 0; j--) {
                const element = stack.pop();
                exp = calcs(i, element, exp)
            }
        }else{
            stack.push(Number(i));
        }
    }
    return exp;
}
function reversePoliceNotation2(arm = []){

    const isOperator = (x) => ['+', '-', '/', '*'].includes(x);
    const calcs = (operator, operand, total) => {
        if (total === undefined) return operand;
        switch (operator) {
            case '+':
                return total + operand
            case '-':
                return total - operand
            case '*':
                return total * operand
            case '/':
                return total / operand
        }
    }
    const stack= []
    
    for (const i of arm) {
        if(isOperator(i)){
            //pop stack and evaluate
            let exp;
            for (let j = stack.length - 1; j >= 0; j--) {
                const element = stack.pop();
                exp = calcs(i, element, exp)
            }
            stack.push(exp);
        }else{
            stack.push(Number(i));
        }
    }
    return stack.pop();
}

// console.assert(reversePoliceNotation(["2", "1", "+", "3", "*"]) == 9, 'ReversePolicyNotation Failed')
// console.assert(reversePoliceNotation2(["2", "1", "+", "3", "*"]) == 9, 'ReversePolicyNotation2 Failed')

// _perf(reversePoliceNotation.bind(null, ["2", "1", "+", "3", "*"]), 'reversePoliceNotation')
// _perf(reversePoliceNotation2.bind(null, ["2", "1", "+", "3", "*"]), 'reversePoliceNotation2')


function largestRect(rects = [], width = 1){
    const stack = [rects[0] * width];
    
    for (let i = 1; i < rects.length; i++) {
        const rect = rects[i] * 1;
        if (rect > stack[0]){
            stack.pop();
            stack.push(rect)
        }
    }
    return stack.pop();
}


function largestRect2(rects = []){
    const stack = [[0, rects[0]]];
    let max = 0;

    for (let i = 1; i < rects.length; i++) {
        const h = rects[i];
        let index = i;
        if (h < rects[i-1]){
            let pos = 1;
            while(i - pos >= 0 && rects[i-pos] > h){
                const area = rects[i-pos] * pos;
                max = Math.max(area, max);
                stack.pop();
                pos++;
            }
            index -=pos-1;
        }
        stack.push([index, h]); 
    }

    //go back;
    stack.forEach(([i, h]) => {
        const w = rects.length - i;
        max =  Math.max(w*h, max);
    });
   
    return max;
    
}
console.log(largestRect2([2,4,5,1,7,3]))
// console.assert(largestRect([2,4,5,1,7,3],  1) == 7, 'LargestRect Error')