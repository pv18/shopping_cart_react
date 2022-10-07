export interface IProduct {
    id: number
    img: string
    title: string
    count: number
    price: number
    priceTotal: number
}

export interface ITotal {
    price: number,
    count: number
}