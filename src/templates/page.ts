import sass from "/scss/styles.scss?url";
import html from "./page.html?raw";
import { Template, type TemplateConfig } from "./template";

export const pageTemplateConfig: TemplateConfig = {
  templateTagName: "coffee-page-template",
  tagName: "coffee-party-page",
  html: html.replaceAll("{STYLE_URL}", sass),
};

export class Page extends Template {
  constructor() {
    super(pageTemplateConfig);
  }
}
