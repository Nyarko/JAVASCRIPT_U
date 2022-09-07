const interact = require("readline");

const rLII /*r=read L=Line I=Interface I = Instance */ = interact.createInterface({
    input: process.stdin,
    output: process.stdout
});

rLII.question('Which <name>Checker do you wanna run?\n' + 
                'Choose by typing the corresponding number:\n' + 
                '1. NumberChecker\n' +
                '2. MusicGroupChecker\n', function (answer) {
    if (answer == '1'){
        console.log('\n\tAlright!\nRunning the NumberChecker now:\n')
        runNumberChecker();
    } else if (answer == '2') {
        console.log('\n\tAlright!\nRunning the NumberChecker now:\n')
        runMusicGroupChecker()
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


function runMusicGroupChecker() {
    rLII.question('***********************************\n'+
                '********MusicGroupChecker********\n' + 
                '\nWhat is the number of people in the Group?\n', 
                function (musicians){
                    if (musicians <= 0) {
                        console.log('Not a group')
                    } else if (musicians == 1) {
                        console.log('This is a \'Solo\'.')
                    } else if (musicians == 2) {
                        console.log('This is a \'Duet\'.')
                    } else if (musicians === 3) {
                        console.log("This is a \'trio\'.");
                    } else if (musicians === 4) {
                        console.log("This is a \'quartet\'");
                    } else {
                        console.log("This is a large group");
                    }

        rLII.question('\nWish to check for a different group? ',
                            function (answer) {
                                if (answer == 'Yes' || answer == "yes" || answer == 'y'){
                                    console.log('\n\tOkay!\nRunning the MusicGroupChecker again:\n')
                                    runMusicGroupChecker();
                                } else {
                                    console.log('\nUnderstood!')
                                    console.log("\nClosing the MusicGroupChecker interface")
                                    console.log('\n\tClosing Query interface')
                                    console.log('\n************/*/Goodbye/*/***********\n')
                                    console.log('************************************\n')
                                    rLII.close()
                                }
                            })
    })
}