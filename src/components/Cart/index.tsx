import React, {useEffect, useState} from 'react';
import {CartHeader} from '../CartHeader';
import {Product} from '../Product';
import {CartFooter} from '../CartFooter';
import data from './../../data';
import {IProduct, ITotal} from '../../types/shared';

export const Cart = () => {
    const [cart, setCart] = useState<IProduct[]>(data);
    const [total, setTotal] = useState<ITotal>({
        price: cart.reduce((acc, prod) => acc + prod.priceTotal, 0),
        count: cart.reduce((acc, prod) => acc + prod.count, 0),
    });

    useEffect(() => {
        setTotal({
            price: cart.reduce((acc, prod) => acc + prod.priceTotal, 0),
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
                priceTotal: product.price * product.count
            }
            : product
        ))
    }

    const decrease = (id: number) => {
        setCart(cart.map(product => product.id === id
            ? {
                ...product,
                count: product.count - 1 > 1 ? product.count - 1 : 1,
                priceTotal: (product.count - 1 > 1 ? product.count - 1 : 1) * product.price
            }
            : product
        ))
    }

    const changeValue = (id: number, value: number) => {
        setCart(cart.map(product => product.id === id
            ? {
                ...product,
                count: value,
                priceTotal: value * product.price
            }
            : product
        ))
    }

    const products = cart.map(product => {
        return <Product
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
            increase={increase}
            decrease={decrease}
            changeValue={changeValue}
        />
    })

    return (
        <section className="cart">
            <CartHeader/>
            {products}
            <CartFooter total={total}/>
        </section>
    );
};

