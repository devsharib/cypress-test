/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
//const { each } = require("cypress/types/jquery")

import "cypress-iframe";
describe("TC_002_Validate_Cart", () => {
  it("Add to cart validation", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    // cy.get('.search-keyword').type('ca')
    // cy.wait(4000)
    // cy.get('.products:visible').as('productsLocator')
    // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    // cy.get('.cart-icon > img').click();
    // cy.contains('PROCEED TO CHECKOUT').click();
    // cy.contains('Place Order').click();
    // cy.wait(4000)
  });
});
