import React, {createContext, useState} from 'react'
import { Users } from '../Assets/Users'

export const AuthContext = createContext(null)

// right now, every function updates both state and local storage
// eventually, move state updaters into useEffect and initialize state from local storage

export function AuthContextProvider ({children}) {

    const [authUser, setAuthUser] = useState(() => {
        const savedUser = localStorage.getItem("user") // to initialize state across sessions
        return savedUser ? JSON.parse(savedUser) : null
    })

    //handler is updating both state and storage => move state updater into useEFfect
    const handlePropertyChange = (property, value) => {
        setAuthUser(prev => {
            const updatedUser = {...prev, [property]: value} 
            localStorage.setItem("user", JSON.stringify(updatedUser))
            return updatedUser
        })
    }

    const login = ({username, password}) => {
        const user = Users.find(user => user.username === username && user.password === password)
        if (!user) {
            console.log("Incorrect Credentials")
            alert("Incorrect Credentials")
        } else {
            setAuthUser(user)
            localStorage.setItem("user", JSON.stringify(user))
            console.log("Login Success")
        }
    }

    const logout = () => {
        localStorage.removeItem("user")
        setAuthUser(null)
        console.log("Logged Out Succesfully")
    }
    const values = {authUser, login, logout, handlePropertyChange}


    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}