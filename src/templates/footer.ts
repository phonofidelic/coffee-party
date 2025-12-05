import html from "./footer.html?raw";
import { Template, type TemplateConfig } from "./template";

export const footerTemplateConfig: TemplateConfig = {
  templateTagName: "coffee-footer-template",
  tagName: "coffee-party-footer",
  html,
};

export class Footer extends Template {
  constructor() {
    super(footerTemplateConfig);
  }
}
