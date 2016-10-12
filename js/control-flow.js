
/*whatsUp()
var name = 'Charlie'
console.log(name)
console.log('What\'s Up?')


function whatsUp() {
    console.log('What is up?')
    var name = 'Christy'
    function sayHello() {

    }
}*/

//Core Functions
//console.log()
//document.write()
//alert()

var mph1 = 10;
var hours1 = 5;
var distance1 = mph1 * hours1;

var mph2 = 80;
var hours2 = 2;
var distance2 = mph2 * hours2;

var mph3 = 55;
var hours3 = .75;
var distance3 = mph3 * hours3;
console.log(distance1, distance2, distance3)

console.log(distance(66,1))


function distance(mph, hours) {
    if (hours === undefined) {
        hours = 10s
    }
    return 100
    return 'Charlie'
    return true
    if (mph > 65) {
        //console.log('Warning: Too Fast!')
        return 'Warning: Too Fast! No way you will get distance from us.'
    }



//console.log(distance(65))


// var year = 1995
//
// if (movie === 'Forrest Gump') {
//     console.log('Life is like a box of chocolates')
// }
// else if (movie === 'Groundhog Day') {
//     console.log('Repeat.')
// }
// else if (movie === 'Star Wars') {
//     console.log('Luke, I am your father.')
// }
// else {
//     console.log(movie + ' is awesome!')
// }

// var movie = 'Harry Potter'

// console.log(9 % 3)

if (15 % 5 === 0) {
    console.log('Yes it is divisible by five')
}

switch (movie) {
    case 'Forrest Gump':
        console.log('Buba-gump Shrimp')
        break;
    case 'Star Wars':
        console.log('Use the force!')
        break;
    case 'Groundhog Day':
        console.log('Put your little hand in mine.')
        break;
    default:
        console.log(movie + ' is worth seeing!')
}
if (100 >= 1 && (true === false) || ('Hello' === 'Hello')) {
    console.log('It is true.')
}

// var list = ['Sally', 'Tom', 'Joel', 'Kyle', 'Tony', 'Keith']
//
// for (var i = 0; i < list.length; i++) {
//     console.log(list[i])
// }
//
// for (var i = 0; i < 100; i++) {
//     console.log('<div id="Row${i}" class="row"><div class="col-sm-12</div></div>")
//
// }
// var total = 0
//
// for (var i = 0; i < 300; i++) {
//     total = i
    // document.querySelector('.container').innerHTML += `<button class="btn btn-primary btn-lg">Button ${i}</button>`
// }

// console.log(total)

// for (var i = 5; i < 1000; i = i + 100) {
//     console.log(i + ' - Looping...')
//


function sayHello(greeting) {
    return greeting
}
console.assert(sayHello('Hello') === 'Hello')
