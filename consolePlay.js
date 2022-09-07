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
const interact = require("readline");

const rLII /*r=read L=Line I=Interface I = Instance */ = interact.createInterface({
    input: process.stdin,
    output: process.stdout
})

rLII.question('Want to run the NumberChecker? ', function (answer) {
    if (answer == 'Yes' || answer == "yes" || answer == 'y'){
        console.log('\nAlright! Running the NumberChecker now:\n')
        runNumberChecker();
    } else {
        console.log('Then closing Query instance')
        rLII.close();
    }
})

function runNumberChecker() {
    
    
    rLII.question('*********************************\n'+
                '**********NumberChecker**********\n' + 
                'What number do you want to check? ', 
                function (answer){
        if (answer % 2 == 0) {
            console.log('\n' + answer + ' is even')
        } else {
            console.log('\n' + answer + ' is odd')
        }

        rLII.question('Do you wish to check a different number? ',
                            function (answer) {
                                if (answer == 'Yes' || answer == "yes" || answer == 'y'){
                                    console.log('\nAlright! Running the NumberChecker now:\n')
                                    runNumberChecker();
                                } else {
                                    console.log('Then closing Query instance')
                                    rLII.close();
                                }
                            })
        console.log("\nClosing the NumberChecker interface")
        console.log('\n*********************************\n')
        rLII.close()
    })
}


/*const userInput = prompt("Number to check for odd or even:");
if (userInput % 2 == 0) {
    console.log('This is even')
} else {
    console.log('This is odd')
}
console.log('\n')*/