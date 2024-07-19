import React from 'react'

export default function ListItem({goal}) {
  return (
    <li className="list-item">
        <h4>{goal.text}</h4>
        <p><i>{goal.category}</i></p>
    </li>
  )
}
