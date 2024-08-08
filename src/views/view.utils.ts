

export function makeParagraph(text: string) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

export function makeLink(href: string, label: string, newTab = false) {
    const link = document.createElement("a");
    link.setAttribute("href", href);
    link.textContent = label;
    if (newTab) {
        link.setAttribute("target", "_blank");
    }
    return link;
}

export function makeSpan(text: string) {
    const span = document.createElement("span");
    span.textContent = text;
    return span;
}


/* basic view creator
export function makeAboutView() {

    //create a single element to contain the rest of the content
    const view = document.createElement('div');

    //create content
    const paragraph1 = makeParagraph('Test Words');

    //add content to the view
    view.appendChild(paragraph1)

    return view;
}
*/
