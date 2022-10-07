import React from 'react';
import './style.scss';
import {ITotal} from '../../types/shared';
import {priceFormatter} from '../../utils/priceFormatter';

interface Props {
    total: ITotal
}

export const CartFooter = ({total}: Props) => {
    const {count, price} = total

    return (
        <footer className="cart-footer">
            <div className="cart-footer__count">{count} ед.</div>
            <div className="cart-footer__price">
                {priceFormatter(price)} руб.
            </div>
        </footer>
    );
};

