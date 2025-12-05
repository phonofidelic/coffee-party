import html from "./header.html?raw";
import { Template, type TemplateConfig } from "./template";

export const headerTemplateConfig: TemplateConfig = {
  templateTagName: "coffee-header-template",
  tagName: "coffee-party-header",
  html,
};
export class Header extends Template {
  constructor() {
    super(headerTemplateConfig);
  }
}
