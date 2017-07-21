var expect = require('chai').expect;
var assert = require('assert');
var discoverPage = require('../pageObjects/discover.page');
var storePage = require('../pageObjects/store.page');

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
    describe('Verify location modal default values', function () {
        it('should show correct store by default', function () {
            //Verify that location modal STORE default value is correct
            var currentStore = DiscoverPage.storeSelectorDefault();
            assert.equal($('#select-country').getText('option:checked'), "Santa Clara, Valley Fair");
        });
        it('should show correct country by default', function () {
            //Verify that location modal COUNTRY default value is correct
            var currentCountry = DiscoverPage.countrySelectorDefault();
            assert.equal(currentCountry, "United States");
        });
        it('should show correct state by default', function () {
            //Verify that location modal COUNTRY default value is correct
            var currentState = DiscoverPage.stateSelectorDefault();
            assert.equal(currentState, "California");
        });
        it('location pill should show the closest area/city to current location by default', function () {
            //Verify that location pill show correct value (the closest city/area to current location)
            var currentText = DiscoverPage.locationPillDefaultText();
            assert.equal(currentText, "Santa Clara area");
        });
    });

    it('should click button', function () {
        let StorePage = new storePage();
        StorePage.open();

        //StorePage clickLocationButton();
        StorePage.locationPill.click();
        browser.pause(3000);
        console.log("Clicked Location Button");
        //expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
    });
});

describe('Select Location', function () {
    let DiscoverPage = new discoverPage();
    DiscoverPage.open();
    it('Should click location button and select Country', function () {
        console.log("==========  TEST STARTED ==============");
        DiscoverPage.open();
        DiscoverPage.locationPill.click();
        console.log("Clicked Location Button");

        DiscoverPage.selectCountry;
        console.log("Selected USA and clicked on it");
        console.log("==========  TEST COMPLETED ==============");
    });

    it('Should click location button and select State', function () {
        console.log("==========  TEST STARTED ==============");
        DiscoverPage.open();
        DiscoverPage.locationPill.click();
        console.log("Clicked Location Button");

        DiscoverPage.selectCountry;
        console.log("Selected USA and clicked on it");

        DiscoverPage.selectState;
        console.log("Selected California and clicked on it");

        console.log("==========  TEST COMPLETED ==============");
    });

    it('Should click location button and select State and Store', function () {
        console.log("==========  TEST STARTED ==============");
        DiscoverPage.open();
        DiscoverPage.locationPill.click();
        console.log("Clicked Location Button");

        DiscoverPage.selectCountry;
        console.log("Selected USA and clicked on it");

        DiscoverPage.selectState;
        console.log("Selected California and clicked on it");

        DiscoverPage.selectStore;
        console.log("Selected Santa Clara and clicked on it");

        console.log("==========  TEST COMPLETED ==============");
    });

    it('Should select location and Click Confirm button', function () {
        console.log("==========  TEST STARTED ==============");
        DiscoverPage.open();

        DiscoverPage.locationPill.click();
        console.log("Clicked Location Button");

        DiscoverPage.selectCountry;
        console.log("Selected USA and clicked on it");

        DiscoverPage.selectState;
        console.log("Selected California and clicked on it");

        DiscoverPage.selectStore;
        console.log("Selected Santa Clara and clicked on it");

        DiscoverPage.confirmButton.click();
        console.log("Clicked 'Confirm' button");

        expect(DiscoverPage.currentStore.getText()).to.be.equal("Santa Clara area");

        console.log("==========  TEST COMPLETED ==============");
    });

    it('Should select location and Click Confirm button', function () {
        console.log("==========  TEST STARTED ==============");

        DiscoverPage.open();
        console.log("Type of DiscoverPage.detailsEventButton is: ", typeof DiscoverPage.detailsEventButton);

        for (var prop in DiscoverPage.detailsEventButton) {
            console.log(prop + ': ' + DiscoverPage.detailsEventButton[prop]);
        }

        //expect((DiscoverPage.currentStore).getText()).to.be.equal("Santa Clara area");        

        console.log("==========  TEST COMPLETED ==============");
    });
});