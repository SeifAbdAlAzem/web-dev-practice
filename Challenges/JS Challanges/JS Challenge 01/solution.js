///////////////////
    //// Solution
///////////////////

const [titleContent, descriptionContent, dateContent] = ["Elzero", "Elzero Web School", "25/10"];

const cardContainer = `
    <div>
        <h3>${titleContent}</h3>
        <p>${descriptionContent}</p>
        <span>${dateContent}</span>
    </div>
`;

document.body.innerHTML = cardContainer.repeat(4);