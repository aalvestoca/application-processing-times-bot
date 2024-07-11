export async function getHumanitarianCasesTime(page, delay) { 

    const obj = { name: 'Humanitarian and compassionate cases', arr: [] }
    await page.select('select:nth-of-type(1)', obj.name)
    await delay(2000)

    obj.arr.push({name: "Humanitarian and compassionate cases"})

    await page.select('select:nth-of-type(2)', "Outside Quebec")
    await delay(2000)
    await page.click('.btn-submit')
    await delay(10000)
    obj.arr[0].OutsideQuebec = await page.evaluate(_ => document.querySelectorAll("#result .panel span")[1].innerText);
    await page.select('select:nth-of-type(2)', "In Quebec")
    await delay(2000)
    await page.click('.btn-submit')
    await delay(10000)
    obj.arr[0].InQuebec = await page.evaluate(_ => document.querySelectorAll("#result .panel span")[1].innerText);   

    return obj
}
