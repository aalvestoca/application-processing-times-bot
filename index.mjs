import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch({
    //headless: false,
    //slowMo: 250, // slow down by 250ms
});
const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto('https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html');

// Set screen size.
//await page.setViewport({width: 1080, height: 1024});

// Type into search box.
// const tipusArray = await page.evaluate(async () => {
//     function delay(time) {
//         return new Promise(function (resolve) {
//             setTimeout(resolve, time)
//         });
//     }

//     await delay(3000)

//     const a = Array.from(document.getElementById('wb-auto-23').options)
//     return a.length ? a.map(element => element.value) : ["here"]
// });

//console.log(tipusArray)
// [
//   '',
//   'Temporary residence (visiting, studying, working)',
//   'Economic immigration',
//   'Family sponsorship',
//   'Refugees',
//   'Humanitarian and Compassionate cases',
//   'Passport',
//   'Citizenship',
//   'Permanent resident cards',
//   'Replacing or amending documents, verifying status'
// ]

delay(4000)

await page.select('#wb-auto-23', 'Humanitarian and Compassionate cases');

await page.click('.btn-submit')

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

delay(4000)

const text = await page.$("#result span.wb-data-json-inited", span => span.innerText);

console.log("-> " + text)

await browser.close()