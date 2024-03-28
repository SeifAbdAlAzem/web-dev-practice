///////////////////
    //// Solution
///////////////////

// Create and add classes to elements
const elements = {
    header: createElementWithClass('header'),
    main: createElementWithClass('main'),
    footer: createElementWithClass('footer'),
    headerContainer: createElementWithClass('div', 'container'),
    mainContainer: createElementWithClass('div', 'container'),
    nav: createElementWithClass('nav'),
    logo: createElementWithClass('div', 'logo'),
    ul: createElementWithClass('ul', 'nav-bar'),
    productsContainer: createElementWithClass('div', 'products'),
    logoImage: document.createElement('img')
};

// Function to create an element with class
function createElementWithClass(tagName, className) {
    const element = document.createElement(tagName);
    if (className) element.classList.add(className);
    return element;
}

///////////////////////////
///// Header Section
///////////////////////////

// Define the image path
const imagePath = './images/';

// Define list item texts
const listItems = ['Home', 'About', 'Services', 'Contact'];

// Loop through list items and create and append navbar items
listItems.forEach(text => {
    const navbarItem = createElementWithClass('li'); // Create navbar item element
    navbarItem.textContent = text; // Set text content of navbar item
    elements.ul.appendChild(navbarItem); // Append navbar item to the unordered list
});

// Append elements to their respective parents
elements.logoImage.setAttribute('src', `${imagePath}logo.png`);
elements.logo.appendChild(elements.logoImage);
elements.nav.append(elements.logo, elements.ul);
elements.headerContainer.append(elements.nav);
elements.header.append(elements.headerContainer);

///////////////////////////
///// Main Section
///////////////////////////

const productsImage = ['product-1.jpg', 'product-2.jpg', 'product-3.jpg', 'product-4.jpg', 'product-5.jpg', 'product-6.jpg'];

// Loop through Products and create and append product Box
productsImage.forEach((imageName, index) => {
    const productContainer = createElementWithClass('div', 'product');
    const productDescription = createElementWithClass('div', 'product-description');

    const productImage = document.createElement('img');
    productImage.src = `${imagePath}${imageName}`;

    const productText = document.createElement('p');
    const productHeading = document.createElement('h3');
    productText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptas perferendis commodi.";
    productHeading.textContent = `Fruit ${index + 1}`;
    productDescription.append(productHeading, productText);

    productContainer.append(productImage, productDescription);
    elements.productsContainer.appendChild(productContainer);
});

elements.mainContainer.append(elements.productsContainer);
elements.main.append(elements.mainContainer);


///////////////////////////
///// Footer Section
///////////////////////////

elements.footer.textContent = `&copy; 2024 All Rights Reserved To Fruits`;

// Create a <style> element
const styleElement = document.createElement('style');

// Define the CSS Global rules (Reset Style)
const cssRules = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        height: 100vh;
        height: 100dvh;
        background-color: #f5f5f5;
    }

    ul {
        list-style: none;
    }

    li {
        font-size: 18px;
        color: #333;
        transition-duration: 0.5s;
    }

    li:hover {
        cursor: pointer;
        color: #fba31c;
    }

    h3 {
        font-size: 24px;
    }

    p {
        font-size: 14px;
        line-height: 1.5;
        color: #333;
    }

    img {
        max-width: 100%;
    }

    .container {
        width: 80%;
        margin: auto;
    }

    @media (max-width: 687px) {
        .container {
            width: 90%;
        }
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
    }

    nav .logo {
        width: 50px;
    }

    @media (max-width: 687px) {
        nav .logo {
            margin-bottom: 20px
        }

        nav {
            justify-content: center;
        }
    }

    nav .nav-bar {
        display: flex;
        gap: 10px;
    }

    main .products {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px 10px;
    }

    @media (max-width: 687px) {
        main .products {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }

    main .products .product {
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }

    main .products .product .product-description {
        padding: 10px;
    }

    main .products .product h3 {
        margin-bottom: 10px;
    }

    footer {
        background-color: #fba31c;
        color: #fff;
        padding: 10px;
        margin-top: 20px;
        text-align: center;
        font-size: 18px;
    }

    @media (max-width: 687px) {
        footer {
            font-size: 12px;
        }
    }
`;

// Append the CSS rules to the <style> element
styleElement.appendChild(document.createTextNode(cssRules));

// Append the <style> element to the <head> of the document
document.head.appendChild(styleElement);

// Append the <header>, <main>, <footer> elements to the <body> of the document
document.body.append(elements.header, elements.main, elements.footer);