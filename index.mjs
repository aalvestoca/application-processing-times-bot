import puppeteer from 'puppeteer';
import { getApplicationTypes } from './applicationTypes.mjs';
import { getHumanitarianCasesTime } from './ProcessingTimes/humanitarianCases.mjs';
import { getRefugeesTime } from './ProcessingTimes/refugees.mjs';

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

const arr = []
arr.push(await getHumanitarianCasesTime(page, delay))
arr.push(await getRefugeesTime(page, delay))

console.log(arr)

await delay(1000)

if (!OPEN_BROWSER)
    await browser.close()