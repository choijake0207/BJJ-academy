import React, { useState } from 'react'

export function CheckListForm () {
    return (
        <form className="checklist-form">
            <textarea
            placeholder="Add A Training Goal"
            />

        </form>
        
    )
}


export default function CheckList() {
    const [list, setList] = useState([])
  return (
    <div className="checklist">
        <h4>Training Goals</h4>

        
    </div>
  )
}
