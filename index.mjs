import puppeteer from 'puppeteer';
import { getApplicationTypes } from './applicationTypes.mjs';
import { getHumanitarianCasesTime } from './ProcessingTimes/humanitarianCases.mjs';

const URL = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html'
const OPEN_BROWSER = 0

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

const browser = await puppeteer.launch({
    headless: !OPEN_BROWSER,
});
const page = await browser.newPage();
await page.goto(URL);
await page.waitForSelector('select')

// const types = await getApplicationTypes(page, 'select')
// console.log(types)

await page.select( "select", 'Humanitarian and Compassionate cases');
await delay(2000)

const time = await getHumanitarianCasesTime(page, delay)
console.log(time)

await delay(1000)

if (!OPEN_BROWSER)
    await browser.close()