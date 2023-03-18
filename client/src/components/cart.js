import React, { useState } from 'react';
import '../public/cart.css';

function CartItem({ id, name, price, quantity, onDelete, onAdd }) {
  const handleQuantityChange = (event) => {
    const newQuantity = Number(event.target.value);
    onAdd(id, newQuantity);
  };

  return (
    <div className="CartItem">
      <p className="CartItem-name">{name}</p>
      <p className="CartItem-price">${price}</p>
      <div className="CartItem-controls">
        <button className="CartItem-delete" onClick={() => onDelete(id)}>Delete</button>
        <div>
          <input
            className="CartItem-quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', price: 10.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 5.99, quantity: 1 },
  ]);

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleAddItem = (id, quantity) => {
    const existingItem = items.find((item) => item.id === id);
    if (existingItem) {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        } else {
          return item;
        }
      });
      setItems(updatedItems);
    } else {
      const item = { id, name: `Product ${id}`, price: Math.floor(Math.random() * 10) + 1, quantity };
      setItems([...items, item]);
    }
  };
  

  const total = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <div className="Cart-wrapper">
      <div className="Cart">
        <h2 className="Cart-title">Shopping Cart</h2>
        {items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onDelete={handleDeleteItem}
            onAdd={handleAddItem}
          />
        ))}
        <h3 className="Cart-total">Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;
