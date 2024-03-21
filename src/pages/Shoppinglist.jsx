import React, { useState } from "react";
import "./Shoppinglist.css";

function ShoppingList() {
  const [list, setList] = useState([
    { id: 1, text: "Test 1" },
    { id: 2, text: "Test 2" },
    { id: 3, text: "Test 3" },
  ]);
  const [newItem, setNewItem] = useState("");

  function addItem() {
    if (newItem.trim() !== "") {
      setList([...list, { id: Date.now(), text: newItem.trim() }]);
      setNewItem("");
    }
  }

  function removeItem(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <div className="shopping-list-container">
      <h3 className="shopping-list-title">Shopping List</h3>
      <div>
        <input
          type="text"
          className="shopping-list-input"
          placeholder="Enter prodcut name..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="shopping-list-button" onClick={addItem}>
          Add Item
        </button>
      </div>
      <ul className="shopping-list">
        {list.map((item) => (
          <li key={item.id} className="shopping-list-item">
            <span className="shopping-list-item-text">{item.text}</span>
            <button
              className="shopping-list-remove-button"
              onClick={() => removeItem(item.id)}
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
