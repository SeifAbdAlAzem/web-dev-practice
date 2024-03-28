/*
    //////////////////////////////
    Function And Parameters
    //////////////////////////////
*/

/*
    Assignment 01
*/

// function sayHello(theName, theGender = "Unknown") {
//     // Your Code Here
//     theGender === "Male" ?
//     console.log(`Hello Mr ${theName}`) :
//     theGender === "Female" ?
//     console.log(`Hello Miss ${theName}`) : console.log(`Hello ${theName}`);
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

/*
    Assignment 02
*/

// function calculate(firstNum, secondNum, operation = 'add') {
//     // Your Code Here
//     if(secondNum === undefined) {
//         console.log("Second Number Not Found");
//     } else if(operation === 'add') {
//         console.log(firstNum + secondNum);
//     } else if(operation === 'subtract') {
//         console.log(firstNum - secondNum);
//     } else if(operation === 'multiply') {
//         console.log(firstNum * secondNum);
//     } else {
//         console.log("Invalid Opertion");
//     }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600

/*
    Assignment 03
*/

// function ageInTime(theAge) {
//     // Your Code Here
//     let months = theAge * 12;
//     let days = months * 30;
//     let weeks = days / 7;
//     let hours = days * 12;
//     let minutes = hours * 60;
//     let seconds = minutes * 60;

//     if(theAge < 10 || theAge > 100) {
//         console.log("Age Out Of Range");
//     } else {
//         console.log(
// `Your age in years is ${theAge} years.
// Your age in months is ${months} Months.
// Your age in weeks is ${parseInt(weeks)} weeks.
// Your age in days is ${days} days.
// Your age in hours is ${hours} hours.
// Your age in minutes is ${minutes} minutes.
// Your age in seconds is ${seconds} seconds.`);
//     }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

/*
    Assignment 04
*/

// function checkStatus(a, b, c) {
//     // Your Code Here
//     if(typeof(b) === "string") {
//         [a, b] = [b, a];
//     } else if(typeof(c) === "string") {
//         [a, c] = [c, a];
//     }
//     if(typeof(a) === "number") {
//         [b, a] = [a, b]
//     } else if(typeof(c) === "number") {
//         [b, c] = [c, b]
//     }

//     if(c === true) {
//         console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
//     } else {
//         console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`);
//     }

// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// checkStatus("Osama", false, 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

/*
    Assignment 05
*/

// function createSelectBox(startYear, endYear) {
//     // Your Code Here
//     let selectBox = document.createElement("select");
//     for(;;) {
//         if(startYear > endYear) break;
//         let option = document.createElement("option");
//         let optionText = document.createTextNode(startYear);
//         option.setAttribute("value", startYear);
//         option.appendChild(optionText);
//         selectBox.appendChild(option);
//         startYear++;
//     }
//     document.body.appendChild(selectBox);
// }
// createSelectBox(2000, 2021);

/*
    Assignment 06
*/

// function multiply(...numbers) {
//     let multi = 1;
//     for(i = 0; i < numbers.length; i++) {
//         if(typeof(numbers[i]) != "number") {
//             continue;
//         } else {
//             multi*= parseInt(numbers[i]);
//         }
//     }
//     console.log(multi);
// }

// // multiply(10, 20); // 200
// // multiply("A", 10, 30); // 300
// // multiply(100.5, 10, "B"); // 1000