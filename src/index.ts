import { makeHomeView } from "../dist/views/home.view.js";
import { renderView } from "../dist/views/view.utils.js";

function init() {
    const homeView = makeHomeView();
    renderView(homeView);
}
init();