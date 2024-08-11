import { makeParagraph } from "./view.utils";

export function makeHomeView() {
    const view = document.createElement("div");
    const paragraph = makeParagraph("Welcome to my website!");
    view.appendChild(paragraph);
    return view;
}