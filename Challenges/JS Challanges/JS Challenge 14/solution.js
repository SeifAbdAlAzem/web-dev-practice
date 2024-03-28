let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

///////////////////
    //// Solution
///////////////////

let theFriend; // Define variable to hold the chosen friend object

if (chosen === 1) {
    theFriend = myFriends[0];
} else if (chosen === 2) {
    theFriend = myFriends[1];
} else if (chosen === 3) {
    theFriend = myFriends[2];
} else {
    console.log("Invalid choice. Please choose 1, 2, or 3.");
}

if (theFriend) { // Check if theFriend is defined
    const {title: theName, age: theAge, available, skills: [,skill]} = theFriend;

    console.log(theName);
    console.log(theAge);
    console.log(available ? "Available" : "Not Available");
    console.log(skill);
}