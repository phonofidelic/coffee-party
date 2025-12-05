import html from "./navigation.html?raw";
import { Template, type TemplateConfig } from "./template";

export const navigationTemplateConfig: TemplateConfig = {
  templateTagName: "coffee-navigation-template",
  tagName: "coffee-navigation",
  html,
};

export class Navigation extends Template {
  constructor() {
    super(navigationTemplateConfig);
  }
}
