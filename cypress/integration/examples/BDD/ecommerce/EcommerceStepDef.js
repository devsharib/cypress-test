import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Homepage from "../../../pageobjects/Homepage";

const homePage = new Homepage();
Given("I open Ecommerce homepage", () => {
  cy.visit(Cypress.env("url"));
});

Given("I open mynotebook login page", () => {
  cy.visit("http://localhost:3000/login");
});

And("I enter username and password in login screen", (table) => {
  table.hashes().forEach((row) => {
    cy.get("input[type='email']").type(row.username);
    cy.get("input[type='password']").type(row.password);

    cy.wait(5000);
  });
});

Then("I click on login button", () => {
  cy.get("button[type='submit']").click();
});
When("I added multiple product into cart", function (dataTable) {
  homePage.getName().type(dataTable.rawTable[1][1]);
  homePage.getGender().select(dataTable.rawTable[1][0]);
  homePage.getNameText().should("have.value", dataTable.rawTable[1][1]);
  homePage.getName().should("have.attr", "minlength", "2");
  homePage.getEntrepunerRadioButton().should("be.disabled");
  homePage.getShopLink().click();
  this.data.productName.forEach((element) => {
    cy.selectProduct(element);
  });
});

And("Perform complete checkout", () => {
  cy.contains("Checkout").click();
  cy.contains("Checkout").click();
  cy.get("#country").type("India");
  // cy.wait(17000)
  Cypress.config();
  cy.get("div[class='suggestions'] ul li a").click();
  cy.wait(7000);
  cy.get("label[for='checkbox2']").click();
  cy.contains("Purchase").click();
  cy.get("div[class='alert alert-success alert-dismissible'] strong").then(
    function (element) {
      const actualText = element.text();
      cy.log(actualText);
      cy.debug();
      expect(actualText).to.equal("Success!");
    }
  );
});

Then("Verify the success message", () => {
  cy.get("div[class='alert alert-success alert-dismissible'] strong").then(
    function (element) {
      const actualText = element.text();
      cy.log(actualText);
      cy.debug();
      expect(actualText).to.equal("Success!");
    }
  );
});
