const interact = require("readline");

const rLII /*r=read L=Line I=Interface I = Instance */ = interact.createInterface({
    input: process.stdin,
    output: process.stdout
});

rLII.question('Which <name>Checker do you wanna run?\n' + 
                'Choose by typing the corresponding number:\n' + 
                '1. NumberChecker' +
                '2. MusicGroupChecker', function (answer) {
    if (answer == '1'){
        console.log('\n\tAlright!\nRunning the NumberChecker now:\n')
        runNumberChecker();
    } else if (answer == '2') {
        console.log('\n\tAlright!\nRunning the NumberChecker now:\n')
        runNumberChecker()
    } else {
        console.log('Then closing Query instance')
        rLII.close();
    }
});

rLII.question('Want to run the NumberChecker?\n', function (answer) {
    if (answer == 'Yes' || answer == "yes" || answer == 'y'){
        console.log('\n\tAlright!\nRunning the NumberChecker now:\n')
        runNumberChecker();
    } else {
        console.log('Then closing Query instance')
        rLII.close();
    }
});

function runNumberChecker() {
    
    
    rLII.question('***********************************\n'+
                '***********NumberChecker***********\n' + 
                '\nWhat number do you want to check?\n', 
                function (answer){
        if (answer % 2 == 0) {
            console.log('\n' + answer + ' is even')
        } else {
            console.log('\n' + answer + ' is odd')
        }

        rLII.question('\nWish to check a different number? ',
                            function (answer) {
                                if (answer == 'Yes' || answer == "yes" || answer == 'y'){
                                    console.log('\n\tOkay!\nRunning the NumberChecker again:\n')
                                    runNumberChecker();
                                } else {
                                    console.log('\nUnderstood!')
                                    console.log("\nClosing the NumberChecker interface")
                                    console.log('\n\tClosing Query interface')
                                    console.log('\n************/*/Goodbye/*/***********\n')
                                    console.log('************************************\n')
                                    rLII.close()
                                }
                            })
    })
};


rLII.question('Want to run the MusicGroupChecker?\n', function (answer) {
    if (answer == 'Yes' || answer == "yes" || answer == 'y'){
        console.log('\n\tAlright!\nRunning the MusicGroupChecker now:\n')
        runNumberChecker();
    } else {
        console.log('Then closing Query instance')
        rLII.close();
    }
});