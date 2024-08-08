import { makeHomeView } from "./views/home.view.js";
import { renderView } from "./views/view.utils.js";

function init() {
    const homeView = makeHomeView();
    renderView(homeView);
}
init();