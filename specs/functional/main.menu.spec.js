describe("Main menu", function() {
	it("displays app name", function() {
		browser.get('');
		expect(element(by.css('.navbar-brand')).getText()).toEqual("Books in Quito");
	});
});