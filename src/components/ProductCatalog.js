import React from 'react';
import ProductCard from './ProductCard';

const ProductCatalog = ({ products, addToCart }) => {
    return (
        <div className="product-catalog">
            <h2>Products</h2>
            <div style={{ display: 'flex', gap: '2rem' }}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>

        </div>
    );
};

export default ProductCatalog;
