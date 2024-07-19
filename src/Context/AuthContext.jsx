import React, {createContext, useState} from 'react'
import { Users } from '../Assets/Users'

export const AuthContext = createContext(null)

export function AuthContextProvider ({children}) {

    const [authUser, setAuthUser] = useState()

    const login = ({username, password}) => {
        const user = Users.find(user => user.username === username && user.password === password)
        if (!user) {
            console.log("Incorrect Credentials")
            alert("Incorrect Credentials")
        } else {
            setAuthUser(user)
        }
    }

    const values = {authUser, login}


    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}