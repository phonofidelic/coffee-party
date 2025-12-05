import sass from "/scss/styles.scss?url";
import html from "./footer.html?raw";

const TEMPLATE_TAG_NAME = "coffee-footer-template";

export class Footer extends HTMLElement {
  static templateTagName = TEMPLATE_TAG_NAME;
  static tagName = "coffee-party-footer";
  constructor() {
    super();

    // Get template html and add it to the document head
    const templateNode = document.createElement("template");
    templateNode.id = TEMPLATE_TAG_NAME;
    templateNode.innerHTML = html;
    document.head.appendChild(templateNode);

    let template = document.getElementById(TEMPLATE_TAG_NAME);
    // @ts-ignore: ToDo: fix reading content prop from HTMLElement type
    let templateContent = template?.content;
    const clone = document.importNode(templateContent, true);
    const shadowRoot = this.attachShadow({ mode: "open" });
    this.attachInternals;

    // Attach custom styles
    const styleNode = document.createElement("style");
    styleNode.innerHTML = `@import url("${sass}");`;
    shadowRoot.appendChild(styleNode);

    shadowRoot.appendChild(clone);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`
    );
  }
}
