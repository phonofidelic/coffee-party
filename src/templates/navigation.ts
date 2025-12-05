import html from "./navigation.html?raw";
import { Template, type TemplateConfig } from "./template";

export const navigationTemplateConfig: TemplateConfig = {
  templateTagName: "coffee-navigation-template",
  tagName: "coffee-party-navigation",
  html: html.replaceAll("{BASE_PATH}", import.meta.env.BASE_URL),
};

export class Navigation extends Template {
  constructor() {
    super(navigationTemplateConfig);
  }
}
