/// <reference types="cypress" />

//const { each } = require("cypress/types/jquery")

describe("Mock test suite", () => {
  it("Mock response body", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (request) => {
        request.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=islams";
        request.continue((response) => {
          //cy.log(response.body);
          expect(response.statusCode).to.equal(404);
        });
      }
    ).as("dummyURL");
    cy.get(".btn.btn-primary").click();
    cy.wait("@dummyURL");
  });
});
