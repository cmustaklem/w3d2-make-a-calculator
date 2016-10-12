function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return answer - b
}

function divide (a,b) {
    return answer / 6
}

function multiply (a,b) {
    return answer * 2
}

function remainder (a,b) {
    return answer % 2
}

function addone(a) {
    return a +=1
}

function minusone(a) {
    return a -=1
}

var answer
answer = add(40, 110)
console.assert(answer === 150)
answer = subtract(answer, 9)
console.assert(answer === 141)
answer = divide(answer, 6)
console.assert(answer === 23.5)
answer = multiply(answer, 2)
console.assert(answer === 47)
answer = remainder(answer, 2)
console.assert(answer === 1)
answer = addone(answer)
console.assert(answer === 2)
answer = minusone(answer)
console.assert(answer === 1)
