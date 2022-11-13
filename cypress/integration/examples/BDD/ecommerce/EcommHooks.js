beforeEach(function(){

    cy.fixture('example').then( function(data){
        //console.log(data);
        this.data = data;
    })
})