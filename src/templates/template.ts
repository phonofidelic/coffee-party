import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.css?raw";

export type TemplateConfig = {
  templateTagName: string;
  tagName: string;
  html: string;
};
export class Template extends HTMLElement {
  templateTagName: string;
  html: string;
  templateNode?: HTMLTemplateElement;
  constructor(config: TemplateConfig) {
    super();

    this.templateTagName = config.templateTagName;
    this.html = config.html;

    if (!this.shadowRoot) {
      // Create template element and add it to the document head
      this.templateNode = document.createElement("template");
      this.templateNode.id = this.templateTagName;
      this.templateNode.innerHTML = this.html;
      document.head.appendChild(this.templateNode);

      let template = document.getElementById(this.templateTagName);
      // @ts-ignore: ToDo: fix reading content prop from HTMLElement type
      let templateContent = template?.content;
      // const clone = document.importNode(templateContent, true);
      const shadowRoot = this.attachShadow({
        mode: "open",
        delegatesFocus: true,
        serializable: true,
      });
      this.attachInternals();

      // Attach bootstrap styles to shadow root
      const styleNode = document.createElement("style");
      styleNode.innerHTML = `${bootstrap}`;
      shadowRoot.appendChild(styleNode);

      // @ts-ignore
      shadowRoot.appendChild(template?.content.cloneNode(true));
    }
  }
}
