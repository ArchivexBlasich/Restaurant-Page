function newElement(elementName) {
    return document.createElement(elementName);
};

export default function contactLoad() {
    const content = document.querySelector("#content");

    const contactContainer = newElement("div");
    contactContainer.classList.add("contact-content");

    const heading = newElement("h2");
    heading.textContent = "Contact Us";

    const contactMessage = newElement("p");
    contactMessage.textContent = `At El Sabor de la Pampa, we are passionate about bringing 
        the flavors and traditions of Argentina straight to your table.  
        Whether you’re here for a family gathering, a romantic dinner, or simply to enjoy an 
        authentic asado, we are always happy to welcome you.`;

    const visitMyGitHub = newElement("p");
    visitMyGitHub.textContent = "💻 Visit my GitHub:";

    const gitHubLink = newElement("a");
    gitHubLink.href = "https://github.com/ArchivexBlasich";
    gitHubLink.target = "_blank";
    gitHubLink.rel = "noopener noreferrer";
    gitHubLink.textContent = "github.com/ArchivexBlasich";

    visitMyGitHub.appendChild(gitHubLink);


    contactContainer.appendChild(heading);
    contactContainer.appendChild(contactMessage);
    contactContainer.appendChild(visitMyGitHub);

    content.appendChild(contactContainer);
}