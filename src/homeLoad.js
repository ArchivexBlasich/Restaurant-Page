function newElement(elementName) {
    return document.createElement(elementName);
};

export default function homeLoad() {
    const content = document.querySelector("#content");

    const heading = newElement("h2");
    const text1 = newElement("p");
    const text2 = newElement("p");

    heading.textContent = "Welcome to El Sabor de la Pampa";

    text1.textContent = `Enjoy authentic Argentinian cuisine: juicy cuts of meat cooked to perfection on our grill,
            crispy empanadas filled with flavor, and Malbec wines that captivate the palate.
            Our restaurant invites you to live a unique experience, as if you were in the heart of Buenos Aires.`;

    text2.textContent = `Whether you come for an asado with friends or a romantic dinner, here you will find
            hospitality, tradition, and a touch of Argentinian passion in every dish.`;

    content.appendChild(heading);
    content.appendChild(text1);
    content.appendChild(text2);
}