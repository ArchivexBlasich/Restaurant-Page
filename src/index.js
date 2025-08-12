import "./style.css";
import homeContent from "./homeLoad";
import menuContent from "./menuLoad";
import contactContent from "./contactLoad";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

function cleanPage() {
    const contentChields = document.querySelector("#content").children;
    if (contentChields) {
        Array.from(contentChields).forEach(child => {
            child.remove();
        });
    }
};

homeBtn.addEventListener("click", () => {
    cleanPage();
    homeContent();
});

menuBtn.addEventListener("click", () => {
    cleanPage();
    menuContent();
});

contactBtn.addEventListener("click", () => {
    cleanPage();
    contactContent();
});

homeContent();