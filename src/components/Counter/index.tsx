import React from 'react';
import './style.scss';

interface Props {
    count: number
    increase: () => void
    decrease: () => void
    changeValue: (value: number) => void
}

export const Counter = ({count, increase, decrease, changeValue}: Props) => {
    return (
        <div className="count">
            <div className="count__box">
                <input
                    type="number"
                    className="count__input"
                    min="1"
                    max="100"
                    value={count}
                    onChange={(e) => changeValue(+e.currentTarget.value)}
                />
            </div>
            <div className="count__controls">
                <button type="button" className="count__up" onClick={increase}>
                    <img src="./img/icons/icon-up.svg" alt="Increase"/>
                </button>
                <button type="button" className="count__down" onClick={decrease}>
                    <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                </button>
            </div>
        </div>
    );
};

