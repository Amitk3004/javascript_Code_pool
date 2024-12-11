/**
 * Typical issue with declaring variables with Var is that unlike let and const Var is function scoped.
 * it means even if you declare variable in iside some loop with var it would be considered as function scoped.
 * and can be read even ouside of the foor loop because of the same reason.
 */


// look at the function below.
function print() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log('i can still be accessible here -> ', i)
}
/* uncomment this and try running this */
//print();

// its clear that var is function scoped.
// Now comes the interview question, guess the output of below loop

function loop() {
    for(var i=0; i<=10; i++) {
        setTimeout(() => {
            console.log(i);
        });
    }
}

loop(); 

// you will see 11 times '11' in console. Reason is same, var is function scoped and setTimeout being a asynchronous call
// it starts execution after foor loop is completed meanwhile foor loop has changed the value of var i till 11. hence settimeout
// will now read from function scope variable 11 times so the value is same 11.


/** To solve this
 * replace var with let 
 * in for loop call a different function x(i) which will implement setTimeout(() => {console.log(i)})
 */

