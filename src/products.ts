import { products } from "./products.json";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css?raw";

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

export class ProductList extends HTMLElement {
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

  render() {
    const shadowRoot = this.getShadowRoot();
    if (!shadowRoot) return;

    // Reset list content
    shadowRoot.innerHTML = "";

    // Attach bootstrap styles to shadow root
    const styleNode = document.createElement("style");
    styleNode.innerHTML = `${bootstrap}`;
    shadowRoot.appendChild(styleNode);

    // Render products
    this.products.forEach((product: Product) => {
      const productTileContainer = document.createElement("div");
      productTileContainer.classList.add(
        "col-12",
        "col-sm-6",
        "col-md-4",
        "p-1"
      );
      productTileContainer.innerHTML = `<coffee-party-product-tile>
            <h5 slot="product-title" class="card-title placeholder-glow">
                ${product.name}
            </h5>
            <p slot="product-short-description" class="card-text">${
              product.short_description
            }</p>
            <button slot="product-buy" class="btn btn-primary">
            ${new Intl.NumberFormat("sv-se", {
              style: "currency",
              currency: "SEK",
            }).format(product.price_sek)}
            </button>
        </coffee-party-product-tile>`;
      this.shadowRoot?.appendChild(productTileContainer);
    });
  }

  private getShadowRoot(): ShadowRoot {
    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      this.attachInternals();

      // Attach bootstrap styles to shadow root
      const styleNode = document.createElement("style");
      styleNode.innerHTML = `${bootstrap}`;
      shadowRoot.appendChild(styleNode);

      return shadowRoot;
    }

    return this.shadowRoot;
  }
}
