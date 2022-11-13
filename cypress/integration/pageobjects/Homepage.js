class Homepage{

    getName(){
       return cy.get("div[class='form-group'] input[name='name']");
    }

    getGender(){
        return cy.get('select')
    }

    getNameText(){
        return cy.get("input[class='ng-untouched ng-pristine ng-valid']")
    }

    getEntrepunerRadioButton(){
        return cy.get("#inlineRadio3")
    }

    getShopLink(){
        return cy.get(":nth-child(2) > .nav-link")
    }
    
}

export default Homepage