/// <reference types="cypress" />

//const { each } = require("cypress/types/jquery")

describe('TC_001_Validate_Name', () =>{

    it("Name validation", () =>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(5000)
        cy.get('.products:visible').as('productsLocator')
       // cy.get('.product:visible').should('have.length',4)
       cy.get('@productsLocator').find('.product').should('have.length', 4)
       // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@productsLocator').find('.product')
        .each(($el, index, $list) =>{
            let productText=$el.find('h4.product-name').text();
            if(productText.includes('Cashews - 1 Kg')){
                cy.wrap($el).find('button').click();
                    
            }
        })

        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text)
        })
      //  cy.get('.brand').should('have.text', 'GREENKART')
    })
  })