import React, { useState, useContext } from 'react'
import CheckListForm  from './CheckListForm'
import ListItem from './ListItem'
import "../../Styles/CheckList.css"
import { AuthContext } from '../../Context/AuthContext'


export default function CheckList() {
    const {handlePropertyChange} = useContext(AuthContext)
    const [list, setList] = useState([])
    const [formOn, setFormOn] = useState(false)
    const handleAddGoal = (goal) => {
        setList(prev => {
            const updatedList = [...list, goal]
            handlePropertyChange("todos", updatedList)
            return updatedList
        })
        
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
