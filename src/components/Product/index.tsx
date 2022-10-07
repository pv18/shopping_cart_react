import React from 'react';
import {Counter} from '../Counter';
import {ButtonDelete} from '../ButtonDelete';
import './style.scss';

export const Product = () => {
    return (
        <section className="product">
            <div className="product__img"><img src="./img/products/macbook.jpg"
                                               alt="Apple MacBook Air 13"/></div>
            <div className="product__title">Apple MacBook Air 13</div>
            <div className="product__count">
                <Counter/>
            </div>
            <div className="product__price">110 000 руб.</div>
            <div className="product__controls">
                <ButtonDelete/>
            </div>
        </section>
    );
};

