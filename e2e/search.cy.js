import searchPage from "../support/pageObject/searchPage";

describe('Search Functionality', () => {

    const search = new searchPage();

    beforeEach(() => {
          cy.visit("https://automationteststore.com/");
    });

    it('Searches for valid Products', () => {
        search.enterSearchField('skincare');
        search.verifyNoResultFound('skincare');    
    });

    it('Verify Search is Case Sensitive', () => {
        search.enterSearchField('SKINCARE');
        search.verifyNoResultFound('skincare');
    });

    it('Shows Appropriate Message when NO result MATCHES', () => {
        search.enterSearchField('hkell123@');
        search.verifyNoResultFound();
    });
});
