const { expect } = require("chai");

Given("I open mynotebook", () => {
  cy.visit("http://localhost:3000/login");
});

And("I enter cred in login screen", () => {
  cy.get("input[type='email']").type("mis1@hacker.com");
  cy.get("input[type='password']").type("New@1234");
});

Then("I click on submit button", () => {
  cy.get("button[type='submit']").click();
});

Then("I click on signUp button", () => {
  cy.get('[href="/signup"]').click();
  cy.url().should("include", "/signup");
});
