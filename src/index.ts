import { makeHomeView } from "./views/home.view";
import { makeNavView } from "./views/navigation.view";
import { renderView } from "./views/view.utils";

function init() {
    const navSection = document.getElementById("section-nav");
    const navView = makeNavView();
    navView.style.margin = "20px";
    navSection?.appendChild(navView);

    const homeView = makeHomeView();
    renderView(homeView);

    
}
init();