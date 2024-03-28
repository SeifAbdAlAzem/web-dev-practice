let a = "Elzero Web School";

///////////////////
    //// Solution
///////////////////

// First Task

console.log(a.charAt(2).toUpperCase().concat(a.slice(3,6))); // Zero

// Second Task

console.log(a.charAt(a.length - 4).toUpperCase().repeat(8)); // HHHHHHHH

// Third Task

console.log(a.split(" ",1)); // ["Elzero"]

// Fourth Task

console.log(`${a.substr(0,6)} ${a.substr(-6)}`); // Elzero School

// Fifth Task

console.log(`${a[0].toLowerCase()}${a.slice(1,a.length-1).toUpperCase()}${a[a.length-1].toLowerCase()}`); // eLZERO WEB SCHOOl