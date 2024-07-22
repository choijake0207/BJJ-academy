import React, {useState} from 'react'

export default function CheckListForm ({addItem, exitForm, isStudent}) {
    const [item, setItem] = useState({
        text: "",
        category: "",
        completed: false,
        id: crypto.randomUUID()
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setItem(prev => ({...prev, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(item)
        setItem({
            text: "",
            category: "",
            completed: false,
            id: crypto.randomUUID()
        })
        exitForm()
    }
    return (
        <form className="checklist-form" onSubmit={handleSubmit}>
            <button onClick={exitForm}>Exit</button>
            {isStudent ? 
            <> 
                <label>
                    What Is Your Goal?
                </label>
                <textarea
                    name="text"
                    value={item.text}
                    required
                    onChange={(e)=>handleChange(e)}
                />
                <label>
                    Which Position Does Your Goal Relate To?
                </label>
                <select
                    name="category"
                    value={item.category}
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
            </> : <>
                <label>Add A To Do:</label>
                <textarea 
                    value={item.text}
                    name="text"
                    onChange={(e) => handleChange(e)}
                />
            </>}
            <button type="submit">Create</button>

        </form>
        
    )
}