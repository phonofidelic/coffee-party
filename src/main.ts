import "./scss/styles.scss";
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
import {
  ProductTile,
  productTileTemplateConfig,
} from "./templates/productTile.ts";
import { ProductList } from "./components/ProductList.ts";
import {
  EmployeeProfile,
  employeeProfileConfig,
} from "./templates/employeeProfile.ts";
import { EmployeeProfileList } from "./components/EmployeeProfileList.ts";

// Register templates
customElements.define(pageTemplateConfig.tagName, Page);
customElements.define(headerTemplateConfig.tagName, Header);
customElements.define(sectionTemplateConfig.tagName, Section);
customElements.define(footerTemplateConfig.tagName, Footer);
customElements.define(navigationTemplateConfig.tagName, Navigation);
customElements.define(productSkeletonTemplateConfig.tagName, ProductSkeleton);
customElements.define(productTileTemplateConfig.tagName, ProductTile);
customElements.define(employeeProfileConfig.tagName, EmployeeProfile);

customElements.define("coffee-party-product-list", ProductList);
customElements.define(
  "coffee-party-employee-profile-list",
  EmployeeProfileList
);
