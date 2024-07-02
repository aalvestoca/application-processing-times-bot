export async function getHumanitarianCasesTime(page, delayMethod) {
    await page.click('.btn-submit')
    await delayMethod(10000)
    const time = await page.evaluate(_ => document.querySelectorAll("#result .panel span")[1].innerText);
    return time
}
