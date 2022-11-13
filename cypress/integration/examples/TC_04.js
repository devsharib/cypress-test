/// <reference types="cypress" />

//const { each } = require("cypress/types/jquery")

describe('TC_004_More complex scenrio', () =>{

    it("checkbox check/unchecked validation", () =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("[id='alertbtn']").click()     
        cy.get("[value='Confirm']").click()   
        cy.on('window:alert', (str) =>{
            expect(str).to.equals('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) =>{
            expect(str).to.equals('Hello , Are you sure you want to confirm?')
        })
        cy.get('#opentab').invoke('removeAttr', 'target').click()
  })
})  