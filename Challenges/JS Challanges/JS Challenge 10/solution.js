///////////////////
    //// Solution
///////////////////

// Challenge One

let names = (...names) => `String [${names.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim")); // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !


// Challenge Two

let myNumbers = [20, 50, 10, 60];
function calc(one, two, ...nums) {
    return one + two + nums[1];
}
console.log(calc(10, myNumbers[0], ...myNumbers)); // 80