/*
    //////////////////////////////
    AJAX And JSON
    //////////////////////////////
*/

/*
    Assignment 01
*/

// See articles.json

/*
    Assignment 02
*/

// let req = new XMLHttpRequest();
// req.open("GET", "articles.json");
// req.send();
// console.log(req);

// req.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         console.log("Data Loaded");
//     }
// };

/*
    Assignment 03
*/

// let req = new XMLHttpRequest();
// req.open("GET", "articles.json");
// req.send();

// req.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         let mainData = JSON.parse(this.responseText);
//         for (let i = 0; i < mainData.length; i++) {
//         mainData[i].category = "All";
//         }
//         console.log(mainData);
//         let updatedData = JSON.stringify(mainData);
//         console.log(updatedData);
//     }
// };

/*
    Assignment 04
*/

// let req = new XMLHttpRequest();
// req.open("GET", "articles.json");
// req.send();

// req.onreadystatechange = function () {
//     if(this.readyState === 4 && this.status === 200) {
//         let mainData = JSON.parse(this.responseText);
//         let parent = document.createElement("div");
//         parent.id = "data";
//         for(let i = 0; i < mainData.length; i++) {
//             let article = `
//                 <div>
//                     <h2>${mainData[i].title}</h2>
//                     <p>${mainData[i].content}</p>
//                     <p>Author: ${mainData[i].author}</p>
//                     <p>Category: ${mainData[i].category}</p>
//                 </div>
//             `;
//             parent.innerHTML += article;
//         }
//         document.body.appendChild(parent);
//     }
// };