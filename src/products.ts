import { products } from "./products.json";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css?raw";

const coffeeMachines = products.filter(
  (product) => product.category == "Coffee Machine"
);
console.log("coffeeMachines", coffeeMachines);

const productList = document.querySelector("#product-list");
if (productList) {
  productList.innerHTML = "";
  coffeeMachines.forEach((product) => {
    const productTile = document.createElement("div");
    productTile.innerHTML = `<div class="col-12 col-sm-6 col-md-4">
        <coffee-party-product-tile>
            <h5 class="card-title placeholder-glow">
                ${product.name}
            </h5>
        </coffee-party-product-tile>
    </div>`;
    productList.appendChild(productTile);
  });
}

type Product = {
  id: string;
  name: string;
  category: string;
  product_image: string;
  short_description: string;
  long_description: string;
  price_sek: number;
};

export class ProductList extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({
      mode: "open",
    });
    this.attachInternals();

    // Attach bootstrap styles to shadow root
    const styleNode = document.createElement("style");
    styleNode.innerHTML = `${bootstrap}`;
    shadowRoot.appendChild(styleNode);

    coffeeMachines.forEach((product: Product) => {
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
      shadowRoot.appendChild(productTileContainer);
    });
  }
}
