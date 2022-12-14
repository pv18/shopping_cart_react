import React from 'react';
import './_vars.scss';
import './_reset.scss';
import './_base.scss';
import './_section-cart.scss';
import {Title} from '../Title/Title';
import {Cart} from '../Cart';
import {CartProvider} from '../../context/CartContext';

const App = () => {
    return (
        <section className="section-cart">
            <header className="section-cart__header">
                <div className="container">
                    <Title/>
                </div>
            </header>
            <div className="section-cart__body">
                <div className="container">
                    <CartProvider>
                        <Cart/>
                    </CartProvider>
                </div>
            </div>
        </section>

    );
};

export default App;