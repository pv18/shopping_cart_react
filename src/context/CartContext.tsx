import React, {createContext, useEffect, useState} from 'react';
import {IProduct, ITotal} from '../types/shared';
import {getProducts} from '../services/api';

interface ICartContext {
    cart: IProduct[],
    total: ITotal,
    deleteProduct: (id: number) => void,
    increase: (id: number) => void,
    decrease: (id: number) => void,
    changeValue: (id: number, value: number) => void
}

export const CartContext = createContext<Required<ICartContext>>({} as ICartContext)

export const CartProvider = (props: any) => {
    const [cart, setCart] = useState<IProduct[]>([]);
    const [total, setTotal] = useState<ITotal>({
        price: cart.reduce((acc, prod) => acc + (prod.price * prod.count), 0),
        count: cart.reduce((acc, prod) => acc + prod.count, 0),
    });

    useEffect(() => {
        getProducts().then((data) => {
            setCart(data.map(product => ({...product, count: 1})))
        })
    }, [])

    useEffect(() => {
        setTotal({
            price: cart.reduce((acc, prod) => acc + (prod.price * prod.count), 0),
            count: cart.reduce((acc, prod) => acc + prod.count, 0),
        })
    }, [cart])

    const deleteProduct = (id: number) => {
        setCart(cart.filter(product => product.id !== id))
    }

    const increase = (id: number) => {
        setCart(cart.map(product => product.id === id
            ? {
                ...product,
                count: ++product.count,
            }
            : product
        ))
    }

    const decrease = (id: number) => {
        setCart(cart.map(product => product.id === id
            ? {
                ...product,
                count: product.count - 1 > 1 ? product.count - 1 : 1,
            }
            : product
        ))
    }

    const changeValue = (id: number, value: number) => {
        setCart(cart.map(product => product.id === id
            ? {
                ...product,
                count: value,
            }
            : product
        ))
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                deleteProduct,
                increase,
                decrease,
                changeValue
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}