var i = 0;
const n = parseInt(prompt('Enter number of number Fibonacci'));
let fibonacci = [1, 1];

//  First version:
function fibonacci_for(n) {
    for (i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    document.writeln('1st version (for): ' + fibonacci[n - 1] + '<br>');
}
fibonacci_for(n);

//  Second version:
function fibonacci_while(n) {
    while (i < n) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        i++;
    }
    document.writeln('2nd version (while): ' + fibonacci[n - 1] + '<br>');
}
fibonacci_while(n);

// Third version:
let x = 1;
let y = 1;
let z = 1;

function fibonacci_without_arrays(n) {
    for (i = 3; i <= n; i++) {
        z = x + y;
        x = y;
        y = z;
    }
    document.writeln('3rd version (no arrays): ' + z + '<br>');
}
fibonacci_without_arrays(n);

// Fourth version
let a = 1;
let b = 1;
let c = 1;

function fibonacci_recursion(n) {
    if (n > 2) {
        c = a + b;
        a = b;
        b = c;
        fibonacci_recursion(n - 1);
    }
    return c;
}

document.writeln('4th version (recursion): ' + fibonacci_recursion(n) + '<br>');

// Fiveth version

function fibonacci_binet(n) {
    return Math.round((Math.pow(((1 + Math.sqrt(5)) / 2), n) - Math.pow(((1 - Math.sqrt(5)) / 2), n)) / Math.sqrt(5));
}
document.writeln('5th version (Binet): ~' + fibonacci_binet(n) + '<br>');
