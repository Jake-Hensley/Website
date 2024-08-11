import { makeLink, makeParagraph, makeSpan } from "./view.utils";

const paragraph = makeParagraph("This website is currently being developed by Jake Hensley, a sophmore Computer Engineering Student at Northeatern University.");

export function makeAuthorView() {
    const view = document.createElement('div');
    view.appendChild(paragraph);
    return view;
}