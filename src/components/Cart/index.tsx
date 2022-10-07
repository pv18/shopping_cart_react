import React from 'react';
import {CartHeader} from '../CartHeader';
import {Product} from '../Product';
import {CartFooter} from '../CartFooter';

export const Cart = () => {
    return (
        <section className="cart">
            <CartHeader/>
            <Product/>
            <CartFooter/>
        </section>
    );
};

