import asado from "./assets/img/menu/asado.png"

function newElement(elementName) {
    return document.createElement(elementName);
};

class Dish {
    constructor(img, title, description, serves, price) {
        this.dishContainer = newElement("div");
        this.dishContainer.classList.add("dish");

        this.img = newElement("img");
        this.img.src = img;

        this.title = newElement("h2");
        this.title.textContent = title;

        this.description = newElement("p");
        this.description.textContent = description;

        this.serves = newElement("p");
        this.serves.textContent = `Serves: ${serves}`;

        this.price = newElement("p");
        this.price.textContent = `Price: \$${price}`;

        this.dishContainer.appendChild(this.img);
        this.dishContainer.appendChild(this.title);
        this.dishContainer.appendChild(this.description);
        this.dishContainer.appendChild(this.serves);
        this.dishContainer.appendChild(this.price);
    }

    getDish() {
        return this.dishContainer;
    }
}

export default function menuLoad() {
    const content = document.querySelector("#content");

    const menuContainer = newElement("div");
    menuContainer.classList.add("menu-content")

    const argentineAsado = new Dish(asado, "🥩 Asado Criollo", `A traditional Argentinian
        barbecue platter featuring a generous selection of beef ribs, chorizo, morcilla 
        (blood sausage), and perfectly grilled vegetables. Slow-cooked over a wood fire 
        for that unmistakable smoky flavor, served with chimichurri and fresh bread.`,
        "3-4", 48);

        /* Add more dishes if you want */

    content.appendChild(argentineAsado.getDish());
}

