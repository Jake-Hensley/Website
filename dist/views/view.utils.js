export function makeParagraph(text = "") {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}
export function makeLink(href, label, newTab = false) {
    const link = document.createElement("a");
    link.setAttribute("href", href);
    link.textContent = label;
    if (newTab) {
        link.setAttribute("target", "_blank");
    }
    return link;
}
export function makeSpan(text) {
    const span = document.createElement("span");
    span.textContent = text;
    return span;
}
export function renderView(view) {
    const wrapper = clearMainWrapper();
    wrapper === null || wrapper === void 0 ? void 0 : wrapper.appendChild(view);
}
function clearMainWrapper() {
    const wrapper = document.getElementById("section-content");
    wrapper === null || wrapper === void 0 ? void 0 : wrapper.childNodes.forEach((childNode) => {
        wrapper.removeChild(childNode);
    });
    return wrapper;
}
//# sourceMappingURL=view.utils.js.map