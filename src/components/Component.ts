import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.css?raw";

export abstract class Component extends HTMLElement {
  constructor() {
    super();
  }

  protected getShadowRoot(): ShadowRoot {
    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      this.attachInternals();

      // Attach bootstrap styles to shadow root
      const styleNode = document.createElement("style");
      styleNode.innerHTML = `${bootstrap}`;
      shadowRoot.appendChild(styleNode);

      return shadowRoot;
    }

    return this.shadowRoot;
  }
}
