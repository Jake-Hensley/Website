import { makeAboutView } from "./about.view.js";
import { makeAuthorView } from "./author.view.js";
import { makeHomeView } from "./home.view.js";
import { renderView } from "./view.utils.js";

type NavItem = [label: string, viewFn: Function];

//array of different pages
const NAV_ITEMS: NavItem[] = [
    ["Home", makeHomeView],
    ["About", makeAboutView],
    ["Author", makeAuthorView]
];

export function makeNavView() {
    const wrapper = document.createElement("div");

    NAV_ITEMS.forEach((navItem) => {
        const navLink = makeNavLink(...navItem);
        wrapper.appendChild(navLink);
    });
    return wrapper;
}
export function makeNavLink(label: string, viewFn: Function) {
    const link = document.createElement("a");
    link.textContent = label;
    link.addEventListener("click", handleNavClick(viewFn));
    link.setAttribute("style", "padding: 2px; text-decoration: bold; cursor: pointer");

    return link;
}
export function handleNavClick(viewFn: Function) {
    return function (event: MouseEvent) {
        event.preventDefault();
        renderView(viewFn());
    };
}