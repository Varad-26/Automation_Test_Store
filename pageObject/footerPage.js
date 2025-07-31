class footer{

    clickFooterLink(link){
        return cy.get('.footerlinks').contains(link).click();
    }
}

export default footer;