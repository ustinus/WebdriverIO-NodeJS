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

    get confirmButton() {
        return $('#location-confirm');
    }


}
module.exports = new DiscoverPage();