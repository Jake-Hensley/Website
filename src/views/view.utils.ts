

export function makeParagraph(text = "") {
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

export function renderView(view: HTMLElement) {
    const wrapper = clearMainWrapper();
    wrapper?.appendChild(view);
}

function clearMainWrapper() {
    const wrapper = document.getElementById("section-content");
    wrapper?.childNodes.forEach((childNode) => {
        wrapper.removeChild(childNode);

    });
    return wrapper;
}

/* basic view creator
export function makeAboutView() {
    const view = document.createElement('div');
    view.appendChild(...);
    return view;
}
*/
