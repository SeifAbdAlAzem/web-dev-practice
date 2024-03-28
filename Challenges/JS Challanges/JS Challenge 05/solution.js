///////////////////
    //// Solution
///////////////////

// Challenge One

let a = 10;

a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 To 40") : a > 40 ? console.log("> 40") : console.log("Unknown");


// Challenge Two

let st = "Elzero Web School";

if (`"${st.length + st.length}"` === "34") {
    console.log("First Good");
}

if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
    console.log("Second Good");
}

if (typeof(st.length) !== "string") {
    console.log("Third Good");
}

if (typeof(st.length) === "number") {
    console.log("Fourth Good");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
    console.log("Last Good");
}