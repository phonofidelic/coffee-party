import html from "./product-tile.html?raw";
import { Template, type TemplateConfig } from "./template";

export const productTileTemplateConfig: TemplateConfig = {
  templateTagName: "coffee-product-tile-template",
  tagName: "coffee-party-product-tile",
  html,
};

export class ProductTile extends Template {
  constructor() {
    super(productTileTemplateConfig);
  }
}
