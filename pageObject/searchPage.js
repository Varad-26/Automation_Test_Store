class searchPage{

    enterSearchField(product){
        cy.get('[name="filter_keyword"]').type(product);
        cy.get('.fa-search').click();
    }

    verifyNoResultFound(){
        cy.contains('There is no product that matches the search criteria.',{timeout:10000}).should('be.visible');
    }
}

export default searchPage;