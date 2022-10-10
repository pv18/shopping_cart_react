import React, {useContext} from 'react';
import {Counter} from '../Counter';
import {ButtonDelete} from '../ButtonDelete';
import {IProduct} from '../../types/shared';
import './style.scss';
import {priceFormatter} from '../../utils/priceFormatter';
import {CartContext} from '../../context/CartContext';

interface Props {
    product: IProduct
}

export const Product = ({product}: Props) => {
    const {id, image, title, price, count} = product
    const {deleteProduct, increase, decrease, changeValue} = useContext(CartContext)

    const deleteProductHandler = () => {
        deleteProduct(id)
    }

    const increaseHandler = () => {
        increase(id)
    }

    const decreaseHandler = () => {
        decrease(id)
    }

    const changeValueHandler = (value: number) => {
        changeValue(id, value)
    }

    return (
        <section className="product">
            <div className="product__img">
                <img src={image} alt={title}/>
            </div>
            <div className="product__title">{title}</div>
            <div className="product__count">
                <Counter
                    count={count}
                    increase={increaseHandler}
                    decrease={decreaseHandler}
                    changeValue={changeValueHandler}
                />
            </div>
            <div className="product__price">
                {priceFormatter(price * count)} $
            </div>
            <div className="product__controls">
                <ButtonDelete deleteProduct={deleteProductHandler}/>
            </div>
        </section>
    );
};

