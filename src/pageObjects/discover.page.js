"use strict";

var Page = require('./basePage.page.js')

var simplePageresponseObject = require('./simpleResponse.page.js');

class DiscoverPage {
    constructor() {
		this.title = 'base Page';
        var locationPill = '.pill-large.location.icon-geolocation.icon-before';
        var selectCountry = '#select-country';
        var selectState = '#select-state';
        var selectStore = '#select-store';

        var confirmButton = '#location-confirm';



	}
	 open() {
		browser.url('http:www.apple.com/today');
	}

    get locationPill() {
        return $('.pill-large.location.icon-geolocation.icon-before');
    }

      storeSelectorDefault(){
         return $('#select-store').getText('option:checked');
    }

      countrySelectorDefault(){
         return $('#select-country').getText('option:checked'); 
    }

      stateSelectorDefault(){
         return $('#select-state').getText('option:checked');
    }

      locationPillDefaultText(){
         return $('#program-location-label').getText();
         //console.log(selectBox.getText('option:checked'));  typography-hero-headline
    }

      getHeroHeadline(){
         return $('.typography-hero-headline').getText();
         //console.log(selectBox.getText('option:checked'));  typography-hero-headline
    }

    

    


    // get username()  { return browser.element('#username'); }
    // get password()  { return browser.element('#password'); }
    // get form()      { return browser.element('#login'); }
    // get flash()     { return browser.element('#flash'); }
    
    
    // submit() {
    //     this.form.submitForm();
    // }
    
    get currentStore() {
        return $('#program-location-label');
    }
    /**
     * "en_AU","nl_BE","fr_BE","pt_BR","en_CA","fr_CA","zh_CN","fr_FR","de_DE,"zh_HK">,"en_HK","it_IT","ja_JP"
     * "zh_MO","es_MX","nl_NL","en_SG","es_ES","sv_SE","fr_CH","de_CH","tr_TR","en_AE","en_GB","en_US"
     */
    get selectCountry() {
        var countryBox = $('#select-country');
        countryBox.selectByAttribute('value', 'en_US');

        //browser.pause(3000);
        return countryBox.selectByAttribute('value', 'en_US');  
    } 

    /**
     * This needs to be selected based on the language, so "value" will be numeric order of item
     */
    get selectState() {
        return $('#select-state').selectByAttribute('value', 'California');
    } 

    /**
     * This needs to be selected based on the language, so "value" will be numeric order of item
     */
    get selectStore() {
        return $('#select-store').selectByAttribute('value', 'valleyfair');
    } 

    //============== Buttons ==================
    
    //Location Pill button
    get locationPill() {
        return $('.pill-large.location.icon-geolocation.icon-before');
    }

    // "Confirm" button in location modal
    get confirmButton() {
        return $('#location-confirm');
    }

    // "Details" button in schedule section
    get detailsEventButton() {
        return $('.details-link.pill');
    }
    //============== Buttons End ==============

}
module.exports = DiscoverPage;