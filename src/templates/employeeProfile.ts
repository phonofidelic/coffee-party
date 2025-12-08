import html from "./employee-profile.html?raw";
import { Template, type TemplateConfig } from "./template";

export const employeeProfileConfig: TemplateConfig = {
  templateTagName: "coffee-employee-profile",
  tagName: "coffee-party-employee-profile",
  html,
};

export class EmployeeProfile extends Template {
  constructor() {
    super(employeeProfileConfig);
  }
}
