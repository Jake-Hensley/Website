import { makeParagraph } from "./view.utils";

export function makeAboutView() {
    //create a single element to contain the rest of the content
    const view = document.createElement('div');
    //create content
    const paragraph1 = makeParagraph('Test Words');
    //add content to the view
    view.appendChild(paragraph1)

    return view;
}