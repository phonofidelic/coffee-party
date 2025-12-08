import html from "./navigation.html?raw";
import { Template, type TemplateConfig } from "./template";
import { Collapse } from "bootstrap";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export const navigationTemplateConfig: TemplateConfig = {
  templateTagName: "coffee-navigation-template",
  tagName: "coffee-party-navigation",
  html: html.replaceAll("{BASE_PATH}", import.meta.env.BASE_URL),
};

export class Navigation extends Template {
  // Use Bootstrap's Collapse API to control open/close behavior
  collapse?: Collapse;
  backdrop?: Element;
  toggleButton?: Element;
  navGroup?: Element;
  isOpen: boolean = false;
  constructor() {
    super(navigationTemplateConfig);
  }

  connectedCallback() {
    if (!this.shadowRoot) return;

    this.toggleButton =
      this.shadowRoot.querySelector("#coffee-party-nav-toggle-button") ??
      undefined;
    this.navGroup =
      this.shadowRoot.querySelector("#coffee-party-nav-group") ?? undefined;

    this.backdrop =
      this.shadowRoot.querySelector("#coffee-party-nav-backdrop") ?? undefined;

    if (this.navGroup && this.toggleButton && this.backdrop) {
      this.collapse = new Collapse(this.navGroup, { toggle: false });
      this.toggleButton.addEventListener("click", () => this.toggleOpen());
      this.backdrop.addEventListener("click", (event) =>
        this.onClickOutside(event)
      );
    }

    // Add the "active" class to the nav link if current location matches
    this.shadowRoot.querySelectorAll("a").forEach((link) => {
      if (link.pathname === window.location.pathname)
        return link.classList.add("active");

      link.classList.remove("active");
    });
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  private onClickOutside(event: Event) {
    if (!this.backdrop) return;

    if (event?.target == this.backdrop) {
      this.closeNavGroup();
    }
  }

  private toggleOpen(): void {
    if (!this.collapse || !this.navGroup || !this.backdrop) return;

    if (this.isOpen) {
      this.closeNavGroup();
    } else {
      this.openNavGroup();
    }
  }

  private openNavGroup(): void {
    if (!this.collapse || !this.navGroup || !this.backdrop) return;

    this.collapse.show();
    this.backdrop.classList.remove("z-n1", "opacity-0");
    this.backdrop.classList.add("z-1", "opacity-75");
    disableBodyScroll(this.navGroup);
    this.isOpen = true;
  }

  private closeNavGroup(): void {
    if (!this.collapse || !this.navGroup || !this.backdrop) return;

    this.collapse.hide();
    this.backdrop.classList.add("z-n1", "opacity-0");
    this.backdrop.classList.remove("z-1", "opacity-75");
    enableBodyScroll(this.navGroup);
    this.isOpen = false;
  }
}
