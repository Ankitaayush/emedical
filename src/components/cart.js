import React, { useState } from 'react';
import "../public/cart.css"
const Cart = () => {
  const [items, setItems] = useState([]);

  const addToCart = item => {
    setItems([...items, item]);
  };

  const removeFromCart = index => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart('Medical Item')}>Add to Cart</button>
    </div>
  );
};

export default Cart;
