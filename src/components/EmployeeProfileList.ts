import { people } from "../people.json";
import { employeeProfileConfig } from "../templates/employeeProfile";
import { Component } from "./Component";

export class EmployeeProfileList extends Component {
  private employees: Employee[] = [];

  constructor() {
    super();

    this.employees = people.filter((employee) => isEmployee(employee));
    console.log("employees:", this.employees);
    this.render();
  }

  attributeChangedCallback(
    _name: string,
    _oldValue: string,
    _newValue: string
  ) {
    this.employees = people.filter((employee) => isEmployee(employee));
    this.render();
  }

  private render(): void {
    console.log("render");
    const shadowRoot = this.getShadowRoot();
    if (!shadowRoot) return;

    this.setShadowRootStyleNode(shadowRoot);

    this.employees.forEach((employee) => {
      const employeeProfileContainer = document.createElement("div");
      employeeProfileContainer.innerHTML = `<${employeeProfileConfig.tagName}>
        <img slot="profile-image" class="img-fluid object-fit-cover  h-100" src="${
          employee.profile_image
        }" alt="Profile image of ${employee.name}" />
        <div slot="profile-header">
        <h4 class="card-title">${employee.name}</h4>
        <h3 class="text-primary fs-6 fw-bold">${employee.title}</h3>
        </div>
        <p slot="profile-info" class="card-text">${employee.profile_info}</p>
        <div slot="profile-contact-email" class="w-100 col-6 mb-2" style="font-size: .9rem;">
          <h5 class="fs-6 mb-0">Email:</h5>
          <a class="text-nowrap" href="mailto:${employee.contact.email}">${
        employee.contact.email
      }
        </a>
        </div>
        <div slot="profile-contact-phone" class="w-100 col-6 mb-2" style="font-size: .9rem;">
          <h5 class="fs-6 mb-0">Phone:</h5>
          <a class="text-nowrap" href="tel:${employee.contact.phone.replaceAll(
            /\s/g,
            ""
          )}">${employee.contact.phone}</a>
        </div>
        <div slot="profile-contact-linkedin" class="w-100 col-6 mb-2" style="font-size: .9rem;">
          <h5 class="fs-6 mb-0">LinkedIn:</h5>
          <a
            class="text-nowrap"
            href="${employee.contact.linkedin}"
            target="_blank"
            >${employee.contact.linkedin.replace("https://www.", "")}</a
          >
        </div>
        <div slot="profile-contact-office-address" class="w-100 col-6 mb-2" style="font-size: .9rem;">
            <h5 class="fs-6 mb-0">Office address:</h5>
            <p class="">${employee.contact.office_address.replaceAll(
              ", ",
              ",<br/>"
            )}</p>
          </p>
        </div>
      </${employeeProfileConfig.tagName}>`;
      this.shadowRoot?.appendChild(employeeProfileContainer);
    });
  }
}

type Employee = {
  name: string;
  title: string;
  company: string;
  profile_image: string;
  profile_info: string;
  contact: ContactInfo;
};

type ContactInfo = {
  email: string;
  phone: string;
  office_address: string;
  website: string;
  linkedin: string;
};

function isContactInfo(maybeContactInfo: any): maybeContactInfo is ContactInfo {
  if (typeof maybeContactInfo.email !== "string") return false;
  if (typeof maybeContactInfo.phone !== "string") return false;
  if (typeof maybeContactInfo.office_address !== "string") return false;
  if (typeof maybeContactInfo.website !== "string") return false;
  if (typeof maybeContactInfo.linkedin !== "string") return false;
  return true;
}

function isEmployee(maybeEmployee: any): maybeEmployee is Employee {
  if (typeof maybeEmployee.name !== "string") return false;
  if (typeof maybeEmployee.title !== "string") return false;
  if (typeof maybeEmployee.company !== "string") return false;
  if (typeof maybeEmployee.profile_image !== "string") return false;
  if (typeof maybeEmployee.profile_info !== "string") return false;
  return isContactInfo(maybeEmployee.contact);
}
