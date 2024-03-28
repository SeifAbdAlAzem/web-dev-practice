/*
    //////////////////////////////
    Data, Generators, Modules
    //////////////////////////////
*/

/*
    Assignment 01
*/

// let dateNow = new Date();
// let birthDate = new Date("2001-09-09");
// let dateDiff = dateNow - birthDate;

// console.log(`"${parseInt(dateDiff / 1000)} Seconds"
// "${parseInt(dateDiff / 1000 / 60)} Minutes"
// "${parseInt(dateDiff / 1000 / 60 / 60)} Hours"
// "${parseInt(dateDiff / 1000 / 60 / 60 / 24)} Days"
// "${parseInt(dateDiff / 1000 / 60 / 60 / 24 / 30)} Months"
// "${parseInt(dateDiff / 1000 / 60 / 60 / 24 / 365)} Years"
// `);

/*
    Assignment 02
*/

// let date = new Date(0);

// date.setFullYear(1980);
// date.setHours(0);
// date.setSeconds(1);
// console.log(date);

// // Needed Output
// // "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

/*
    Assignment 03
*/

// let datePrevMonth = new Date();
// datePrevMonth.setDate(0);
// console.log(datePrevMonth);

// let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
// console.log(`"Previous Month Is ${Months[datePrevMonth.getMonth()]} And Last Day Is ${datePrevMonth.getDate()}"`);

/*
    Assignment 04
*/

// console.log(
// `"Method One: ${new Date("2001-09-09")}
// "Method Two: ${new Date(Date.parse("2001-09-09"))}
// "Method Three: ${new Date((new Date("2001-09-09")).getTime())}`);

/*
    Assignment 05
*/

// // Start Time
// let start = performance.now();

// // Operation
// for (let i = 1; i <= 99999; i++) {
//     console.log(i);
// }

// // Time End
// let end = performance.now();

// // Operation Duration
// let duration = (end - start);

// console.log(`Loop Took ${parseInt(duration)} Milliseconds.`);

/*
    Assignment 06 *************************
*/

// function* gen() {
//     let i = 1;
//     while (true) {
//         yield 100 * i * i - 160 * i + 74;
//         i++;
//     }
// }

// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}

/*
    Assignment 07
*/

// function* genNumbers() {
//     yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//     yield* ["A", "B", "B", "B", "C", "D"];
// }

// // Write Your Generator Function Here
// function* genAll() {
//     yield* new Set(genNumbers());
//     yield* new Set(genLetters());
// }

// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}

/*
    Assignment 08
*/

// import calc from "./mod-one.js";
// import {nums as modOne} from "./mod-two.js"

// // main.js File
// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60