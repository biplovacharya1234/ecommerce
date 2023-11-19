import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cart.map((item) => (
                <div key={item.id}>
                    <p>
                        {item.name} - ${item.price}
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </p>
                </div>
            ))}
            <p>Total: ${totalPrice}</p> {/* Display total */}
        </div>
    );
};

export default ShoppingCart;
