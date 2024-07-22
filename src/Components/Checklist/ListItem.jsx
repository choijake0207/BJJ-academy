import React from 'react'

export default function ListItem({item, handleCheck, handleDelete}) {
  return (
    <li className="list-item">
        <input
          type="checkbox"
          value={item.completed}
          checked={item.completed === true}
          onChange={(e) => handleCheck(item.id, e.target.checked)}
        />
        <h4>{item.text}</h4>
        <p><i>{item.category}</i></p>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  )
}
