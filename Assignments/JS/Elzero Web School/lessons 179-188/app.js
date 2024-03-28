/*
    //////////////////////////////
    Promises
    //////////////////////////////
*/

/*
    Assignment 01
*/

// const getData = (apiLink) => {
// return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.open("GET", apiLink);
//     myRequest.send();
//     myRequest.onload = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                 let articlesData = JSON.parse(this.responseText);
//                 resolve(articlesData);
//                 for(let i = 0; i < articlesData.length; i++) {
//                     if(i === 5) {
//                         break;
//                     } else {
//                         let article = `
//                             <div>
//                                 <h3>${articlesData[i].title}</h3>
//                                 <p>${articlesData[i].description}</p>
//                             </div>
//                         `
//                         document.body.innerHTML += article;
//                     }
//                 }
//             } else {
//                     reject(Error("No Data Found"));
//             }
//         };
//     });
// };

// getData("./promises.json");

/*
    Assignment 02
*/

// const getData = (apiLink) => {
//     return new Promise((resolve, reject) => {
//         fetch(apiLink)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(articlesData => {
//                 resolve(articlesData);
//                 for (let i = 0; i < articlesData.length && i < 5; i++) {
//                     let article = `
//                         <div>
//                             <h3>${articlesData[i].title}</h3>
//                             <p>${articlesData[i].description}</p>
//                         </div>
//                     `;
//                     document.body.innerHTML += article;
//                 }
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// };

// getData("./promises.json");
