import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import iconClose from "@icons/icon_close.png";
import '@styles/OrderItem.scss';

const OrderItem = ({ product }) => {
    const { removeFromCart, state } = useContext(AppContext);

    const handleRemove = item => {
        console.log(state);
        console.log(item);
        removeFromCart(item);
    };

    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>{product.price} COP</p>
            <img src={iconClose} alt="close" onClick={() => handleRemove(product)} />
        </div>
    );
}

export default OrderItem;