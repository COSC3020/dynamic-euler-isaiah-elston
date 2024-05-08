const jsc = require('jsverify');
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);

/*
I opted to take another shot at property-based testing with jsverify. 
I wanted to be able to do it successfully by myself, and I figured that
I could just test against the original code provided in this assignment.
*/

function originalFactorial(n) {
    if(n === 0) return 1;
    else return n * originalFactorial(n - 1);
}

const factorialResults =  
    jsc.forall("nat", function(n) {
        return JSON.stringify(originalFactorial(n)) ===
            JSON.stringify(factorial(n))
    })

    jsc.assert(factorialResults);

    function originalEuler(n) {
        if(n === 0) return 1;
        else return 1.0 / originalFactorial(n) + originalEuler(n - 1);
    }

    const eulerResults =
    jsc.forall("nat", function(n) {
        return JSON.stringify(originalEuler(n)) ===
            JSON.stringify(e(n));
    });

    jsc.assert(eulerResults);