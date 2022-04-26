import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext from "@context/AppContext";
import iconBtAddCart from "@icons/bt_add_to_cart.svg";
import iconBtAddedCart from "@icons/bt_added_to_cart.svg"
import ProductInfo from './ProductInfo';

const ProductItem = ({ product }) => {
    const { state, addToCart, removeFromCart } = useContext(AppContext);
    const [added, setAdded] = useState(false);
    const [toggleProductInfo, setToggleProductInfo] = useState(false);

    const handleClick = item => {
        added ? removeFromCart(item) : addToCart(item);
        setAdded(!added);
        console.log('in cart: ', state.cart.includes(item));
    }

    const handleToggleProductInfo = () => {
        setToggleProductInfo(!toggleProductInfo);
        console.log(toggleProductInfo);
        console.log(product.title)
    }

    return (
        <>
            <div className="ProductItem">
                <img src={product.images[0]} alt={product.title} onClick={handleToggleProductInfo} />
                <div className="product-info">
                    <div>
                        <p>{product.price} COP</p>
                        <p>{product.title}</p>
                    </div>
                    <figure onClick={() => handleClick(product)} >
                        {added ? <img src={iconBtAddedCart} alt="" /> : <img src={iconBtAddCart} alt="" />}
                    </figure>
                </div>
            </div>
            {toggleProductInfo &&
                <ProductInfo product={product}
                toggleProductInfo={toggleProductInfo}
                setToggleProductInfo={setToggleProductInfo}
                added={added}
                setAdded={setAdded}
            />}
        </>
    );
}

export default ProductItem;

