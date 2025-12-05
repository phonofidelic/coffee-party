import html from "./section.html?raw";
import { Template, type TemplateConfig } from "./template";

export const sectionTemplateConfig: TemplateConfig = {
  templateTagName: "coffee-section-template",
  tagName: "coffee-party-section",
  html,
};
export class Section extends Template {
  constructor() {
    super(sectionTemplateConfig);
  }
}
