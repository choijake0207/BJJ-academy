import React from 'react'

export default function ListItem({goal, handleCheck, handleDelete}) {
  return (
    <li className="list-item">
        <input
          type="checkbox"
          value={goal.completed}
          checked={goal.completed === true}
          onChange={(e) => handleCheck(e.target.checked)}
        />
        <h4>{goal.text}</h4>
        <p><i>{goal.category}</i></p>
        <button onClick={() => handleDelete(goal.id)}>Delete</button>
    </li>
  )
}
