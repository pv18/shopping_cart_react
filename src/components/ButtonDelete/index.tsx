import React from 'react';

interface Props {
    deleteProduct: () => void
}

export const ButtonDelete = ({deleteProduct}: Props) => {
    return (
        <button type="button" onClick={deleteProduct}>
            <img src="./img/icons/cross.svg" alt="Delete"/>
        </button>
    );
};

