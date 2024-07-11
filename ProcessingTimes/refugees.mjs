export async function getRefugeesTime(page, delay) {

    const obj = { name: 'Refugees', arr: [] }
    await page.select('select:nth-of-type(1)', obj.name)
    await delay(2000)

    obj.arr.push({name: "Protected persons and convention refugees (in Canada)"})
    await page.select('select:nth-of-type(2)', obj.arr[0].name)
    await delay(2000)
    await page.select('select:nth-of-type(3)', "Outside Quebec")
    await delay(2000)
    await page.click('.btn-submit')
    await delay(10000)
    obj.arr[0].OutsideQuebec = await page.evaluate(_ => document.querySelectorAll("#result .panel span")[1].innerText);
    await page.select('select:nth-of-type(3)', "In Quebec")
    await delay(2000)
    await page.click('.btn-submit')
    await delay(10000)
    obj.arr[0].InQuebec = await page.evaluate(_ => document.querySelectorAll("#result .panel span")[1].innerText);    

    obj.arr.push({name: "Dependents of protected persons"})
    await page.select('select:nth-of-type(2)', obj.arr[1].name)
    await delay(2000)

    await page.click('.btn-submit')
    await delay(10000)
    obj.arr[1].AnyWhere = await page.evaluate(_ => document.querySelectorAll("#result .panel span")[1].innerText);

    return obj
}
