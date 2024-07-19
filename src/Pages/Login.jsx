import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


export function LoginForm ({handleLogin}) {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm(prev => ({...prev, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(form)
        navigate("/")
        
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={form.username}
                onChange={(e) => handleChange(e)}
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                value={form.password}
                onChange={(e) => handleChange(e)}
            />
            <button type="submit">Log In</button>
        </form>
    )
}



export default function Login() {
    const {login} = useContext(AuthContext)

  return (
    <div className="login">
        <section>
            <h3>Welcome to BJJ MGMT</h3>
            <p>Login To Get Started</p>
            <LoginForm
                handleLogin={login}
            />
        </section>
        
    </div>
       
  )
}
