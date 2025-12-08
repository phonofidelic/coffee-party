import html from "./product-skeleton.html?raw";
import { Template, type TemplateConfig } from "./template";

export const productSkeletonTemplateConfig: TemplateConfig = {
  templateTagName: "coffee-product-skeleton-template",
  tagName: "coffee-party-product-skeleton",
  html,
};

export class ProductSkeleton extends Template {
  constructor() {
    super(productSkeletonTemplateConfig);
  }
}
