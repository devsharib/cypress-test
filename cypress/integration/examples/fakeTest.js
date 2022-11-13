/// <reference types="cypress" />

//const { each } = require("cypress/types/jquery")

describe("Mock test suite", () => {
  it("Mock response body", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input[type='email']").type("mis1@hacker.com");
    cy.get("input[type='password']").type("New@1234");
    cy.intercept(
      {
        method: "GET",
        url: "http://localhost:5000/api/note/fetachallnotes",
      },
      {
        statusCode: 200,
        body: [
          {
            _id: "632f6039c986a4aae7b650c8",
            user: "62e98d43185f2f74ab6408b5",
            title: "Test note",
            description: "Mocking notes",
            tag: "General",
            Date: "2022-09-24T19:53:29.998Z",
            __v: 0,
          },
        ],
      }
    ).as("bookretrival");
    cy.get("button[type='submit']").click();
    cy.wait("@bookretrival");
  });
});
