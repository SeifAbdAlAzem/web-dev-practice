///////////////////
    //// Solution
///////////////////

// Dummy Solution

// function showDetails(a, b, c) {
//     if(typeof(a) === "string" && typeof(b) === "number") {
//         return c === true ? console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`) : console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`);
//     } else if(typeof(a) === "number" && typeof(b) === "string") {
//         return c === true ? console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`) : console.log(`Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`);
//     } else if(typeof(a) === "boolean" && typeof(b) === "string") {
//         return a === true ? console.log(`Hello ${b}, Your Age Is ${c}, You Are Available For Hire`) : console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`);
//     } else if(typeof(a) === "boolean" && typeof(b) === "number") {
//         return a === true ?  console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`) : console.log(`Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`);
//     } else if(typeof(a) === "string" && typeof(b) === "boolean") {
//         return b === true ? console.log(`Hello ${a}, Your Age Is ${c}, You Are Available For Hire`) : console.log(`Hello ${a}, Your Age Is ${c}, You Are Not Available For Hire`);
//     } else {
//         return b === true ? console.log(`Hello ${c}, Your Age Is ${a}, You Are Available For Hire`) : console.log(`Hello ${c}, Your Age Is ${a}, You Are Not Available For Hire`);
//     }
// }


// Smarter Solution

function showDetails(a, b, c) {
    const name = typeof(a) === 'string' ? a : typeof(b) === 'string' ? b : c;
    const age = typeof(a) === 'number' ? a : typeof(b) === 'number' ? b : c;
    const hireStatus = typeof(a) === 'boolean' ? a : typeof(b) === 'boolean' ? b : c;

    return hireStatus ? console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`) : console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"