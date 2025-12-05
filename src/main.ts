import "/scss/styles.scss";
import { Footer } from "./templates/footer.ts";
import { Header } from "./templates/header.ts";

customElements.define(Header.tagName, Header);
customElements.define(Footer.tagName, Footer);
