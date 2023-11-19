import React, { useState } from 'react';
import ProductCatalog from './components/ProductCatalog';
import ShoppingCart from './components/ShoppingCart';
import products from './data/Product';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = [...cart];
    const indexToRemove = updatedCart.findIndex((item) => item.id === productId);

    if (indexToRemove !== -1) {
      updatedCart.splice(indexToRemove, 1);
      setCart(updatedCart);
    }
  };


  return (
    <div style={{ width: '75%', margin: 'auto', backgroundColor: '#FAF6F0', padding: '2rem' }} className="App">
      <h1>Welcome to My E-commerce Store</h1>
      <ProductCatalog products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
