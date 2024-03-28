/*
    //////////////////////////////
    Arrays And Methods
    //////////////////////////////
*/

/*
    Assign 01
*/

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// let arrayStart = myFriends.length - myFriends.length;
// console.log(myFriends.slice(arrayStart, num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends.splice(num)
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

/*
    Assign 02
*/

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here

// friends.pop();
// friends.shift();

// console.log(friends); // ["Eman", "Osama"]

/*
    Assign 03
*/

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code

// finalArr = finalArr.concat(arrTwo.pop(),arrOne.reverse(),arrTwo.reverse())

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

/*
    Assign 04
*/

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words.pop()[0].slice(words.length).toUpperCase()); // ZERO

/*
    Assign 05
*/

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions

// if(haystack.includes(needle) && haystack[1] === needle && haystack.slice(1, 2).toString() === needle) {
//     console.log("Found");
// }

/*
    Assign 06
*/

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// // // Your Code Here
// // Method One
// allArrs = allArrs.concat(arr2[arr1.length - +true] ,arr1.pop(), arr2.pop()).join("").toLowerCase();

// // Method Two
// allArrs.push(arr1.pop(), arr2.pop(), arr2.pop());
// allArrs = allArrs.sort().join('').toLowerCase();

// console.log(allArrs); // fxy