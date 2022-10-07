export const priceFormatter = (value: number) => {
    const formatter = new Intl.NumberFormat
    return formatter.format(value)
}