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
    view.style.background = "white";
    const finalView = universalStyle(view);
    wrapper?.appendChild(finalView);
}

function clearMainWrapper() {
    const wrapper = document.getElementById("section-content");
    wrapper?.childNodes.forEach((childNode) => {
        wrapper.removeChild(childNode);

    });
    return wrapper;
}
export function universalStyle(view: HTMLElement) {
    view.style.fontFamily = "Trebuchet MS";
    view.style.margin = "20px";
    view.style.padding = "5px";
    view.style.width = "max-content";
    
    return view;
}