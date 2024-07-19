import React, {useState} from 'react'

export default function CheckListForm ({addGoal, exitForm}) {
    const [goal, setGoal] = useState({
        text: "",
        category: "",
        id: crypto.randomUUID()
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setGoal(prev => ({...prev, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addGoal(goal)
        setGoal({
            text: "",
            category: "",
            id: crypto.randomUUID()
        })
        exitForm()
    }
    return (
        <form className="checklist-form" onSubmit={handleSubmit}>
            <button onClick={exitForm}>Exit</button>
            <label>
                What Is Your Goal?
            </label>
            <textarea
                name="text"
                value={goal.text}
                required
                onChange={(e)=>handleChange(e)}
            />
            <label>
                Which Position Does Your Goal Relate To?
            </label>
            <select
                name="category"
                value={goal.category}
                required
                onChange={(e)=>handleChange(e)}
            >
                <option value="">Select A Position</option>
                <option value="guard">Guard</option>
                <option value="mount">Mount</option>
                <option value="sidecontrol">Side Control</option>
                <option value="backcontrol">Back Control</option>
                <option value="turtle">Turtle</option>
            </select>
            <button type="submit">Create</button>

        </form>
        
    )
}