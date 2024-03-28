/*
    //////////////////////////////
    Loop - For
    //////////////////////////////
*/

/*
    Assignment 01
*/

// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i = start; i <= end; i+=start ) {
//     if(i === exclude) {
//         continue;
//     }
//     console.log(i);
// }

/*
    Assignment 02
*/

// let start = 10;
// let end = 0;
// let stop = 3;

// for(let i = start; i >= end; i-- ) {
//     if(i < stop) {
//         break;
//     } else if (i < start) {
//         console.log(`0${i}`);
//     } else {
//         console.log(i);
//     }
// }

/*
    Assignment 03
*/

// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i = start; i <= end; i++) {
//     console.log(`${i}
// -- ${breaker}
// -- ${breaker + breaker}`)
// }

/*
    Assignment 04
*/

// let index = 10;
// let jump = 2;

// for (;;) {
//     console.log(index);
//     index-= jump;
//     if (index === jump) break;
// }

/*
    Assignment 05
*/

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let start = friends.length - friends.length;

// for(let i = start; i < friends.length; i++) {
//     if(!(friends[i].startsWith(letter.toUpperCase()))) {
//         console.log(`"${i} => ${friends[i]}"`);
//     }
// }

/*
    Assignment 06
*/

// let start = 0;
// let swappedName = "elZerO";
// let newName = "";

// for(let i = start; i < swappedName.length; i++) {
//     if(swappedName[i] == swappedName[i].toLowerCase()) {
//         newName+= swappedName[i].toUpperCase();
//     } else {
//         newName+= swappedName[i].toLowerCase();
//     }
// }
// console.log(newName);

/*
    Assignment 07
*/

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for(let i = start; i < mix.length; i++) {
//     if(typeof(mix[i]) != "number" || i == start) {
//         continue;
//     } else {
//         console.log(mix[i]);
//     }
// }