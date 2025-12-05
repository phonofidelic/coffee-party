import "/scss/styles.scss";
import { Footer, footerTemplateConfig } from "./templates/footer.ts";
import { Header, headerTemplateConfig } from "./templates/header.ts";

customElements.define(headerTemplateConfig.tagName, Header);
customElements.define(footerTemplateConfig.tagName, Footer);
