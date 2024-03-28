/*
    //////////////////////////////
    Browser Object Model (BOM)
    //////////////////////////////
*/

/*
    Assignment 01
*/

// let promptMsg = prompt(`Print Number From - To`, `Example: 5-20`);

// promptMsgArray = promptMsg.split("-");

// if(promptMsgArray[1] > promptMsgArray[0]) {
//     for(let i = promptMsgArray[0]; i <= promptMsgArray[1]; i++) {
//         document.body.append(`${i} `);
//     }
// } else {
//     for(let i = promptMsgArray[1]; i <= promptMsgArray[0]; i++) {
//         document.body.append(`${i} `);
//     }
// }

/*
    Assignment 02
*/

// // Function to create and show the popup
// function showPopup(messageHead = "Welcome", messageContent = "Welcome Msg") {

//     // Create popup
//     let popup = document.createElement('div');
//     popup.style.cssText = 'text-align: center; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 40px 100px; background-color: #F5F3F4; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); z-index: 1000;';

//     // Create message heading element
//     let messageHeadElement = document.createElement('h1');
//     messageHeadElement.textContent = messageHead;

//     // Create message content element
//     let messageContentElement = document.createElement('p');
//     messageContentElement.textContent = messageContent;

//     // Create close button
//     let closeButton = document.createElement('button');
//     closeButton.textContent = 'x';
//     closeButton.onclick = function () {
//         document.body.removeChild(popup);
//     };
//     closeButton.style.cssText = "cursor: pointer; color: #fff; font-size: 18px; border: none; background-color: #f00; border-radius: 50%; padding: 5px 10px; position: absolute; top: -10px; right: -10px;";

//     // Append elements to the popup
//     popup.appendChild(messageHeadElement);
//     popup.appendChild(messageContentElement);
//     popup.appendChild(closeButton);

//     // Append overlay and popup to the body
//     document.body.appendChild(popup);
// }

// setTimeout(showPopup, 5000, 'Welcome', 'Welcome To Elzero Web School');

/*
    Assignment 03
*/

// let div = document.createElement("div");
// div.textContent = 10;

// function countdown() {
//     div.textContent -= 1;
//     if (div.textContent === "0") {
//         clearInterval(counter);
//     }
// }
// let counter = setInterval(countdown, 1000);

// document.body.appendChild(div);

/*
    Assignment 04
*/

// let div = document.createElement("div");
// div.textContent = 10;

// function countdown() {
//     div.textContent -= 1;
//     if (div.textContent === "0") {
//         clearInterval(counter);
//         location.href = "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/";
//     }
// }
// let counter = setInterval(countdown, 1000);

// document.body.appendChild(div);

/*
    Assignment 05
*/

// let div = document.createElement("div");
// div.textContent = 10;

// function countdown() {
//     div.textContent -= 1;
//     if(div.textContent === "5") {
//         window.open("https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/", "_blank", "width=500, height=500, left=900, top=120");
//     }
//     else if (div.textContent === "0") {
//         clearInterval(counter);
//     }
// }
// let counter = setInterval(countdown, 1000);

// document.body.appendChild(div);