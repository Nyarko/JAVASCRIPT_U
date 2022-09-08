const interact = require("readline");

const rLII /*r=read L=Line I=Interface I = Instance */ = interact.createInterface({
    input: process.stdin,
    output: process.stdout
});

rLII.question('Which <name>Checker do you wanna run?\n' + 
                'Choose by typing the corresponding number:\n' + 
                '1. NumberChecker\n' +
                '2. MusicGroupChecker\n' + 
                '3. MurderMystery Game\n', function (answer) {
    if (answer == '1'){
        console.log('\n\tAlright!\nRunning the NumberChecker now:\n')
        runNumberChecker();
    } else if (answer == '2') {
        console.log('\n\tAlright!\nRunning the NumberChecker now:\n')
        runMusicGroupChecker()
    } else if (answer == '3'){
        console.log('\n\tAlright!\nRunning the MurderMystery Game now:\n')
        runMurderMystery();
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
                        console.log("This is a \'quartet\'.");
                    } else {
                        console.log("This is a large group!");
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

/*
Disply choose room
ask user to quess who is in the room
if answer matches, mystery solved
if not try again or close
*/

function runMurderMystery() {
    rLII.question('***********************************\n'+
                '***********MurderMystery***********\n' + 
                '\nChoose the room to investigate\n' +
                '1. Dining room\n'+ '2. Gallary\n' + 
                '3. Billards room' + '4. Ballroom', 
                function (choiceMade){
                    let weapon = '';
                    let room = "";
                    let suspect = "";

                    if (choiceMade == 1) {
                        room = 'dining room';
                        weapon = 'knife';
                        console.log('The selected room is ' + room + '.');
                    } else if (choiceMade == 2) {
                        room = 'gallery';
                        weapon = 'trophy';
                        console.log('The selected room is ' + room + '.');
                    } else if (choiceMade == 3) {
                        room = 'billiards room';
                        weapon = 'pool stick';
                        console.log('The selected room is ' + room + '.');
                    } else if (choiceMade === 4) {
                        room = 'ballroom';
                        weapon = 'poison';
                        console.log('The selected room is ' + room + '.');
                    }

        rLII.question('\nWho is the suspect here? ',
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
