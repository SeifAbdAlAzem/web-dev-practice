///////////////////
    //// Solution
///////////////////

// Challenge One

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);


// a = 10;
// b = "20";
// c = 80;

// console.log(11 + 20 + 80 - 11);

// First Console Line
// /*
//   [++a] [+]
//   [++a]
//   - Value: 11
//   - Explain: pre-increment
//   [+]
//   - Explain: assignment operator "addition"
//   [+b++]
//   [+]
//   - Explain: Unary Operator "Unary plus"
//   [b++]
//   - Value: 20
//   - Explain: post-increment
//   [+c++]
//   - Value: 80
//   [-]
//   - Explain: assignment operator "subtraction"
//   [+a++]
//   - Value: 11
//   Final Result
//   - Value: 100
// */

// a = 12;
// b = 21;
// c = 81;

// console.log(13 + -21 + 81 - -13 + 14);

// Second Console Line
// /*
//   [++a]
//   - Value: 13
//   [-b]
//   - Explain: Unary Operator "Unary negation"
//   - Value: -21
//   [+c++]
//   - Value: 81
//   [-a++]
//   - Value: -13
//   [+a]
//   - Value: 14
//   Final Result
//   - Value: 100
// */

// a = 14;
// b = 21;
// c = 82;

// console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1);

// Third Consosle Line
// /*
//   [--c]
//   - Explain: pre-decrement
//   - Value: 81
//   [+b]
//   - Value: 21
//   [--a]
//   - Value: 13
//   [*]
//   - Explain: Assignment Operator (Multiplication)
//   [+b++]
//   - Value: 21
//   [+b]
//   - Value: 22
//   [a]
//   - Value: 13
//   [--a]
//   - Value: 12
//   [+true]
//   - Value: 1
//   Final Result
//   - Value: 100
// */

// Challenge Two

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(d-- * -e); // 2000
// console.log(-(--d) + (e*=(++g)) + ++f); // 173
// console.log(++e * ++g + ++f + -d);  // Another Solution