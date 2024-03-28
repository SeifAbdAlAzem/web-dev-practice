/*
    //////////////////////////////
    Local Storage
    //////////////////////////////
*/

/*
    Assignment 01
*/

// // Thinking
/*
    1- Get the values from the select.
    2- Add these values to the localStorage.
    3- Apply these styles in the sample paragrapgh.
*/

// // Write Code

// let form = document.forms[0];
// let fontFamily = document.getElementById("font");
// let fontColor = document.getElementById("color");
// let fontSize = document.getElementById("size");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     window.localStorage.clear();
//     window.localStorage.setItem("color", fontColor.value);
//     window.localStorage.setItem("font-size", fontSize.value);

//     if(fontFamily.value === "Open") {
//         window.localStorage.setItem("font-family", "Open Sans");
//     } else if(fontFamily.value === "Cairo") {
//         window.localStorage.setItem("font-family", "Cairo");
//     }  else if(fontFamily.value === "Roboto") {
//         window.localStorage.setItem("font-family", "Roboto");
//     }

//     let sampleText = document.querySelector(".sample p");

//     sampleText.style.fontFamily = window.localStorage.getItem("font-family");
//     sampleText.style.color = window.localStorage.color;
//     sampleText.style.fontSize = window.localStorage["font-size"];
// });

/*
    Assignment 02
*/

// let form = document.forms[0];
// let userName = document.getElementById("userName");
// let userAge = document.getElementById("age");
// let userCountry = document.getElementById("country");
// let favMovie = document.getElementById("Movies");


// window.addEventListener("load", () => {
//     userName.value = window.sessionStorage.getItem("User Name");
//     userAge.value = window.sessionStorage.getItem("User Age");
//     userCountry.value = window.sessionStorage.getItem("User Country");
//     favMovie.value = window.sessionStorage.getItem("Favorite Movie") || favMovie.value;
// });

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     window.sessionStorage.setItem("User Name", userName.value);
//     window.sessionStorage.setItem("User Age", userAge.value);
//     window.sessionStorage.setItem("User Country", userCountry.value);
//     window.sessionStorage.setItem("Favorite Movie", favMovie.value);
// });