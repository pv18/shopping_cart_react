import React from 'react';
import {Counter} from '../Counter';
import {ButtonDelete} from '../ButtonDelete';
import {IProduct} from '../../types/shared';
import './style.scss';
import {priceFormatter} from '../../utils/priceFormatter';

interface Props {
    product: IProduct
    deleteProduct: (id: number) => void
    increase: (id: number) => void
    decrease: (id: number) => void
    changeValue: (id: number, value: number) => void
}

export const Product = ({product, deleteProduct, increase, decrease, changeValue}: Props) => {
    const {id, img, title, priceTotal, count} = product

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
        changeValue(id,value)
    }

    return (
        <section className="product">
            <div className="product__img">
                <img src={`./img/products/${img}`} alt={title}/>
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
                {priceFormatter(priceTotal)} руб.
            </div>
            <div className="product__controls">
                <ButtonDelete deleteProduct={deleteProductHandler}/>
            </div>
        </section>
    );
};

