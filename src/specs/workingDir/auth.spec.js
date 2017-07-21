var expect = require('chai').expect;
var assert = require('assert');
var discoverPage = require('../../pageObjects/discover.page');
var storePage = require('../../pageObjects/store.page');

describe('Click Location button', function () {
    let DiscoverPage = new discoverPage();
        DiscoverPage.open();

    it('should show the correct Hero headline', function () {
        //Verify that Hero headline is correct
        var heroHeadline = DiscoverPage.getHeroHeadline();
        assert.equal(heroHeadline, "Discover inspiring\nprograms happening\nnear you.");
    });
    it('should click button', function () {
        

        //DiscoverPage.clickLocationButton();
        DiscoverPage.locationPill.click();
        browser.pause(3000);
        console.log("Clicked Location Button");
        //expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
    });

});