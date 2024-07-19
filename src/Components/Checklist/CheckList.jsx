import React, { useState, useContext, useEffect } from 'react'
import CheckListForm  from './CheckListForm'
import ListItem from './ListItem'
import "../../Styles/CheckList.css"
import { AuthContext } from '../../Context/AuthContext'


export default function CheckList() {
    const {handlePropertyChange, authUser} = useContext(AuthContext)
    const [list, setList] = useState(authUser ? authUser.todos : [])
    const [formOn, setFormOn] = useState(false)

    useEffect(() => {
        handlePropertyChange("todos", list) 
    }, [list])

    const handleAddGoal = (goal) => {
        setList(prev => [...prev, goal])
    }
    const handleCheckGoal = (id, status) => {
        setList(prev => prev.map(goal => goal.id === id ? 
            {...goal, completed: status} : goal
        ))
    }
    const handleDeleteGoal = (id) => {
        setList(prev => prev.filter(goal => goal.id !== id))
    }
  return (
    <section className="checklist-component">
        <h2>Training Goals</h2>
        <ul className="checklist">
            {list.map(goal => 
                <ListItem
                    key={goal.id}
                    goal={goal}
                    handleCheck={handleCheckGoal}
                    handleDelete={handleDeleteGoal}
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

        
    </section>
  )
}
