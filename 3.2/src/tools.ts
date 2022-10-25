export function prevNextPageGenerate(offset:number, count:number) {
    const offsetStep = 10
    const prev = offset > offsetStep ? offset - offsetStep : offset > 0 ? 0 : -1
    const next = offset < count - offsetStep ? offset + offsetStep : -1
    return { prev, next }
}