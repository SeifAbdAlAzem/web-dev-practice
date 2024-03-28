///////////////////
    //// Solution
///////////////////

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString.split("").filter((word, index, arr) => isNaN(Number.parseInt(word)) && word !== "," &&  index != arr.length - true).reduce((acc, current) => acc === current ? acc : acc + current).split("_").join(" ");
console.log(solution); // Elzero Web School