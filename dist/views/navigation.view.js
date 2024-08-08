import { makeAboutView } from "./about.view";
import { makeHomeView } from "./home.view";
import { renderView } from "./view.utils";
const NAV_ITEMS = [
    ["Home", makeHomeView],
    ["About this site", makeAboutView]
];
export function makeNavView() {
    const wrapper = document.createElement("div");
    NAV_ITEMS.forEach((navItem) => {
        const navLink = makeNavLink(...navItem);
        wrapper.appendChild(navLink);
    });
    return wrapper;
}
export function makeNavLink(label, viewFn) {
    const link = document.createElement("a");
    link.textContent = label;
    link.addEventListener("click", handleNavClick(viewFn));
    link.setAttribute("style", "padding: 2px; text-decoration: bold;");
    return link;
}
export function handleNavClick(viewFn) {
    return function (event) {
        event.preventDefault();
        renderView(viewFn());
    };
}
//# sourceMappingURL=navigation.view.js.map