/*
    //////////////////////////////
    Document Object Model (DOM)
    //////////////////////////////
*/

/*
    Assignment 01
*/

// let selector1 = document.querySelector("div.element");
// let selector2 = document.querySelector("#elzero");
// let selector3 = document.querySelector(".element");
// let selector4 = document.querySelector("[name = 'js']");

// let selector5 = document.querySelectorAll("div#elzero")[0];
// let selector6 = document.querySelectorAll("#elzero")[0];
// let selector7 = document.querySelectorAll(".element")[0];
// let selector8 = document.querySelectorAll("[name = 'js']")[0];

// let selector9 = document.getElementById("elzero");
// let selector10 = document.getElementsByClassName("element")[0];
// let selector11 = document.getElementsByTagName("div")[0];
// let selector12 = document.getElementsByName("js")[0];

// const selector13 = document.body.children[0];
// let selector14 = document.body.firstElementChild;
// let selector15 = elzero;

// let selectors = [selector1, selector2, selector3, selector4, selector5, selector6, selector7, selector8, selector9, selector10, selector11, selector12, selector13, selector14, selector15]

// for(let i = 0; i < selectors.length; i++) {
//     console.log(selectors[i]);
// }

/*
    Assignment 02
*/

// for(let i = 0; i < document.images.length; i++) {
//     document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     document.images[i].alt = "Elzero Logo";
// }

/*
    Assignment 03
*/

// document.forms[0].elements['dollar'].addEventListener('input', (e) => {
//     let dollarInput = e.target;
//     let dollarInputValue = dollarInput.value;

//     if (dollarInputValue.trim() !== '') { // Check if the input is not empty
//         let EgyptianPound = dollarInputValue * 15.6;
//         let result = document.getElementsByClassName("result");

//         result[0].innerText = `{${dollarInputValue}} USD Dollar = {${EgyptianPound.toFixed(2)}} Egyptian Pound`;
//     } else {
//         // Clear the result if the input is empty
//         let result = document.getElementsByClassName("result");
//         result[0].innerText = '';
//     }
// });

// document.forms[0].onsubmit = (e) => {
//     e.preventDefault();

//     let dollarInput = document.forms[0].elements['dollar'];
//     let dollarInputValue = dollarInput.value;
//     let EgyptianPond = dollarInputValue * 15.6;
//     let result = document.getElementsByClassName("result");

//     result[0].innerText = `{${dollarInputValue}} USD Dollar = {${EgyptianPond.toFixed(2)}} Egyptian Pound`;

//     dollarInput.value = '';
// };

/*
    Assignment 04
*/

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// let divs = document.getElementsByTagName('div');

// let [swap1, swap2] = [one.title, one.textContent];
// [one.title, one.textContent] = [two.title, two.textContent];
// [two.title, two.textContent] = [swap1, `${swap2} ${divs.length}`];

/*
    Assignment 05
*/

// for(let i = 0; i < document.images.length; i++) {
//     if(document.images[i].hasAttribute("alt")) {
//         document.images[i].alt = "Old";
//     } else {
//         document.images[i].setAttribute("alt", "Elzero New");
//     }
// }

/*
    Assignment 06
*/

// let form = document.forms[0];
// let inputs = document.getElementsByClassName("input");
// let submitBtn = document.querySelector("[type='submit']");
// let result = document.querySelector(".results");

// document.body.style.cssText = "background-color: #0e0e0e;";
// form.style.cssText = "display: flex; align-items: center; flex-direction: column; margin: auto; margin-top: 2%;";
// submitBtn.style.cssText = "cursor: pointer; width: 25%; background-color: #00938d; color: #fff; border: none; border-radius: 8px; padding: 20px 15px;";
// result.style.cssText = "width: 80%; margin-top: 2%; display: flex; justify-content: space-between; flex-wrap: wrap;";

// for(let i = 0; i < inputs.length; i++) {
//     inputs[i].style.cssText = "width: 25%; padding: 20px 15px; margin-bottom: 15px; background-color: #eee; border: none; border-radius: 8px; box-sizing: border-box;";
// }

// let elements = document.querySelector("[name = 'elements']");
// let texts = document.querySelector("[name = 'texts']");
// let select = document.querySelector("[name = 'type']");


// form.onsubmit = (e) => {
//     e.preventDefault();

//     result.innerHTML = '';
//     if(select.value === "Div") {
//         for(let j = 0; j < elements.value; j++) {
//             let Div = document.createElement("div");
//             let myText = document.createTextNode(texts.value);
//             Div.appendChild(myText);
//             Div.style.cssText = "background-color: #fc5826; flex-basis: 31%; padding: 20px 0; margin-bottom: 20px; color: #fff; display: flex; justify-content: center; align-items: center; border-radius: 8px;";
//             Div.className = "box";
//             Div.setAttribute("title", "Element");
//             Div.setAttribute("id", `id-${j+1}`);
//             result.appendChild(Div);
//         }
//     } else {
//         for(let j = 0; j < elements.value; j++) {
//             let Section = document.createElement("span");
//             let myText = document.createTextNode(texts.value);
//             Section.appendChild(myText);
//             Section.style.cssText = "background-color: #fc5826; flex-basis: 31%; padding: 20px 0; margin-bottom: 20px; color: #fff; display: flex; justify-content: center; align-items: center; border-radius: 8px;";
//             Section.className = "box";
//             Section.setAttribute("title", "Element");
//             Section.setAttribute("id", `id-${j+1}`);
//             result.appendChild(Section);
//         }
//     }
// };