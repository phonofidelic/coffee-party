import html from "./footer.html?raw";

const TEMPLATE_TAG_NAME = "coffee-footer-template";

class Footer extends HTMLElement {
  static templateTagName = TEMPLATE_TAG_NAME;
  static tagName = "coffee-party-footer";
  constructor() {
    super();

    console.log(html);
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
    shadowRoot.appendChild(clone);
  }

  connectedCallback() {
    console.log("connected");
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`
    );
  }
}

// customElements.define("coffee-party-footer", Footer);

export { Footer };
