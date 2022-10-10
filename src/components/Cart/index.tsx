import React, {useContext} from 'react';
import {CartHeader} from '../CartHeader';
import {Product} from '../Product';
import {CartFooter} from '../CartFooter';
import {CartContext} from '../../context/CartContext';

export const Cart = () => {
    const {cart} = useContext(CartContext)

    const products = cart.map(product => {
        return <Product
            key={product.id}
            product={product}
        />
    })

    return (
        <section className="cart">
            <CartHeader/>
            {products}
            <CartFooter />
        </section>
    );
};

