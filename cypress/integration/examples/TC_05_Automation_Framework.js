/// <reference types="cypress" />

import Homepage from "../pageobjects/Homepage";

//const { each } = require("cypress/types/jquery")
const homePage = new Homepage();
describe("TC_004_More complex scenrio", () => {
  let dataSet;
  before(function () {
    cy.fixture("example").then(function (data) {
      //console.log(data);
      dataSet = data;
    });
  });

  it("checkbox check/unchecked validation", () => {
    cy.visit(Cypress.env("url"));
    homePage.getName().type(dataSet.name);
    homePage.getGender().select(dataSet.gender);
    homePage.getNameText().should("have.value", dataSet.name);
    homePage.getName().should("have.attr", "minlength", "2");
    homePage.getEntrepunerRadioButton().should("be.disabled");
    homePage.getShopLink().click();
    dataSet.productName.forEach((element) => {
      cy.selectProduct(element);
    });

    cy.wait(7000);
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
});
