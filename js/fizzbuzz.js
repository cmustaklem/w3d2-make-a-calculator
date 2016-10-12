function FizzBuzz(n) {
    var text = ''
    for (var i=1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            text += 'fizzbuzz'
        }
        else if (i % 3 === 0) {
            text += 'fizz'
        }
        else if (i % 5 === 0) {
            text += 'buzz'
        }
        else {
            text += '.'
        }
    }
    return text
}

console.assert(FizzBuzz(1) === '.')
console.assert(FizzBuzz(2) === '..')
console.assert(FizzBuzz(3) === '..fizz')
console.assert(FizzBuzz(5) === '..fizz.buzz')
console.assert(FizzBuzz(10) === '..fizz.buzzfizz..fizzbuzz')
// for (var i=1; i <= 15; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }

// function FizzBuzz(n) {
//     if (n % 5 === 0) {
//         console.log('Buzz')
//     }
//     if (n % 3 === 0) {
//         console.log('Fizz')
//     }
//     if ((n % 5 === 0) && (n % 3 === 0)) {
//         console.log('FizzBuzz')
//     }
// }

// var n = 5
//
// switch (n % 5 === 0 && n % 3 === 0) {
//      case expr: () {
//         console.log('Buzz')
//     case 'Forrest Gump':
//         console.log('Buba-gump Shrimp')
//         break;
// case 'Star Wars':
//     console.log('Use the force!')
//     break;
// case 'Groundhog Day':
//     console.log('Put your little hand in mine.')
//     break;
// default:
//     console.log(movie + ' is worth seeing!')
// }

// console.assert(FizzBuzz(1) === '.')
// console.assert(FizzBuzz(2) === '..')
// console.assert(FizzBuzz(3) === '..fizz')
// console.assert(FizzBuzz(5) === '..fizz.buzz')
// console.assert(FizzBuzz(10) === '..fizz.buzzfizz..fizzbuzz')
