// import Handlebars from "handlebars";
import "/scss/styles.scss";
import { Footer } from "./templates/footer.ts";
import { Header } from "./templates/header.ts";

class BootstrapStyles extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<style>@import url("./scss/styles.scss");</style>`;
    const shadowRoot = this.attachShadow({ mode: "open" });
    this.attachInternals;
    shadowRoot.appendChild(this);
  }
}

customElements.define("coffee-party-bootstrap-styles", BootstrapStyles);
customElements.define(Header.tagName, Header);
customElements.define(Footer.tagName, Footer);
