import React, {createContext, useState} from 'react'
import { Users } from '../Assets/Users'

export const AuthContext = createContext(null)

export function AuthContextProvider ({children}) {

    const [authUser, setAuthUser] = useState(() => {
        const savedUser = localStorage.getItem("user")
        // add validator function to check savedUser against valid users
        return savedUser ? JSON.parse(savedUser) : null
    })

    

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

    const values = {authUser, login}


    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}