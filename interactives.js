const interact = require("readline");

const rLII /*r=read L=Line I=Interface I = Instance */ = interact.createInterface({
    input: process.stdin,
    output: process.stdout
});

let appName = '';

rLII.question('\n\tWelcome Dear User' + 
                '\nWhich APP do you wanna run?\n' + 
                'Choose by typing the corresponding number:\n' + 
                '1. NumberChecker\n' +
                '2. MusicGroupChecker\n' + 
                '3. MurderMystery Game\n' +
                '4. BalanceChecker\n', function (answer) {

    if (answer == '1'){
        appName = 'NumberChecker'
        console.log('\n\tAlright!\nRunning the '+ appName +' now:\n')
        runNumberChecker();
    } else if (answer == '2') {
        appName = 'MusicGroupChecker'
        console.log('\n\tAlright!\nRunning the '+ appName +' now:\n')
        runMusicGroupChecker()
    } else if (answer == '3'){
        appName = 'MurderMystery Game'
        console.log('\n\tAlright!\nRunning the '+ appName +' Game now:\n')
        runMurderMystery();
    } else if (answer == '4'){
        appName = 'BalanceChecker'
        console.log('\n\tAlright!\nRunning the '+ appName +' now:\n')
        runBalanceChecker();
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
        };

        rLII.question('\nWish to check a different number? ' + 
                    '1. Yes\n' + '2. No\n' + 
                    '\nYour answer: ', function (answer) {
            if (answer == 'Yes' || answer == "yes" || answer == 'y') {
                appName = 'NumberChecker';
                runNumberChecker();
            } else {
                console.log('\nUnderstood!')
                console.log("\nClosing the "+ appName +" interface")
                console.log('\n\tClosing Query interface')
                console.log('\n************/*/Goodbye/*/***********\n')
                console.log('************************************\n')
                rLII.close()
            }
        })

        // funcRan = runMurderMystery();
        // goodByeClosing(qAsked, funcRan, appName) ; 
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
                    } else if (musicians == 4) {
                        console.log("This is a \'quartet\'.");
                    } else {
                        console.log("This is a large group!");
                    }

        rLII.question('\nWish to check for a different group? '+
                    '1. Yes\n' + '2. No\n' + 
                    '\nYour answer: ',
                            function (answer) {
                                if (answer == 'Yes' || answer == "yes" || answer == 'y'){
                                    console.log('\n\tOkay!\nRunning the MusicGroupChecker again:\n')
                                    appName = 'MusicGroupChecker';
                                    runMusicGroupChecker();
                                } else {
                                    console.log('\nUnderstood!')
                                    console.log("\nClosing the "+ appName +" interface")
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
                '1. Dining room\n'+ '2. Gallery\n' + 
                '3. Billiards room\n' + '4. Ballroom\n', 
                function (choiceMade){
                    let solved = false;
                    let weapon = '';
                    let room = "";
                    let suspect = "";

                    if (choiceMade == 1) {
                        room = 'dining room';
                        weapon = 'knife';
                        solved = true;
                    } else if (choiceMade == 2) {
                        room = 'gallery';
                        weapon = 'trophy';
                        solved = true;
                    } else if (choiceMade == 3) {
                        room = 'billiards room';
                        weapon = 'pool stick';
                        solved = true;
                    } else if (choiceMade === '4') {
                        room = 'ballroom';
                        weapon = 'poison';
                        solved = true;
                    } 
                    if (solved === true) {
                        console.log('The selected room is ' + room + '.')
                    } else {
                        console.log('You made the wrong selection\n' +
                        'Please try with the correct response\n');
                        runMurderMystery();
                    }

        rLII.question('\nWho is the suspect here? '+
                        '\nType in the number before suspect name\n' +
                        '1. Mr Parkes\n' + '2. Ms Van Cleve\n' +
                        '3. Mrs Sparr\n' + '4. Mr Kalehoff\n',
                            function (answer) {
                                solved = false;
                                if (answer == 1 && room == 'dining room') {
                                    suspect = '\nMr Parkes';
                                    solved = true
                                } else if (answer == 2 && room == 'gallery') {
                                    suspect = '\nMs Van Cleve';
                                    solved = true
                                } else if (answer == 3 && room == 'billiards room') {
                                    suspect = '\nMrs Sparr';
                                    solved = true
                                } else if (answer == 4 && room == 'ballroom') {
                                    suspect = '\nMr Kalehoff';
                                    solved = true
                                } 

                                if (solved === true) {
                                    console.log(suspect +' did it in the ' + room + ' with the ' + weapon + '!')
                                } else {
                                    console.log('The case is not solved!\n')
                                }
                            
            rLII.question('\nWish to play the game again? ',
                                function (answer) {
                                    if (answer == 'Yes' || answer == "yes" || answer == 'y'){
                                        console.log('\n\tOkay!\nRunning the MurderMystery Game again:\n')
                                        runMurderMystery();
                                    } else {
                                        console.log('\nUnderstood!')
                                        console.log("\nClosing the MurderMystery Game interface")
                                        console.log('\n\tClosing Query interface')
                                        console.log('\n************/*/Goodbye/*/***********\n')
                                        console.log('************************************\n')
                                        rLII.close()
                                    }
                                })
                            })
    })
}

function runBalanceChecker() {
    let balance = '', isActive = false, checkBalance = false;
    rLII.question('***********************************\n'+
                '***********BalanceChecker***********\n' + 
                '\nWish to check your balance?\n' +
                '1. Yes\n'+ '2. No\n' + 
                '\nYour answer: ', function(answer) {
                    if (answer == 1) {
                        checkBalance = true;
                        //ask account active, then go to ask account balance
                        rLII.question('\nIs your account active?\n' +
                                    '1. Yes\n'+ '2. No\n' + 
                                    '\nYour answer: ', function(answer) {
                                        if (answer == 1) {
                                            isActive = true;
                                            rLII.question('\nWhat is your account balance? ' + 
                                                        '\nType your balance here: ', function(answer) {
                                                            if (answer > 0 && isActive === true){
                                                                balance = answer;
                                                                console.log('Your balance is $' + balance +'.')
                                                            } else if (answer == 0 && isActive === true) {
                                                                console.log('Your account is empty.')
                                                            } else {
                                                                console.log('Your balance is negative.\nPlease contact bank')
                                                            }
                                                        })
                                        } else if (answer == 2) {
                                            isActive = false
                                            console.log('Your account is no longer active.\n')
                                        }
                                        rLII.question('Do you wish to do another balance check? \n' + 
                                                    '1. Yes\n' + '2. No\n' + 
                                                    '\nYour answer: ', function (answer) {
                                                        if (answer == 'Yes' || answer == "yes" || answer == 'y'){
                                                            console.log('\n\tOkay!\nRunning the BalanceChecker again:\n')
                                                            runMurderMystery();
                                                        } else {
                                                            console.log('\nUnderstood!')
                                                            console.log("\nClosing the BalanceChecker interface")
                                                            console.log('\n\tClosing Query interface')
                                                            console.log('\n************/*/Goodbye/*/***********\n')
                                                            console.log('************************************\n')
                                                            rLII.close()
                                                        }
                                                    })
                        })
                    } else if (answer == 2) {
                        console.log('\nThank you. Have a nice day!')
                    }

                    // goodByeClosing()
    })
}


// let appName = '', 
//     qAsked = '\nWish to check a different number? ' + 
//                     '1. Yes\n' + '2. No\n' + 
//                     '\nYour answer: ', 
//     funcRan = '';

// function goodByeClosing (qAsked, b, c) {
//     const closingInteract = require("readline");

//     const cIII /*r=read L=Line I=Interface I = Instance */ = closingInteract.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     cIII.question(qAsked, function (answer) {
//                         if (answer == 'Yes' || answer == "yes" || answer == 'y'){
//                             console.log('\n\tOkay!\nRunning the '+ c +' again:\n')
//                             b;
//                         } else if (answer == 'No') {
//                             console.log('\nUnderstood!')
//                             console.log("\nClosing the "+ appName +" interface")
//                             console.log('\n\tClosing Query interface')
//                             console.log('\n************/*/Goodbye/*/***********\n')
//                             console.log('************************************\n')
//                             cIII.close()
//                         }
//                     })
// }