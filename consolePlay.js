console.log('Hello dear Friends')
console.log('\n')

/* Next up! */
console.log('This is a for loop:')
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log('\n')
console.log(3 + 2.1 )

console.log('\n')
console.log(3 > 2.1 )

//FROM FIRST EXPRESSION
console.log('\n')
console.log(10 + 52 - 20);

console.log(5%3 + 4*10);


//STRING CONCATENATION
let greetings = 'Hello'
console.log(greetings + ' Manningson')

//CONVERTING FROM CELCIUS TO FAHRENHEIT
console.log('\n')
const celsius = 12
const fahrenheit = celsius * 1.8 + 32

console.log('The temperature is ' + fahrenheit)
console.log('\n')

//PROPERTIES OF VARIABLES STORING STRINGS AS ARRAY ELEMENTS
const aLetter = "I won't leave you soon"
console.log(aLetter[2] + ' and ' + aLetter[5])
console.log('\n')

//ESCAPING STRINGS FOR SPECIAL CHARACTERS
console.log('I want to quote \'Life is hard\'')
console.log('\n')
console.log('Go left then\nturn right')
console.log('\n')
console.log('Go left then\n\tTurn right\n\t\tThen go straight up')
console.log('\n')

//STRING COMPARISON
console.log('Y' != 'y')
console.log('\n')

//UNDER OUT TO DINNER QUIZ
const bill = 10.25+3.99+7.15;
const tip = bill * 15 / 100;
const total = bill + tip;

console.log('The total cost is $' + total.toFixed(2));
console.log('\n')


//EVEN OR ODD MODIFIED
//HARDCODED
const userInput = 10;
if (userInput % 2 == 0) {
    console.log('This is even')
} else {
    console.log('This is odd')
}
console.log('\n')

//MUSICAL GROUPS
//HARDCODED:
const musicians = 3;

if (musicians <= 0) {
    console.log('Not a group')
} else if (musicians == 1) {
    console.log('Solo')
} else if (musicians == 2) {
    console.log('Duet')
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet");
} else {
    console.log("this is a large group");
}


//MURDER MYSTERY
const weapon = '';
const room = '';
const suspect = '';

/*
Disply choose room
ask user to quess who is in the room
if answer matches, mystery solved
if not try again or close
*/

if (room == 'dining room' && suspect == 'Mr Parks') {
    console.log(suspect +' did it in the ' + room + ' with the ' + weapon + '!')
}
