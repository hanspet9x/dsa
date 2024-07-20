

function reverse(letter){
    if(!letter) return undefined;
    let value = ''
    for (let i = letter.length-1; i >= 0; i--) {
        value += letter[i]
    }
    return value;
}

console.log(reverse('adeoba'))