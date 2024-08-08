import { makeHomeView } from "./views/home.view";
import { renderView } from "./views/view.utils";

function init() {
    const homeView = makeHomeView();
    renderView(homeView);
}
init();