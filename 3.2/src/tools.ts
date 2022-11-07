export function prevNextPageGenerate(offset:number, count:number) {
    const offsetStep = 10
    const prev = offset > offsetStep ? offset - offsetStep : offset > 0 ? 0 : -1
    const next = offset < count - offsetStep ? offset + offsetStep : -1
    return { prev, next }
}

export function pagesNumsGenerate(count:number) {
    const offsetStep = 5
    const pages = []
    for (let i=1; i<=count/offsetStep; i+=offsetStep) {
        pages.push({num: i, offset: (i-1)*offsetStep})
    }
}