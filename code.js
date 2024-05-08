function factorial(n, iterCount = 1, acc = 1) {
    if (n <= 1) {
        return 1;
    }

    if(n == iterCount) {
        return acc;
    }
    else {
        return factorial(n, ++iterCount, acc *= iterCount);
    }
}

/*
NOTE: I couldn't really see any way to implement the factorial function
without it repeating some work. Therefore, I implemented the e function
without it.
*/

function e(n, iterCount = 1, acc = 1.0, denom = 1.0) {
    if(n == 0) {
        return acc;
    }
    else {
        return e(--n, ++iterCount, acc += (1.0 / denom), denom *= iterCount);
    }
}
