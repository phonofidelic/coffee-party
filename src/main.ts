import { Page, pageTemplateConfig } from "./templates/page.ts";
import { Footer, footerTemplateConfig } from "./templates/footer.ts";
import { Header, headerTemplateConfig } from "./templates/header.ts";
import {
  Navigation,
  navigationTemplateConfig,
} from "./templates/navigation.ts";
import { Section, sectionTemplateConfig } from "./templates/section.ts";
import {
  ProductSkeleton,
  productSkeletonTemplateConfig,
} from "./templates/productSkeleton.ts";

// Register templates
customElements.define(pageTemplateConfig.tagName, Page);
customElements.define(headerTemplateConfig.tagName, Header);
customElements.define(sectionTemplateConfig.tagName, Section);
customElements.define(footerTemplateConfig.tagName, Footer);
customElements.define(navigationTemplateConfig.tagName, Navigation);
customElements.define(productSkeletonTemplateConfig.tagName, ProductSkeleton);
