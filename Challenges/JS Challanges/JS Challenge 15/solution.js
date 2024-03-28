let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

///////////////////
    //// Solution
///////////////////

console.log(new Set(n2).size * (new Set(n2).size + n1.length) * Math.min(...n2)); // 210

// Other Solutions

// console.log(Math.max(...n2)  *  [...n1, ...n2].length);
// console.log([...n1, ...n2].length * new Set(n2).size * Math.min(...n1));
// console.log([...n1,...n2].length * Math.max(...Array.from(new Set([...n1,...n2]))));