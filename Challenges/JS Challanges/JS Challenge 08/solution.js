let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar", "Seif"];

///////////////////
    //// Solution
///////////////////

let adminNumbers = 0;
let teamsCounter = 0;
let teamNumber = 1;

// Loop to get the number of admins and break the loop on "Stop" element
for (adminNumbers; adminNumbers < myAdmins.length; adminNumbers++) {
    if (myAdmins[adminNumbers] === "Stop") {
        break;
    }
}

// Add Element "Number of admins" to body
document.body.innerHTML = `We have ${adminNumbers} Admins.<hr>`;

// Loop to make sections of team members
for (teamsCounter; teamsCounter < adminNumbers; teamsCounter++) {
    let employeesNumber = 1; // Reset employeesNumber for each team
    let sectionEmployees = ''; // Store sectionEmployees HTML

    for (let employeesCounter = 0; employeesCounter < myEmployees.length; employeesCounter++) {
        if (myAdmins[teamsCounter].charAt(0) === myEmployees[employeesCounter].charAt(0)) {
            sectionEmployees += `<p>- ${employeesNumber} ${myEmployees[employeesCounter]}</p>`;
            employeesNumber++;
        }
    }

    const teamSecton = `
    <div>
        <p>The Admin For Team ${teamNumber} Is ${myAdmins[teamsCounter]}</p>
        <h3>Team Members: </h3>
        ${sectionEmployees}
        <hr>
    </div>
    `;
    document.body.innerHTML += teamSecton;
    teamNumber++;
}