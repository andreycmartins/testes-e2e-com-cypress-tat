import { environments } from "eslint-plugin-cypress";

it("successfully logs in", () => {
  cy.intercept("GET", "**/notes").as("getNotes");

  cy.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"), {
    cacheSession: true,
  });
  
  cy.wait("@getNotes");
});
