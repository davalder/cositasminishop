import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import iconClose from "@icons/icon_close.png";
import '../styles/ProductInfo.scss';


const ProductInfo = ({ product, toggleProductInfo, setToggleProductInfo, added, setAdded }) => {
    const { state, addToCart, removeFromCart } = useContext(AppContext);

    const handleClick = item => {
        added ? removeFromCart(item) : addToCart(item);
        setAdded(!added);
        console.log('in cart: ', state.cart.includes(item));
    }

    return (
        <>
            <div className="ProductInfo">
                <img
                    className='icon-close-modal'
                    src={iconClose}
                    alt="close"
                    onClick={() => setToggleProductInfo(!toggleProductInfo)}
                />
                <div className="ProductInfo-container">
                    <img src={product.images[0]} alt={product.title} />
                    <div className='ProductInfo-details'>
                        <div className='ProductInfo-details-basic'>
                            <p>{product.price} COP</p>
                            <p>{product.title}</p>
                        </div>
                        <p className='ProductInfo-details-description'>{product.description}</p>
                    </div>
                    <button className="primary-button add-to-cart-button" onClick={() => handleClick(product)}>
                        {!added ? 'Agregar al carrito' : 'Remover del carrito'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductInfo;