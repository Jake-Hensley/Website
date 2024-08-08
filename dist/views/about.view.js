import { makeLink, makeParagraph, makeSpan } from "./view.utils";
const paragraph1 = [
    makeSpan("This website is being developed using "),
    makeLink("https://medium.com/swlh/refactoring-a-static-html-site-into-typescript-part-1-of-2-the-content-b4c975ecab00", "this"),
    makeSpan(" article written by Prof. Simon Lutterbie."),
];
export function makeAboutView() {
    const view = document.createElement('div');
    const para1 = makeParagraph();
    paragraph1.forEach((segment) => {
        para1.appendChild(segment);
    });
    view.appendChild(para1);
    return view;
}
//# sourceMappingURL=about.view.js.map