/*
    //////////////////////////////
    Numbers
    //////////////////////////////
*/

/*
    Assign 01
*/

// // Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// // Your Solutions
// console.log(1e5); // 100000
// console.log(Math.pow(10, 5)); // 100000
// console.log(10 ** 5); // 100000
// console.log(100000.0); // 100000
// console.log(Math.round(100000.4)); // 100000
// console.log(Math.ceil(99999.1)); // 100000
// console.log(Math.floor(100000.9)); // 100000
// console.log(Math.trunc(100000.25486)); // 100000
// console.log(Number("100000")); // 100000
// console.log(Math.max(100, 1000, 10000, 100000)); // 100000

/*
    Assign 02
*/

// console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991
// console.log(-(Number.MIN_SAFE_INTEGER)); // 9007199254740991

/*
    Assign 03
*/

// console.log(Number.MAX_SAFE_INTEGER + Number.MIN_SAFE_INTEGER + +"16"); // 16

/*
    Assign 04
*/

// let myVar = "100.56789 Views";

// console.log(typeof(parseInt(myVar))); // 100
// console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

/*
    Assign 05
*/

// let num = 10;

// console.log(+Number.isInteger(num) + +Number.isInteger(num)); // 2

/*
    Assign 06
*/

// let flt = 10.4;

// console.log(Math.round(flt)); // 10
// console.log(Math.floor(flt)); // 10
// console.log(Math.ceil(flt) - +true); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(parseInt(flt)); // 10

/*
    Assign 07
*/

/*
    1- random function get random number from range 0 to 1
    2- Multiply the output number from the random function by the number of digits in range [0-4] in this case 5
    3- floor() nears the value to the smallest digit
*/

// for(i = 0; i < 10; i++) {
//     console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
// }