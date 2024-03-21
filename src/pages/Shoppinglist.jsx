import React, { useState } from 'react';
import './Shoppinglist.css';
function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  function addItem() {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  }

  function removeItem(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <div className="shopping-list-container">
      <h1 className="shopping-list-title">Shopping List</h1>
      <div className="shopping-list-item">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="shopping-list-input"
          placeholder="Enter an item"
        />
        <button onClick={addItem} className="shopping-list-button">
          Cart
        </button>
      </div>
      <ul className="shopping-list">
        {items.map((item, index) => (
          <li key={index} className="shopping-list-item">
            <span className="shopping-list-item-text">{item}</span>
            <button
              onClick={() => removeItem(index)}
              className="shopping-list-remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
