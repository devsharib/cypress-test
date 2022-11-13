/// <reference types="cypress" />

//const { each } = require("cypress/types/jquery")

describe('TC_003_Checkbox_Validation', () =>{

    it("checkbox check/unchecked validation", () =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2')   
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1', 'option3'])
       // console.log( cy.get('select').select('Option3').text());
        cy.get('select').select('option3').should('have.value', 'option3')
       // cy.log( cy.get('#dropdown-class-example').invoke('text').then((txt) => resolve(txt.toString())))
       cy.get('#autocomplete').type('in')

       cy.get('.ui-menu-item div')
        .each(($el, index, $list) =>{
            if($el.text()==='India'){
                cy.log($el)
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
        cy.on('window:alert', (str) =>{

            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) =>{

            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get('#opentab').invoke('removeAttr', 'target').click()
    })
  })