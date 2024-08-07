import React, {act, createContext, useEffect, useState} from 'react'
import { Users } from "../Models/User"

export const AuthContext = createContext(null)



export function AuthContextProvider ({children}) {

    const [authUser, setAuthUser] = useState(() => {
        const activeUser = localStorage.getItem("user") // initialize state from localStorage to preserve session data
        return activeUser ? JSON.parse(activeUser) : null   // initializer only runs once on mount
    })
    

    //handler is only going to update state
    const handlePropertyChange = (path, value) => {
        setAuthUser(prev => {
            const updatedUser = {...prev}
            const keys = path.split(".") 
            let currentUser = updatedUser
            keys.slice(0,-1).forEach(key => {
                if (!currentUser[key]) current[key] = {}
                currentUser = currentUser[key]
            })
            current[keys[keys.length -1]] = value;
            return updatedUser
        })
    }

    // synchronize local storage to current state
    useEffect(() => {
        localStorage.set("user", JSON.stringify(authUser))
    }, [authUser])

    const login = ({username, password}) => {
        const user = Users.find(user => user.username === username && user.password === password)
        if (!user) {
            console.log("Incorrect Credentials")
            alert("Incorrect Credentials")
        } else {
            localStorage.setItem("user", JSON.stringify(user))
            setAuthUser(user)           
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