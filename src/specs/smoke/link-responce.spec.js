import { httpGetFullResponse } from './../../utils/common.util';

import { customLinksProvider } from './../../utils/dataProviders/customLinks.provider';




function getLinks(url) {
  return browser
            .url(url)
            .pause(1000) // TODO: have to comeup with JS/DOM watch
            .getAttribute('<a />', 'href')
}

async function getAllLinks(pages) {
    let allLinks = [];
    for(const page of pages) {
        allLinks.push({
            url: page,
            links: await getLinks(page)
        });
    }
    return allLinks;
};



getAllLinks(customLinksProvider.data)
    .then((allLinks) => {
        initLinkTest(allLinks);
        run();
    }, (err) => {
        throw err;
    });


function initLinkTest(allLinks) {
    for (let url of allLinks) {
        let _url = url.url;
        let _allLinks = url.links;
        describe(`Check all hrefs in ${_url} `, () => {

            _allLinks.forEach((_url, i) => {
                it(`#${i}   ${_url} link should return 2xx or 3xx status code`, () => {
                    return httpGetFullResponse(_url)
                        .then((res) => {
                                return res.statusCode;
                        }, (err) => {
                            console.log(err);
                        }).should.eventually.equal(200);
                });
            });
        });
    }
}
