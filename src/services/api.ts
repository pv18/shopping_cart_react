import {IProduct} from '../types/shared';

const API_URL = 'https://fakestoreapi.com'

export const getProducts = ():Promise<IProduct[]> => {
    return fetch( API_URL + '/products?limit=3')
        .then(response => response.json())
}