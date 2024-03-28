/*
    //////////////////////////////
    DOM Part Two
    //////////////////////////////
*/

/*
    Assignment 01
*/

// See in HTML File

/*
    Assignment 02
*/

// let classAdded = document.querySelector(".classes-to-add");
// let classRemoved = document.querySelector(".classes-to-remove");
// let classesList = document.querySelector(".classes-list div")
// let noClassesText = document.createTextNode("No Classes To Show");

// classesList.style.cssText = "display: flex; justify-content: center;";

// if(classesList.innerHTML === '') {
//     classesList.appendChild(noClassesText);
// }

// classAdded.onblur = () => {

//     if (classAdded.value.trim() === '') {
//         console.log("Error: Input field is empty or contains only whitespace");
//     } else {
//         let addedValues = classAdded.value.split(" ");

//         let existingElements = Array.from(document.querySelectorAll(".classes-list div p")).map(element => element.innerText);

//         let newElements = addedValues
//             .map(value => value.toLowerCase())
//             .filter(value => !existingElements.includes(value));

//         let allElements = [...existingElements, ...newElements].sort();
//         classesList.innerHTML = '';

//         for(let j = 0; j < allElements.length; j++) {
//             let element = document.createElement("p");
//             let text = document.createTextNode(allElements[j]);
//             element.style.cssText = "color: #fff; background-color: #fc5826; padding: 10px; margin: 0 5px; width: fit-content; border-radius: 8px;";
//             element.appendChild(text);
//             noClassesText.remove();
//             classesList.appendChild(element);
//         }
//         classAdded.value = '';
//     }

// }

// /*
// ** first push existing elements to array then sort it then add it to the new sorted elements the sort new array and finally add it to paragraph element then append it in the classList

// *** new elements: classAdded
// *** current elements: classesList
// *** new array: current elements + new elements
// */

// classRemoved.onblur = () => {
//     let elements = document.querySelectorAll(".classes-list div p");
//     if(classRemoved.value !== '') {
//         let removedValues = classRemoved.value.split(" ");
//         for(let i = 0; i < removedValues.length; i++) {
//             for(let j = 0; j < elements.length; j++) {
//                 if(removedValues[i].toLowerCase() === elements[j].innerText) {
//                     elements[j].remove();
//                 }
//             }
//         }
//         classRemoved.value = '';
//     }
//     if(classesList.innerHTML === '') {
//         classesList.appendChild(noClassesText);
//     }
// }

/*
    Assignment 03
*/

// let Div = document.querySelector(".our-element");
// let p = document.querySelector("p");

// p.remove();

// let start = document.createElement("div");
// let end = document.createElement("div");
// let startText = document.createTextNode("Start");
// let endText = document.createTextNode("End");

// start.classList.add("start");
// end.classList.add("end");

// start.setAttribute("title", "Start Element");
// end.setAttribute("title", "End Element");

// start.setAttribute("data-value", "Start");
// end.setAttribute("data-value", "End");

// start.appendChild(startText);
// end.appendChild(endText);

// Div.before(start);
// Div.after(end);

/*
    Assignment 04
*/

// Method One

// let elzero = document.querySelector("div").textContent.split("\n");
// console.log(elzero[3].trim());


// Method Two

// let elzero = document.querySelector("div").lastChild.textContent.trim();
// console.log(elzero);

/*
    Assignment 05
*/

// let DivElement = document.querySelector("div");
// DivElement.onclick = () => console.log(`This Is ${DivElement.nodeName}`);


// let elements = document.querySelectorAll('div, span, p, article, section');
// elements.forEach(element => {
//     console.log(`This Is ${element.nodeName}`);
// });