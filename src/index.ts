import { makeHomeView } from "./views/home.view";
import { makeNavView } from "./views/navigation.view";
import { renderView } from "./views/view.utils";

function init() {
    document.body.style.background = "#3078ba";
    const navSection = document.getElementById("section-nav");
    const navView = makeNavView();
    navSection?.appendChild(navView);

    const homeView = makeHomeView();
    renderView(homeView);
}
init();