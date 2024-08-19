import { makeAboutView } from "./about.view";
import { makeAuthorView } from "./author.view";
import { makeHomeView } from "./home.view";
import { renderView, universalStyle } from "./view.utils";

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
    universalStyle(wrapper);
    return wrapper;
}
export function makeNavLink(label: string, viewFn: Function) {
    const link = document.createElement("a");
    link.textContent = label;
    link.addEventListener("click", handleNavClick(viewFn));
    universalStyle(link);
    link.style.margin = "2px";
    link.style.cursor = "pointer";
    link.style.fontSize = "25px";
    link.style.background = "white";

    return link;
}
export function handleNavClick(viewFn: Function) {
    return function (event: MouseEvent) {
        event.preventDefault();
        renderView(viewFn());
    };
}