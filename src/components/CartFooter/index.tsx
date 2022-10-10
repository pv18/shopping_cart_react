import React, {useContext} from 'react';
import './style.scss';
import {priceFormatter} from '../../utils/priceFormatter';
import {CartContext} from '../../context/CartContext';

export const CartFooter = () => {
    const {total} = useContext(CartContext)
    const {count, price} = total

    return (
        <footer className="cart-footer">
            <div className="cart-footer__count">{count} ед.</div>
            <div className="cart-footer__price">
                {priceFormatter(price)} $
            </div>
        </footer>
    );
};

