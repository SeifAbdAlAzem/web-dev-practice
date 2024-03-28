/*
    //////////////////////////////
    Regular Expression
    //////////////////////////////
*/

/*
    Assignment 01
*/

// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// let regex = /\d{4}:\w{3}:3{4}:4{4}:5{4}:6{4}:7{4}:8{4}/ig;
// console.log(ip.match(regex));

/*
    Assignment 02
*/

// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// let regex = /\bOs\d*O\b/ig;
// console.log(specialNames.match(regex));

/*
    Assignment 03
*/

// let phone = "+(995)-123 (4567)";

// let regex = /\+\(\d{3}\)\-\d{3}\s\(\d{4}\)/g;
// console.log(phone.match(regex));

/*
    Assignment 04
*/

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
    ? (The posiibiity of charahter existence before it is 0 or 1)
    \ (This must used as escape character before /)
    \w (Matches all word characters)
    [] (used as range)
    + (The posiibiity of charahter existence before it is 1 or more)
    . (matches any character, except newline or other line terminators)
    * (The posiibiity of charahter existence before it is 0 or more)
    i (It is a modifier that apply case insenstive to the regular expression)
*/

/*
    Assignment 05
*/

// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d{1,2}\s?\W?\s?\d{1,2}\s?\W?\s?\d{2,4}/g;

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"

/*
    Assignment 06
*/

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:\/\/)?(www.)?\w+.\w+(.*)?/ig;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));