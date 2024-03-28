/*
    //////////////////////////////
    Map And Set
    //////////////////////////////
*/

/*
    Assignment 01
*/

// let setOfNumbers = new Set([10])
// setOfNumbers.add(20).add(setOfNumbers.size);
// console.log(setOfNumbers);
// console.log([...setOfNumbers].pop());

/*
    Assignment 02
*/

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log(Array.from(new Set(myFriends)).sort());

/*
    Assignment 03
*/

// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };

// let newMap = new Map(Object.entries(myInfo));
// console.log(newMap);
// console.log(newMap.size);
// console.log(newMap.has("role"));

/*
    Assignment 04
*/

// let theNumber = 100020003000;
// console.log(parseInt([...new Set(theNumber.toString().split(""))].sort().join("")));

/*
    Assignment 05
*/

// let theName = "Elzero";

// console.log(`First Method: [${[...theName]}]`);
// console.log(`Second Method: [${Array.from(theName)}]`);
// console.log(`Third Method: [${theName.split("")}]`);
// console.log(`Fourth Method: [${theName.split(/(?<=)/)}]`);
// console.log(`Fifth Method: [${Object.values(theName.split(''))}]`);

/*
    Assignment 06
*/

// Thinking

/*
    1- Know the number of digits.
    2- Make custom comparison function to make digits in the start of array with saving the original order of chars after it.
    3- I want to know the start and end of part I wil copy from.
    4- copy to the target "start index of array".
*/

// Writing Code

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// let numberCount = 0;
// chars.forEach((char) => {
//     if(typeof(char) === "number") {
//         numberCount++;
//     }
// })

// let newArray = chars.sort((a, b) => typeof a === 'number' ? (typeof b === 'number' ? a - b : -1) : (typeof b === 'number' ? 1 : 0)).copyWithin(0, numberCount, numberCount + numberCount);
// console.log(newArray);

// // // Needed Output
// // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

/*
    Assignment 07
*/

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// console.log(`Method One: [${[...numsOne, ...numsTwo]}]`);
// console.log(`Method Two: [${numsOne.concat(numsTwo)}]`);
// console.log(`Method Three: [${numsOne}${numsTwo}]`);

/*
    Assignment 08
*/

// // Think out of the box when in the box can't do what you want.

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log(parseInt(`${n1.pop().toString().length}${n2.pop().toString()}`));