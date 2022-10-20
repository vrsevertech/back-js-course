export function prevNextPageGenerate(offset:number, count:number) {
    const step = 10
    let prev = offset > step ? offset - step : offset > 0 ? 0 : -1
    let next = offset < count - step ? offset + step : -1
    return { prev, next }
}
