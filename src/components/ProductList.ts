import { products } from "../products.json";
import { Component } from "./Component";

export class ProductList extends Component {
  static observedAttributes = ["category"];
  private products: Product[] = [];

  constructor() {
    super();
  }

  attributeChangedCallback(_name: string, _oldValue: string, newValue: string) {
    if (isCategory(newValue)) {
      this.products = products
        .filter((product) => isProduct(product))
        .filter((products) => products.category === newValue);
    }

    this.render();
  }

  private render(): void {
    const shadowRoot = this.getShadowRoot();
    if (!shadowRoot) return;

    this.setShadowRootStyleNode(shadowRoot);

    // ToDo: Add info-tile as first item
    const tileElements: HTMLElement[] = [];
    // Render products
    this.products.forEach((product: Product) => {
      const productTileContainer = document.createElement("div");
      productTileContainer.classList.add(
        "col-12",
        "col-sm-6",
        "col-lg-3",
        "px-4",
        "pb-4",
        "px-sm-1",
        "pb-sm-2"
      );
      productTileContainer.innerHTML = `<coffee-party-product-tile>
      <img slot="product-image" src="${
        product.product_image
      }" class="card-img-top object-fit-cover bg-primary-subtle" style="height: 18rem" />
      <h4 slot="product-title" class="card-title mb-auto fs-6 fw-bold">
                ${product.name}
            </h4>
            <p slot="product-short-description" class="card-text mb-auto">${
              product.short_description
            }</p>
            <button slot="product-buy" class="btn btn-primary">
            ${new Intl.NumberFormat("sv-se", {
              style: "currency",
              currency: "SEK",
            }).format(product.price_sek)}
            </button>
        </coffee-party-product-tile>`;
      tileElements.push(productTileContainer);
    });

    tileElements.forEach((element) => {
      this.shadowRoot?.appendChild(element);
    });
  }
}

const CATEGORY_COFFEE_MACHINES = "Coffee Machine";
const CATEGORY_COFFEE_BEANS = "Coffee Beans";
const CATEGORY_EVENTS = "Event";

type ProductCategory =
  | typeof CATEGORY_COFFEE_MACHINES
  | typeof CATEGORY_COFFEE_BEANS
  | typeof CATEGORY_EVENTS;

type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  product_image: string;
  short_description: string;
  long_description: string;
  price_sek: number;
};

function isCategory(maybeCategory: any): maybeCategory is ProductCategory {
  if (
    ![
      CATEGORY_COFFEE_MACHINES,
      CATEGORY_COFFEE_BEANS,
      CATEGORY_EVENTS,
    ].includes(maybeCategory)
  )
    return false;

  return true;
}

function isProduct(maybeProduct: any): maybeProduct is Product {
  if (typeof maybeProduct.id !== "string") return false;
  if (typeof maybeProduct.name !== "string") return false;
  if (typeof maybeProduct.product_image !== "string") return false;
  if (typeof maybeProduct.short_description !== "string") return false;
  if (typeof maybeProduct.long_description !== "string") return false;
  if (typeof maybeProduct.price_sek !== "number") return false;
  return isCategory(maybeProduct.category);
}
