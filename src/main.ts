import "/scss/styles.scss";
import { Footer, footerTemplateConfig } from "./templates/footer.ts";
import { Header, headerTemplateConfig } from "./templates/header.ts";
import {
  Navigation,
  navigationTemplateConfig,
} from "./templates/navigation.ts";

// Register templates
customElements.define(headerTemplateConfig.tagName, Header);
customElements.define(footerTemplateConfig.tagName, Footer);
customElements.define(navigationTemplateConfig.tagName, Navigation);
