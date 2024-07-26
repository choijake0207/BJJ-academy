import React, { useState, useContext, useEffect } from 'react'
import CheckListForm  from './CheckListForm'
import ListItem from './ListItem'
import "../../Styles/CheckList.css"
import { AuthContext } from '../../Context/AuthContext'


export default function CheckList({isStudent}) {
    const {handlePropertyChange, authUser} = useContext(AuthContext)
    const [list, setList] = useState(authUser ? authUser.activity.todos : [])
    const [formOn, setFormOn] = useState(false)

    // useEffect(() => {
    //     handlePropertyChange("todos", list) 
    // }, [list])

    const handleAddItem = (item) => {
        setList(prev => [...prev, item])
    }
    const handleCheckItem = (id, status) => {
        setList(prev => prev.map(item => item.id === id ? 
            {...item, completed: status} : item
        ))
    }
    const handleDeleteItem = (id) => {
        setList(prev => prev.filter(item => item.id !== id))
    }
  return (
    <section className="checklist-component">
        <h3>{isStudent ? "Training Goals" : "Admin To Do's"}</h3>
        <ul className="checklist">
            {list.map(item => 
                <ListItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheckItem}
                    handleDelete={handleDeleteItem}
                />
            )}
        </ul>
        <button onClick={() => setFormOn(true)}>{isStudent ? "Add Goal" : "Add To Do"}</button>
        {formOn  && 
            <CheckListForm
                addItem={handleAddItem}
                exitForm={() => setFormOn(false)}
                isStudent={isStudent}
            />
        }   

        
    </section>
  )
}
