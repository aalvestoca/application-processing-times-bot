export async function getApplicationTypes(page, selector) {
    const types = await page.evaluate(async s => {
        const arr = Array.from(document.querySelector(s).options)
        return arr.length ? arr.map(element => element.value) : []
    }, selector);
    return types
}

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