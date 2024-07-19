import React, { useState } from 'react'
import CheckListForm  from './CheckListForm'
import ListItem from './ListItem'

export default function CheckList() {
    const [list, setList] = useState([])
    const [formOn, setFormOn] = useState(false)
    const handleAddGoal = (goal) => {
        setList(prev => [...prev, goal])
    }
  return (
    <div className="checklist-component">
        <h4>Training Goals</h4>
        <ul className="checklist">
            {list.map(goal => 
                <ListItem
                    goal={goal}
                />
            )}
        </ul>
        <button onClick={() => setFormOn(true)}>Add Goal</button>
        {formOn  && 
            <CheckListForm
                addGoal={handleAddGoal}
                exitForm={() => setFormOn(false)}
            />
        }   

        
    </div>
  )
}
