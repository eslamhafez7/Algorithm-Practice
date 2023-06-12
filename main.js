
// Example 1 
/*
Start 
Read Input Numbers
let sum = 0
for each number of the input
aquare = number * number
sum = sum + square
braek loop
print sum 
End
*/

/*
function calcsumsquare(inputNumber) {
    let sum = 0;

    for(let i = 0; i < inputNumber.length; i++) {
        let number = inputNumber[i];
        let square = number * number;
        sum += square;
    };
    return sum;
};

let numbers = [5, 6, 7, 9];
let result = calcsumsquare(numbers);
console.log(result);

*/

// Example 2 
/*
Start
Read num1
Read num2
Read num3

If num1 > num2:
    Swap num1 and num2

If num2 > num3:
    Swap num2 and num3

If num1 > num2:
    Swap num1 and num2

Write num1, num2, num3
End

*/

/*
Write a program that prints the numbers from 1 to n. But for multiples of three,
print "Fizz" instead of the number, and for multiples of five, print "Buzz".
For numbers that are multiples of both three and five, print "FizzBuzz"
*/

// function buzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         }else if(i % 3 === 0) {
//             console.log("Fizz");
//         }else if (i % 5 === 0) {
//             console.log("Buzz");
//         }else {
//             console.log([i]);
//         };
//     };
// };
// buzz(20);

function fizzBuzzRecursive(n) {
    if (n > 0) {
    fizzBuzzRecursive(n - 1);
    printFizzBuzz(n);
    }
}

function printFizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
    } else if (n % 3 === 0) {
    console.log("Fizz");
    } else if (n % 5 === 0) {
    console.log("Buzz");
    } else {
    console.log(n);
    }
}
fizzBuzzRecursive(20);


function reverseWords (str) {
    return str.split("").reverse().join("");
};
const input = "Hello World!";
const reversed = (reverseWords(input));
console.log(reversed);