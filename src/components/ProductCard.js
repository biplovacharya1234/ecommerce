import React from 'react';
import productImage from '../assets/product1.jpg'; // Adjust the path accordingly

const ProductCard = ({ product, addToCart }) => {
    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-card">
            <img style={{ width: '160px', height: '160px' }} src={productImage} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
