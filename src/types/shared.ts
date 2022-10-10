export interface Rating {
    rate: number;
    count: number;
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
    count: number;
}

export interface ITotal {
    price: number,
    count: number
}