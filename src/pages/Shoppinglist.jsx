import { useState } from 'react';
import './Shoppinglist.css';

function ShoppingList() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState('');

  function addItem() {
    if (newItem.trim() !== '') {
      console.log('adding');
      const copy = [...list, { text: newItem, showRemoveButton: true }];
      setList(copy);
      setNewItem('');
    }
  }

  function removeItem(index) {
    const copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  }

  function handleInputChange(e) {
    setNewItem(e.target.value);
  }

  return (
    <div className="shopping-list page">
      <h3>Shopping List</h3>
      <div className="box">
        <input type="text" value={newItem} onChange={handleInputChange} />
        <button onClick={addItem} className="btn btn-sm btn-success">
          Add
        </button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.text}
            {item.showRemoveButton && (
              <button
                onClick={() => removeItem(index)}
                className="btn btn-sm btn-danger"
              >
                Remove
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;