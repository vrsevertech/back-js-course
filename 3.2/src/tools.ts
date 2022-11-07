export function prevNextPageGenerate(offset:number, count:number) {
    const offsetStep = 10
    const prev = offset > offsetStep ? offset - offsetStep : offset > 0 ? 0 : -1
    const next = offset < count - offsetStep ? offset + offsetStep : -1
    return { prev, next }
}

export function pagesNumsGenerate(offset:number, count:number) {
    const offsetStep = 5
    const pages:{num:number,offset:number,current:boolean}[] = []
    for (let num=1; num<count/offsetStep+1; num++) {
        const pageOffset = (num-1)*offsetStep
        const current = pageOffset === offset 
        pages.push({num, offset: pageOffset, current})
    }
    return pages
}