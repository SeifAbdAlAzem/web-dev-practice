/*
    //////////////////////////////
    Higher Order Functions
    //////////////////////////////
*/

/*
    Assignment 01
*/

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let newMix = mix.map((e) => {
//     return typeof(e) === "string" ? e : "";
// }).reduce(function (acc, current) {
//     return acc + current;
// });

// console.log(newMix);

/*
    Assignment 02
*/

// let myString = "EElllzzzzzzzeroo";

// let newString = myString.split("").filter((e, i, arr) => {
//     return e != arr[i+1];
// });

// console.log(newString.join(""));

/*
    Assignment 03
*/

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let newArray = myArray.reduce((acc, current) => {
//     if(Array.isArray(current)) {
//         current = current.join("");
//     }
//     return acc + current;
// });

// console.log(newArray);

/*
    Assignment 04
*/

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let newNumsAndStrings = numsAndStrings.filter((e) => {
//     return typeof(e) === "number";
// }).map((e) => {
//     return e < 0 ? -e : -e;
// })

// console.log(newNumsAndStrings);

/*
    Assignment 05
*/

// let nums = [2, 12, 11, 5, 10, 1, 99];

// let newNums = nums.reduce((acc, current) => {
//     return current % 2 != 0 ? acc + current : acc * current;
// }, 1)

// console.log(newNums);