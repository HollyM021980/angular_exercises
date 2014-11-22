var TitlesPage = function() {
    this.pageHeader = element(by.tagName('h1'));
    this.pageHeader2 = element(by.tagName('h2'));
    this.titles = element.all(by.repeater('title in titles'));
    this.nameField = element(by.css('#title-name'));
    this.submitBtn = element(by.css('form[name="upsertTitleForm"] button[type="submit"]'));

    this.get = function() {
        browser.get('http://localhost:5000/#/titles');
    };
};

describe('title page', function() {
    var titlePage;

    beforeEach(function() {
        titlePage = new TitlesPage();
        titlePage.get();
    });

    it('should have a h1 tag with the correct text', function() {
        expect(titlePage.pageHeader.getText()).toEqual('Titles page');
    });

    it('should have a h2 tag with the correct text', function() {
        expect(titlePage.pageHeader2.getText()).toEqual('Titles');
    });

    it('should have five titles', function() {
        expect(titlePage.titles.count()).toEqual(5);
    });

    it('should add a local title', function() {
        expect(titlePage.titles.count()).toEqual(5);

        titlePage.nameField.sendKeys('Cart Attendant');

        titlePage.submitBtn.click();

        expect(titlePage.titles.count()).toEqual(6);
    });
});
